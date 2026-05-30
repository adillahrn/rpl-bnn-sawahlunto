import { createClient } from '@sanity/client';
import fs from 'fs';
import path from 'path';

const projectId = 'yexllst0';
const dataset = 'production';
const token = 'skyN3kVs3XzbP1pf6byN8sq2uxZJR2sfTW5sEhhV2UFzw7VVPrak3bMjj6HGeqUPpQAGfBDiuk9mA90ajsigioGvI3h78t08sPut0Zj0LCMl3xLiwoMUcY9QbYvutkNlE3wee3FPA577z3n7JBh90A10VAtTRq9p8nuJP49OWygsMeAEA0Au';

const client = createClient({
  projectId,
  dataset,
  useCdn: false,
  apiVersion: '2024-01-01',
  token,
});

function generateSlug(text) {
  return text.toString().toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '');
}

async function seed() {
  console.log('Starting seed process...');

  try {
    // 1. Upload the dummy image
    console.log('Uploading dummy image...');
    const imagePath = path.resolve('public/bnn-logo.png');
    
    // Fallback if public/bnn-logo.png doesn't exist, we will use src/assets/bnn.jpg
    let imageToUpload = imagePath;
    if (!fs.existsSync(imageToUpload)) {
      imageToUpload = path.resolve('src/assets/bnn.jpg');
    }
    
    const imageAsset = await client.assets.upload('image', fs.createReadStream(imageToUpload), {
      filename: path.basename(imageToUpload)
    });
    console.log('Image uploaded. Asset ID:', imageAsset._id);

    const imageRef = {
      _type: 'image',
      asset: { _type: 'reference', _ref: imageAsset._id }
    };

    // 2. Prepare Data
    const newsData = [
      {
        title: 'BNN Kota Sawahlunto Gelar Razia Gabungan Tempat Hiburan Malam',
        category: 'operasi',
        excerpt: 'Razia gabungan yang melibatkan TNI, Polri, dan Satpol PP menjaring beberapa pengunjung yang terindikasi menggunakan narkoba.',
        bodyText: 'Badan Narkotika Nasional (BNN) Kota Sawahlunto bersama aparat penegak hukum yang terdiri dari TNI, Polri, dan Satpol PP menggelar razia gabungan di sejumlah tempat hiburan malam pada akhir pekan lalu. Kegiatan ini bertujuan untuk menekan angka peredaran dan penyalahgunaan narkotika di wilayah Kota Sawahlunto.\n\nDalam operasi bersinar ini, petugas melakukan tes urine secara acak kepada pengunjung dan pegawai tempat hiburan. Kepala BNN Kota Sawahlunto menyatakan bahwa langkah ini merupakan wujud nyata komitmen pemerintah dalam menciptakan lingkungan yang bersih dari narkoba (Bersinar).\n\nHasil dari razia tersebut, beberapa pengunjung yang terindikasi positif menggunakan narkoba telah diamankan ke kantor BNN untuk dilakukan asesmen medis dan rehabilitasi. "Fokus kami tidak hanya penindakan, tetapi juga upaya penyelamatan melalui program rehabilitasi," tegasnya.',
      },
      {
        title: 'Sosialisasi Bahaya Narkoba Bagi Pelajar Tingkat SMA',
        category: 'sosialisasi',
        excerpt: 'Ratusan siswa antusias mengikuti edukasi bahaya narkoba dan cara membentengi diri dari pergaulan yang salah.',
        bodyText: 'Sebagai langkah preventif, BNN Kota Sawahlunto kembali melaksanakan program sosialisasi Pencegahan, Pemberantasan, Penyalahgunaan, dan Peredaran Gelap Narkotika (P4GN) di berbagai SMA sederajat se-Kota Sawahlunto.\n\nKegiatan ini menghadirkan narasumber ahli yang memberikan pemahaman mendalam mengenai jenis-jenis narkotika baru yang sedang marak, dampak mematikan bagi kesehatan fisik dan mental, serta hukuman pidana yang menanti para pelanggar. Ratusan siswa tampak antusias mengikuti jalannya acara, yang juga diselingi dengan sesi tanya jawab interaktif.\n\nSelain edukasi, BNN juga mengajak para siswa untuk mendeklarasikan gerakan "Pelajar Anti Narkoba" sebagai bentuk komitmen bersama dalam menjaga masa depan generasi muda bangsa dari ancaman bahaya laten narkotika.',
      },
      {
        title: 'Program Desa Bersinar (Bersih Narkoba) Sukses Diterapkan di 3 Desa',
        category: 'kegiatan',
        excerpt: 'Partisipasi aktif masyarakat desa menjadi kunci keberhasilan program Desa Bersinar dalam menangkal peredaran narkoba.',
        bodyText: 'Program Desa Bersih Narkoba (Bersinar) yang digagas oleh BNN mencatatkan progres yang signifikan di Kota Sawahlunto. Sepanjang tahun ini, tiga desa telah sukses mencapai indikator Desa Bersinar berkat sinergi yang luar biasa antara perangkat desa, tokoh masyarakat, dan warga setempat.\n\nKeberhasilan ini ditandai dengan terbentuknya Relawan Anti Narkoba di tingkat desa, berjalannya program ketahanan keluarga, serta minimnya angka pengungkapan kasus narkoba di wilayah tersebut.\n\nBNN Kota Sawahlunto memberikan apresiasi tinggi kepada perangkat desa yang telah aktif. Rencananya, program ini akan diperluas ke lebih banyak desa pada tahun depan guna menciptakan daya tangkal masyarakat yang tangguh menghadapi ancaman narkoba di tingkat akar rumput.',
      }
    ];

    const infoData = [
      {
        title: 'Mengenal Ciri-Ciri Pengguna Narkoba Pada Remaja',
        category: 'artikel',
        mediaType: 'article',
        excerpt: 'Penting bagi orang tua untuk mengetahui tanda-tanda awal perubahan fisik dan perilaku anak yang terpapar narkoba.',
        bodyText: 'Masa remaja merupakan fase transisi yang rentan terhadap berbagai pengaruh negatif, termasuk penyalahgunaan narkotika. Penting bagi orang tua dan lingkungan terdekat untuk lebih peka terhadap perubahan perilaku maupun fisik remaja.\n\nBeberapa ciri fisik yang patut diwaspadai antara lain: penurunan berat badan yang drastis, mata cekung dan merah, muka pucat, serta seringnya mengeluh sakit kepala atau mual tanpa sebab yang jelas.\n\nDari sisi perilaku, remaja yang menggunakan narkoba sering kali menjadi lebih tertutup, mudah marah atau tersinggung, menarik diri dari pergaulan keluarga, menurunnya prestasi akademik, dan kerap berbohong atau mencuri barang di rumah. Jika Anda menemukan tanda-tanda ini, pendekatan persuasif dan konsultasi ke klinik rehabilitasi BNN sangat disarankan.',
      },
      {
        title: 'Langkah Mudah Melaporkan Tindak Pidana Narkotika',
        category: 'regulasi',
        mediaType: 'article',
        excerpt: 'Masyarakat memiliki peran penting dalam memutus mata rantai peredaran narkoba dengan cara berani melapor.',
        bodyText: 'Pemberantasan peredaran gelap narkotika bukan hanya tugas aparat penegak hukum, melainkan tanggung jawab seluruh elemen masyarakat. Undang-Undang Nomor 35 Tahun 2009 tentang Narkotika secara tegas mengatur bahwa masyarakat berhak dan wajib melaporkan jika mengetahui adanya indikasi tindak pidana narkotika.\n\nAnda dapat melaporkan kejadian yang mencurigakan melalui berbagai kanal yang telah disediakan oleh BNN Kota Sawahlunto, termasuk melalui form pengaduan di website ini, layanan telepon 24 jam, atau langsung datang ke kantor BNN. Identitas setiap pelapor dijamin kerahasiaannya dan dilindungi oleh undang-undang.\n\nJangan takut untuk melapor. Setiap informasi sekecil apa pun sangat berharga untuk menyelamatkan lingkungan kita dari ancaman sindikat narkoba.',
      },
      {
        title: 'Prosedur Rehabilitasi Medis dan Sosial Bagi Pecandu',
        category: 'infografis',
        mediaType: 'article',
        excerpt: 'Pecandu narkoba adalah korban yang perlu diselamatkan. Ketahui alur untuk mendapatkan layanan rehabilitasi gratis dari BNN.',
        bodyText: 'Penyalahgunaan narkoba adalah penyakit kronis yang mempengaruhi fungsi otak dan perilaku, sehingga membutuhkan penanganan medis dan psikologis yang komprehensif melalui proses rehabilitasi. BNN menyediakan layanan rehabilitasi ini secara gratis bagi mereka yang dengan sukarela melapor.\n\nProsedur untuk mendapatkan layanan ini cukup mudah. Klien atau pihak keluarga dapat datang langsung ke Klinik Pratama BNN Kota Sawahlunto untuk melakukan pendaftaran. Setelah itu, akan dilakukan tahapan asesmen oleh tim medis dan psikolog untuk menentukan tingkat kecanduan dan rencana terapi yang tepat, apakah rawat jalan atau rawat inap.\n\nFase rehabilitasi meliputi detoksifikasi (medis), rehabilitasi non-medis (sosial dan psikologis), serta tahap bina lanjut (aftercare) untuk mencegah kekambuhan (relapse) saat klien kembali ke masyarakat.',
      },
      {
        title: 'Mengenal Bahaya Narkoba Sintetis Jenis Baru',
        category: 'video',
        mediaType: 'youtube',
        mediaUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', // Placeholder URL
        excerpt: 'Edukasi visual mengenai dampak mematikan dari New Psychoactive Substances (NPS) yang beredar di masyarakat.',
        bodyText: 'Perkembangan jenis narkotika saat ini sangat pesat dengan munculnya New Psychoactive Substances (NPS) atau narkoba sintetis jenis baru. Zat-zat ini sengaja dirancang untuk menghindari jerat hukum dengan memodifikasi struktur kimia dari narkotika yang sudah dilarang.\n\nBahaya dari NPS sangat fatal karena efeknya tidak dapat diprediksi dan bisa berkali-kali lipat lebih kuat dari narkotika alami. Beberapa jenis NPS bahkan disamarkan dalam bentuk permen, liquid vape, atau tembakau (seperti tembakau gorila).\n\nMelalui video edukasi ini, masyarakat diharapkan dapat meningkatkan kewaspadaan terhadap modus-modus peredaran baru dan mengedukasi anggota keluarganya agar tidak mudah terpengaruh mencoba hal-hal yang tidak jelas asal-usulnya.',
      }
    ];

    // 3. Insert News
    console.log('Inserting News...');
    for (const item of newsData) {
      await client.create({
        _type: 'news',
        title: item.title,
        slug: { _type: 'slug', current: generateSlug(item.title) },
        category: item.category,
        excerpt: item.excerpt,
        body: [{
          _type: 'block',
          children: [{ _type: 'span', text: item.bodyText }]
        }],
        publishedAt: new Date().toISOString(),
        image: imageRef
      });
      console.log(`Created News: ${item.title}`);
    }

    // 4. Insert Information
    console.log('Inserting Information...');
    for (const item of infoData) {
      await client.create({
        _type: 'information',
        title: item.title,
        slug: { _type: 'slug', current: generateSlug(item.title) },
        category: item.category,
        mediaType: item.mediaType,
        mediaUrl: item.mediaUrl || '',
        excerpt: item.excerpt,
        body: [{
          _type: 'block',
          children: [{ _type: 'span', text: item.bodyText }]
        }],
        publishedAt: new Date().toISOString(),
        image: imageRef
      });
      console.log(`Created Information: ${item.title}`);
    }

    console.log('Seeding completed successfully!');
  } catch (error) {
    console.error('Error during seeding:', error);
  }
}

seed();
