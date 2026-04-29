import { useState, useEffect } from 'react';
import { client, writeClient, urlFor } from '../../lib/sanity';

export default function AdminNews() {
  const [newsList, setNewsList] = useState([]);
  const [loading, setLoading] = useState(true);
  
  // Form State
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [editingId, setEditingId] = useState(null);
  
  const [formData, setFormData] = useState({
    title: '',
    category: 'sosialisasi',
    excerpt: '',
    bodyText: '',
  });
  const [imageFile, setImageFile] = useState(null);

  useEffect(() => {
    fetchNews();
  }, []);

  const fetchNews = async () => {
    setLoading(true);
    try {
      const data = await client.fetch(`
        *[_type == "news"] | order(publishedAt desc) {
          _id, title, category, publishedAt, image, "bodyText": pt::text(body), excerpt
        }
      `);
      setNewsList(data);
    } catch (error) {
      console.error("Error fetching news:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setImageFile(e.target.files[0]);
    }
  };

  const generateSlug = (text) => {
    return text.toString().toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/[^\w\-]+/g, '')
      .replace(/\-\-+/g, '-')
      .replace(/^-+/, '')
      .replace(/-+$/, '');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      let imageAsset = null;
      if (imageFile) {
        imageAsset = await writeClient.assets.upload('image', imageFile);
      }

      const doc = {
        _type: 'news',
        title: formData.title,
        slug: { _type: 'slug', current: generateSlug(formData.title) },
        category: formData.category,
        excerpt: formData.excerpt,
        body: [{
          _type: 'block',
          children: [{ _type: 'span', text: formData.bodyText }]
        }],
        publishedAt: new Date().toISOString(),
      };

      if (imageAsset) {
        doc.image = {
          _type: 'image',
          asset: { _type: "reference", _ref: imageAsset._id }
        };
      }

      if (editingId) {
        if (!imageAsset) delete doc.image; // Keep existing if no new image
        await writeClient.patch(editingId).set(doc).commit();
      } else {
        await writeClient.create(doc);
      }

      setIsFormOpen(false);
      resetForm();
      fetchNews();
    } catch (error) {
      console.error("Error saving news:", error);
      alert("Terjadi kesalahan saat menyimpan berita.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDelete = async (id) => {
    if (confirm("Apakah Anda yakin ingin menghapus berita ini?")) {
      try {
        await writeClient.delete(id);
        fetchNews();
      } catch (error) {
        console.error("Error deleting:", error);
      }
    }
  };

  const handleEdit = (newsItem) => {
    setEditingId(newsItem._id);
    setFormData({
      title: newsItem.title || '',
      category: newsItem.category || 'sosialisasi',
      excerpt: newsItem.excerpt || '',
      bodyText: newsItem.bodyText || '',
    });
    setImageFile(null);
    setIsFormOpen(true);
  };

  const resetForm = () => {
    setEditingId(null);
    setFormData({ title: '', category: 'sosialisasi', excerpt: '', bodyText: '' });
    setImageFile(null);
  };

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="font-headline-section text-2xl text-on-surface">Kelola Berita</h1>
          <p className="text-on-surface-variant mt-1">Kelola data berita BNN Kota Sawahlunto</p>
        </div>
        {!isFormOpen && (
          <button 
            onClick={() => { resetForm(); setIsFormOpen(true); }}
            className="bg-primary text-on-primary px-4 py-2 rounded-lg font-label-bold flex items-center gap-2 hover:bg-primary-fixed-variant transition-colors"
          >
            <span className="material-symbols-outlined">add</span> Tambah Berita
          </button>
        )}
      </div>

      {isFormOpen ? (
        <div className="bg-surface rounded-2xl shadow-sm border border-outline-variant/30 p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="font-headline-card text-xl text-on-surface">{editingId ? 'Edit Berita' : 'Tambah Berita Baru'}</h2>
            <button onClick={() => setIsFormOpen(false)} className="text-on-surface-variant hover:text-error transition-colors">
              <span className="material-symbols-outlined">close</span>
            </button>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="font-label-bold text-sm text-on-surface-variant block mb-1">Judul <span className="text-error">*</span></label>
              <input type="text" name="title" required value={formData.title} onChange={handleInputChange} className="w-full border border-outline-variant rounded-lg px-3 py-2" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="font-label-bold text-sm text-on-surface-variant block mb-1">Kategori <span className="text-error">*</span></label>
                <select name="category" value={formData.category} onChange={handleInputChange} className="w-full border border-outline-variant rounded-lg px-3 py-2 bg-surface">
                  <option value="sosialisasi">Sosialisasi</option>
                  <option value="operasi">Operasi</option>
                  <option value="rehabilitasi">Rehabilitasi</option>
                  <option value="kegiatan">Kegiatan</option>
                  <option value="pengumuman">Pengumuman</option>
                </select>
              </div>
              <div>
                <label className="font-label-bold text-sm text-on-surface-variant block mb-1">Gambar Utama {editingId ? '(Biarkan kosong jika tidak diubah)' : '*'}</label>
                <input type="file" accept="image/*" onChange={handleFileChange} required={!editingId} className="w-full border border-outline-variant rounded-lg px-3 py-1.5" />
              </div>
            </div>
            <div>
              <label className="font-label-bold text-sm text-on-surface-variant block mb-1">Ringkasan</label>
              <textarea name="excerpt" value={formData.excerpt} onChange={handleInputChange} rows="2" className="w-full border border-outline-variant rounded-lg px-3 py-2 resize-none"></textarea>
            </div>
            <div>
              <label className="font-label-bold text-sm text-on-surface-variant block mb-1">Konten Berita <span className="text-error">*</span></label>
              <textarea name="bodyText" required value={formData.bodyText} onChange={handleInputChange} rows="8" className="w-full border border-outline-variant rounded-lg px-3 py-2 resize-none"></textarea>
            </div>
            <div className="flex justify-end gap-3 pt-4 border-t border-outline-variant/30">
              <button type="button" onClick={() => setIsFormOpen(false)} className="px-4 py-2 font-label-bold text-on-surface-variant hover:bg-surface-container rounded-lg transition-colors">Batal</button>
              <button type="submit" disabled={isSubmitting} className="bg-primary text-on-primary px-6 py-2 rounded-lg font-label-bold flex items-center gap-2 hover:bg-primary-fixed-variant transition-colors disabled:opacity-70">
                {isSubmitting ? 'Menyimpan...' : 'Simpan'}
              </button>
            </div>
          </form>
        </div>
      ) : (
        <div className="bg-surface rounded-2xl shadow-sm border border-outline-variant/30 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-surface-container-low border-b border-outline-variant/30">
                  <th className="py-3 px-4 font-label-bold text-on-surface-variant">Gambar</th>
                  <th className="py-3 px-4 font-label-bold text-on-surface-variant">Judul</th>
                  <th className="py-3 px-4 font-label-bold text-on-surface-variant">Kategori</th>
                  <th className="py-3 px-4 font-label-bold text-on-surface-variant text-right">Aksi</th>
                </tr>
              </thead>
              <tbody>
                {loading ? (
                  <tr>
                    <td colSpan="4" className="py-8 text-center text-on-surface-variant">Memuat data...</td>
                  </tr>
                ) : newsList.length === 0 ? (
                  <tr>
                    <td colSpan="4" className="py-8 text-center text-on-surface-variant">Belum ada berita.</td>
                  </tr>
                ) : (
                  newsList.map((item) => (
                    <tr key={item._id} className="border-b border-outline-variant/30 hover:bg-surface-container-lowest">
                      <td className="py-3 px-4">
                        {item.image && (
                          <img src={urlFor(item.image).width(100).height(60).url()} alt={item.title} className="w-20 h-12 object-cover rounded" />
                        )}
                      </td>
                      <td className="py-3 px-4 font-label-bold text-on-surface">{item.title}</td>
                      <td className="py-3 px-4 capitalize">{item.category}</td>
                      <td className="py-3 px-4 text-right">
                        <button onClick={() => handleEdit(item)} className="p-2 text-primary hover:bg-primary-container rounded-lg mr-2">
                          <span className="material-symbols-outlined text-[20px]">edit</span>
                        </button>
                        <button onClick={() => handleDelete(item._id)} className="p-2 text-error hover:bg-error-container rounded-lg">
                          <span className="material-symbols-outlined text-[20px]">delete</span>
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
