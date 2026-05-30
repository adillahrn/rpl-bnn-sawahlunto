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
  console.log('Starting seed process for 30 more items...');

  try {
    console.log('Uploading dummy image...');
    const imagePath = path.resolve('public/bnn-logo.png');
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

    const newsData = [
      {
        title: 'Rapat Penyusunan Petunjuk Teknis Pengelolaan Tanggung Jawab Sosial dan Lingkungan Korporasi (CSR)',
        category: 'kegiatan',
        excerpt: 'Rapat Penyusunan Petunjuk Teknis Pengelolaan Tanggung Jawab Sosial dan Lingkungan Korporasi (CSR) dibuka oleh Direktur Pemberdayaan Alternatif.',
        bodyText: `Rapat Penyusunan Petunjuk Teknis Pengelolaan Tanggung Jawab Sosial dan Lingkungan Korporasi (CSR) dibuka oleh Direktur Pemberdayaan Alternatif, Drs. Edi Swasono, M.M. Kegiatan ini dihadiri oleh 30 pegawai Direktorat Pemberdayaan Alternatif serta perwakilan dari Deputi Bidang Hukum dan Kerja Sama dan Deputi Bidang Pemberantasan.

Dalam sambutannya, Direktur Pemberdayaan Alternatif menyampaikan bahwa masih terdapat persepsi di daerah yang menganggap pemerintah daerah, khususnya gubernur, sebagai pihak yang memiliki kewenangan penuh dalam pengelolaan program Corporate Social Responsibility (CSR). Menurutnya, persepsi tersebut dapat diluruskan melalui pemahaman terhadap regulasi yang berlaku. Beliau juga menjelaskan bahwa Badan Narkotika Nasional (BNN) memanfaatkan program CSR sebagai salah satu instrumen untuk memperluas kerja sama dengan kementerian, lembaga, BUMN, maupun sektor swasta guna mendukung pemberdayaan masyarakat di kawasan rawan narkoba. Melalui sinergi tersebut diharapkan masyarakat menjadi lebih produktif dan mampu mewujudkan kawasan yang bersih dari penyalahgunaan serta peredaran gelap narkotika.

Penyusunan Petunjuk Teknis Pengelolaan Tanggung Jawab Sosial dan Lingkungan Korporasi (CSR) ini bertujuan untuk menyediakan pedoman bagi BNN, BNN Provinsi, serta BNN Kabupaten/Kota dalam menginisiasi dan mengembangkan kerja sama dengan dunia usaha, baik BUMN maupun swasta, terkait pemanfaatan dana CSR. Selain itu, petunjuk teknis ini juga diharapkan menjadi acuan dalam pelaksanaan pengelolaan program CSR yang dilakukan secara kolaboratif dengan kementerian dan lembaga terkait.

Dalam sesi diskusi, peserta rapat memberikan berbagai masukan konstruktif untuk penyempurnaan rancangan petunjuk teknis tersebut. Wildah menyampaikan bahwa setiap kementerian dan lembaga memiliki klaster kerja sama tersendiri dengan dunia usaha, sehingga perlu diperhatikan dalam penyusunan mekanisme kerja sama CSR. Sementara itu, Titik mengusulkan agar program yang dimuat dalam petunjuk teknis tidak hanya berfokus pada pengembangan keterampilan hidup (life skill), tetapi juga mencakup bentuk pemberdayaan lainnya yang relevan dengan kebutuhan masyarakat.

Yudhi mengemukakan perlunya pelaksanaan audiensi dengan dunia usaha guna merumuskan pola kerja sama CSR yang lebih efektif dan berkelanjutan. Di sisi lain, Achmad Fauzi menyoroti bahwa regulasi mengenai pemanfaatan aset sitaan untuk mendukung program pemberdayaan masyarakat masih belum diatur secara khusus, sehingga diperlukan kajian lebih lanjut. Yogi juga mengajukan pertanyaan terkait cakupan penggunaan petunjuk teknis tersebut, yaitu apakah hanya diperuntukkan sebagai pedoman internal BNN atau juga dapat dijadikan acuan bagi kementerian dan lembaga lain yang terlibat dalam pelaksanaan program CSR.

Melalui rapat ini diharapkan tersusun petunjuk teknis yang komprehensif dan implementatif sehingga dapat memperkuat sinergi antara BNN, kementerian/lembaga, serta dunia usaha dalam mendukung program pemberdayaan masyarakat di kawasan rawan narkoba.`,
      },
      {
        title: 'Pemusnahan Barang Bukti Narkotika Jenis Sabu Senilai Miliaran Rupiah',
        category: 'operasi',
        excerpt: 'BNN Kota Sawahlunto memusnahkan barang bukti narkotika jenis sabu seberat 2 kilogram dari hasil pengungkapan sindikat peredaran gelap.',
        bodyText: `Badan Narkotika Nasional (BNN) Kota Sawahlunto menggelar pemusnahan barang bukti narkotika jenis sabu-sabu dengan total berat mencapai 2 kilogram. Barang bukti tersebut disita dari operasi penggerebekan sindikat pengedar narkoba antarprovinsi yang ditangkap bulan lalu. Acara pemusnahan ini dihadiri oleh perwakilan dari Kejaksaan Negeri, Kepolisian Resor, Pengadilan Negeri, serta tokoh masyarakat setempat sebagai bentuk transparansi dan akuntabilitas penegakan hukum.

Kepala BNN Kota Sawahlunto dalam konferensi pers menyampaikan bahwa sabu-sabu tersebut ditaksir memiliki nilai miliaran rupiah di pasar gelap. "Pemusnahan ini bukan sekadar formalitas penegakan hukum, tetapi juga simbol bahwa negara tidak akan pernah kalah dari bandar narkoba. Dua kilogram sabu ini jika berhasil beredar dapat merusak puluhan ribu jiwa generasi muda kita," tegasnya.

Pemusnahan dilakukan dengan menggunakan mesin insinerator khusus bersuhu tinggi yang memastikan seluruh zat kimia berbahaya tersebut hancur tanpa sisa, sehingga aman dan tidak mencemari lingkungan. Sebelum dimusnahkan, tim dari Laboratorium Forensik juga telah melakukan uji sampel ulang di hadapan para saksi untuk memastikan keaslian barang bukti tersebut sesuai dengan yang disita pada saat operasi penangkapan.

Operasi pemberantasan akan terus ditingkatkan dengan melibatkan peran aktif masyarakat dalam memberikan informasi. BNNK Sawahlunto menegaskan akan menjerat para pelaku yang terlibat dengan pasal berlapis, termasuk tindak pidana pencucian uang (TPPU), agar memiskinkan para bandar besar sehingga jaringan mereka lumpuh total.`
      },
      {
        title: 'BNNK Sawahlunto Jalin Kerja Sama dengan Dinas Pendidikan untuk Kurikulum Anti Narkoba',
        category: 'kegiatan',
        excerpt: 'Sebagai langkah preventif jangka panjang, BNNK Sawahlunto bersama Dinas Pendidikan resmi menyepakati integrasi muatan anti narkoba ke dalam kurikulum.',
        bodyText: `Dalam upaya membangun benteng pertahanan yang kuat dari bahaya narkotika sejak usia dini, BNN Kota Sawahlunto secara resmi menandatangani Nota Kesepahaman (MoU) dengan Dinas Pendidikan Kota Sawahlunto. Kesepakatan ini bertujuan untuk mengintegrasikan materi Pencegahan, Pemberantasan, Penyalahgunaan, dan Peredaran Gelap Narkotika (P4GN) ke dalam kurikulum pendidikan, mulai dari tingkat Sekolah Dasar (SD) hingga Sekolah Menengah Atas (SMA).

Integrasi ini tidak berupa mata pelajaran baru yang memberatkan siswa, melainkan disisipkan dalam mata pelajaran yang sudah ada, seperti Bimbingan Konseling (BK), Pendidikan Kewarganegaraan, Biologi, maupun Pendidikan Agama. Siswa tidak hanya diajarkan mengenai bahaya medis dari penggunaan narkoba, tetapi juga dibekali dengan kemampuan asertif (keterampilan menolak), pengendalian emosi, serta pemahaman akan konsekuensi hukum dari penyalahgunaan narkotika.

Dalam acara penandatanganan tersebut, Kepala Dinas Pendidikan menyatakan dukungan penuhnya terhadap inisiatif ini. "Pendidikan adalah senjata paling ampuh untuk memutus rantai peredaran narkoba. Melalui pendekatan akademis dan penguatan karakter, kita ingin siswa-siswi Sawahlunto memiliki resiliensi yang tinggi. Mereka harus mampu berkata 'TIDAK' pada narkoba apa pun bentuknya," ujar Kepala Dinas.

Sebagai tindak lanjut, BNNK akan segera menggelar Training of Trainers (ToT) bagi para guru agar mereka memiliki pemahaman yang komprehensif dalam menyampaikan materi P4GN dengan metode yang kreatif, interaktif, dan mudah diterima oleh kalangan Gen Z dan Alpha.`
      },
      {
        title: 'Penggerebekan Sindikat Pengedar Narkoba Jaringan Antar Provinsi di Perbatasan Kota',
        category: 'operasi',
        excerpt: 'Berkat laporan masyarakat, tim gabungan BNNK Sawahlunto sukses menggerebek tempat persembunyian sindikat narkoba antarprovinsi.',
        bodyText: `Tim Berantas Badan Narkotika Nasional (BNN) Kota Sawahlunto melakukan aksi penggerebekan menegangkan di sebuah rumah kontrakan yang berlokasi di perbatasan kota. Rumah tersebut dicurigai sebagai tempat transit sekaligus gudang penyimpanan narkotika dari jaringan antarprovinsi. Operasi senyap yang dilakukan pada dini hari ini berbuah manis dengan diamankannya tiga orang tersangka yang sedang melakukan proses pengemasan ulang (repacking) narkotika jenis sabu.

Pengungkapan kasus ini bermula dari laporan masyarakat melalui layanan pengaduan Call Center BNNK Sawahlunto. Warga sekitar mencurigai aktivitas penghuni rumah yang selalu tertutup di siang hari namun ramai dikunjungi mobil tak dikenal pada larut malam. "Intelijen kami melakukan pengintaian selama lebih dari dua minggu sebelum akhirnya memutuskan untuk melakukan penyergapan. Kesabaran ini membuahkan hasil karena kami berhasil menangkap basah mereka bersama barang buktinya," ujar Kasi Pemberantasan BNNK Sawahlunto.

Dari lokasi kejadian, petugas menyita sejumlah barang bukti berupa narkotika, alat hisap bong, timbangan digital, plastik klip, serta beberapa unit telepon seluler yang diduga digunakan untuk komunikasi transaksi jaringan. Para tersangka diketahui merupakan kurir sekaligus pengedar yang mendapatkan pasokan dari luar provinsi untuk diedarkan ke wilayah Sawahlunto dan sekitarnya.

Saat ini, ketiga tersangka beserta barang bukti telah diamankan di sel tahanan BNNK Sawahlunto untuk menjalani pemeriksaan lebih lanjut. BNN akan terus mendalami kasus ini untuk membongkar aktor intelektual serta penyandang dana di balik jaringan peredaran gelap narkotika antarprovinsi ini.`
      },
      {
        title: 'Pelatihan Keterampilan Hidup (Life Skill) Bagi Mantan Pecandu Narkoba',
        category: 'rehabilitasi',
        excerpt: 'Program pascarehabilitasi BNN memberikan pelatihan keterampilan barista dan kewirausahaan kepada mantan pecandu agar kembali produktif.',
        bodyText: `Dalam rangka memastikan pemulihan yang berkelanjutan bagi mantan pecandu narkoba (klien pascarehabilitasi), BNN Kota Sawahlunto menyelenggarakan program Pelatihan Keterampilan Hidup (Life Skill). Bertempat di aula BNNK, kegiatan ini memberikan pelatihan komprehensif di bidang kewirausahaan mandiri, khususnya pelatihan meracik kopi (barista) dan pembuatan makanan ringan yang bernilai jual tinggi.

Tujuan utama dari pelatihan ini adalah untuk memberikan bekal kemandirian finansial dan mencegah terjadinya kekambuhan (relapse). Banyak mantan pecandu yang kembali terjerumus ke dalam lingkaran narkoba akibat stigma negatif masyarakat dan sulitnya mendapatkan pekerjaan. Dengan bekal keterampilan ini, diharapkan mereka dapat membuka usaha sendiri atau terserap di dunia kerja yang lebih produktif dan positif.

Selain pelatihan teknis (hard skill), peserta juga diberikan pendampingan psikologis (soft skill) untuk meningkatkan kepercayaan diri, manajemen stres, dan penyelesaian masalah. Para peserta sangat antusias mengikuti setiap sesi pelatihan yang dimentori langsung oleh praktisi usaha lokal yang sukses. Beberapa peserta bahkan sudah mulai membuat rencana bisnis (business plan) sederhana untuk dipresentasikan di akhir program.

Pihak BNNK Sawahlunto berkomitmen untuk tidak melepaskan para klien begitu saja setelah pelatihan selesai. "Kami akan terus memantau, mendampingi, serta menjembatani mereka dengan dinas terkait seperti Dinas Koperasi dan UMKM, agar mereka mendapatkan bantuan permodalan dan izin usaha. Keberhasilan mereka adalah indikator suksesnya program rehabilitasi," ungkap Kasi Rehabilitasi BNNK Sawahlunto.`
      },
      {
        title: 'Tes Urine Mendadak di Instansi Pemerintahan Kota Sawahlunto',
        category: 'operasi',
        excerpt: 'Menjaga integritas ASN, BNNK Sawahlunto laksanakan tes urine mendadak di lingkungan instansi pemerintahan tanpa pemberitahuan.',
        bodyText: `Sebanyak lebih dari 150 Aparatur Sipil Negara (ASN) di salah satu instansi pemerintahan di Kota Sawahlunto dikejutkan dengan kedatangan tim BNNK Sawahlunto. Tim BNN melakukan tes urine mendadak tanpa pemberitahuan sebelumnya, tepat setelah apel pagi selesai dilaksanakan. Langkah ini merupakan instruksi langsung dari pimpinan daerah guna menciptakan lingkungan birokrasi yang bersih dan bebas dari penyalahgunaan narkotika.

Pelaksanaan tes urine dikawal ketat oleh Provos dan petugas keamanan internal untuk memastikan tidak ada pegawai yang menghindar atau melakukan kecurangan saat pengambilan sampel. Kepala BNN Kota Sawahlunto menegaskan bahwa kegiatan ini adalah wujud implementasi Inpres Nomor 2 Tahun 2020 tentang Rencana Aksi Nasional P4GN, di mana instansi pemerintah harus menjadi role model bagi masyarakat luas.

"Kami tidak memberikan toleransi bagi ASN yang terbukti menggunakan narkoba. ASN dibiayai oleh uang rakyat, sehingga harus memberikan pelayanan yang maksimal dan berintegritas tinggi. Jika ada yang positif, tentu akan ada sanksi tegas sesuai peraturan disiplin pegawai negeri sipil, mulai dari rehabilitasi paksa hingga pemecatan," jelas Kepala BNNK.

Dari hasil pemeriksaan yang dilakukan hari itu, seluruh sampel urine dinyatakan negatif dari kandungan zat narkotika. Namun demikian, BNNK memastikan bahwa inspeksi mendadak seperti ini akan terus dilakukan secara berkala dan acak di berbagai instansi pemerintahan maupun BUMN/BUMD di wilayah Sawahlunto.`
      },
      {
        title: 'BNNK Sawahlunto Gelar Bimbingan Teknis Penggiat P4GN di Lingkungan Swasta',
        category: 'sosialisasi',
        excerpt: 'Meningkatkan kemandirian perusahaan swasta dalam mencegah peredaran narkoba di lingkungan kerja melalui pembentukan penggiat P4GN.',
        bodyText: `Sektor swasta memiliki peran strategis dalam menanggulangi permasalahan narkotika di Indonesia. Menyadari hal tersebut, Badan Narkotika Nasional (BNN) Kota Sawahlunto menggelar acara Bimbingan Teknis (Bimtek) Penggiat Pencegahan, Pemberantasan, Penyalahgunaan, dan Peredaran Gelap Narkotika (P4GN) yang ditujukan khusus bagi HRD dan manajer perusahaan swasta se-Kota Sawahlunto.

Kegiatan Bimtek yang berlangsung selama dua hari ini membekali para peserta dengan pengetahuan komprehensif, mulai dari pengenalan jenis narkoba, regulasi ketenagakerjaan terkait narkoba, hingga teknis pelaksanaan tes urine mandiri di lingkungan perusahaan. Peserta juga diajarkan bagaimana menangani karyawan yang terindikasi menggunakan narkoba dengan pendekatan rehabilitasi, bukan serta-merta pemecatan yang justru dapat merusak masa depan mereka.

Melalui kegiatan ini, diharapkan setiap perusahaan dapat membentuk Satgas atau Relawan Anti Narkoba internal. Satgas inilah yang nantinya akan menjadi perpanjangan tangan BNN dalam menyosialisasikan bahaya narkoba kepada para karyawan secara berkelanjutan. "Lingkungan kerja yang sehat tanpa narkoba akan berbanding lurus dengan peningkatan produktivitas perusahaan," ujar narasumber dari BNNK.

Di akhir kegiatan, para peserta dikukuhkan secara resmi sebagai Penggiat Anti Narkoba dan menerima sertifikat serta pin penggiat. Mereka berkomitmen penuh untuk segera menyusun program kerja P4GN di masing-masing perusahaannya, termasuk alokasi anggaran khusus (CSR) untuk kampanye anti narkoba di lingkungan kerja dan masyarakat sekitar.`
      },
      {
        title: 'Penandatanganan MoU dengan Perusahaan Tambang untuk Lingkungan Kerja Bersinar',
        category: 'kegiatan',
        excerpt: 'Sinergi BNNK Sawahlunto dan sektor pertambangan demi wujudkan keselamatan kerja yang bebas dari pengaruh narkotika.',
        bodyText: `Sebagai daerah yang memiliki sejarah panjang di sektor pertambangan, Kota Sawahlunto menyadari betul bahwa pekerja tambang berisiko tinggi (high risk) dalam menjalankan tugas operasionalnya. Konsentrasi tinggi mutlak diperlukan. Oleh karena itu, BNN Kota Sawahlunto melakukan penandatanganan Memorandum of Understanding (MoU) dengan tiga perusahaan tambang besar yang beroperasi di wilayah tersebut.

Kerja sama ini mencakup komitmen pelaksanaan tes urine berkala secara mandiri oleh perusahaan terhadap seluruh karyawan, mulai dari tingkat manajerial hingga pekerja lapangan. Selain itu, MoU juga mengatur kewajiban perusahaan untuk menyelenggarakan penyuluhan bahaya narkoba setidaknya dua kali dalam setahun, serta penempatan rambu-rambu kampanye anti narkoba di area strategis tambang.

Pimpinan perusahaan tambang menyambut baik kolaborasi ini. Ia menyebutkan bahwa kecelakaan kerja, terutama yang melibatkan pengoperasian alat berat, sering kali disebabkan oleh kelalaian (human error), dan salah satu pemicunya adalah penggunaan narkoba atau obat keras tanpa resep dokter untuk memacu stamina. "Ini adalah langkah konkret kami untuk memastikan keselamatan kerja (K3) dan kesejahteraan karyawan kami," tuturnya.

Selain aspek pencegahan, MoU ini juga memasukkan klausul pembinaan. Bagi karyawan yang terbukti positif sebagai pengguna (bukan pengedar), perusahaan berkomitmen untuk tidak langsung melakukan Pemutusan Hubungan Kerja (PHK), melainkan memberikan kesempatan untuk menjalani program rehabilitasi gratis yang difasilitasi oleh Klinik Pratama BNNK Sawahlunto.`
      },
      {
        title: 'Deklarasi Kelurahan Bersinar (Bersih Narkoba) di Kecamatan Lembah Segar',
        category: 'kegiatan',
        excerpt: 'Masyarakat Kecamatan Lembah Segar secara serentak mendeklarasikan komitmen mereka melawan peredaran narkoba di kampung halaman.',
        bodyText: `Semangat perlawanan terhadap narkoba semakin menggema di akar rumput. Hari ini, salah satu kelurahan di Kecamatan Lembah Segar secara resmi mendeklarasikan diri sebagai Kelurahan Bersinar (Bersih Narkoba). Deklarasi ini ditandai dengan pembacaan ikrar bersama yang dipimpin oleh tokoh adat, ulama, dan pemuda setempat, disaksikan langsung oleh Wali Kota dan Kepala BNNK Sawahlunto.

Program Kelurahan Bersinar merupakan program unggulan nasional yang menitikberatkan pada pemberdayaan potensi masyarakat desa/kelurahan agar memiliki kemandirian dan daya tangkal yang kuat terhadap ancaman narkotika. Dalam deklarasi ini, juga diresmikan pembentukan posko Relawan Anti Narkoba tingkat RT/RW yang bertugas memantau, melaporkan aktivitas mencurigakan, dan mengedukasi warga sekitar.

Kepala BNNK Sawahlunto dalam sambutannya menekankan bahwa masalah narkoba tidak bisa diselesaikan hanya dengan penegakan hukum semata, melainkan butuh pendekatan sosial dan budaya. "Masyarakat adalah pagar terdepan. Jika setiap keluarga dan tetangga saling peduli, maka ruang gerak bandar narkoba akan semakin sempit. Saya bangga melihat kekompakan warga Lembah Segar," ucapnya.

Selain posko relawan, kelurahan ini juga meresmikan program Intervensi Berbasis Masyarakat (IBM). Program ini memungkinkan warga untuk melakukan pendekatan persuasif awal kepada pengguna narkoba ringan di lingkungannya agar mau menjalani rehabilitasi sukarela tanpa takut berurusan dengan proses hukum pidana.`
      },
      {
        title: 'Patroli Gabungan di Jalur Rawan Penyelundupan Narkotika',
        category: 'operasi',
        excerpt: 'Mengantisipasi jalur tikus masuknya narkoba, tim gabungan BNN, Polri, dan Bea Cukai gelar patroli intensif di perbatasan.',
        bodyText: `Untuk mempersempit ruang gerak para sindikat pengedar narkoba, Badan Narkotika Nasional (BNN) Kota Sawahlunto bersama satuan dari Polres Sawahlunto dan unsur TNI menggelar patroli gabungan berskala besar. Patroli ini difokuskan pada titik-titik yang selama ini dicurigai sebagai jalur rawan atau 'jalur tikus' yang biasa digunakan untuk menyelundupkan narkotika dari luar daerah ke Kota Sawahlunto.

Kegiatan yang berlangsung mulai tengah malam hingga menjelang subuh ini meliputi pemeriksaan kendaraan roda dua dan roda empat yang melintas, pengecekan identitas, serta pengerahan anjing pelacak (K9) untuk mendeteksi keberadaan barang terlarang yang disembunyikan. Petugas juga melakukan penyisiran ke area sekitar perbatasan yang minim penerangan dan jarang dilalui warga.

Meskipun pada operasi kali ini belum ditemukan barang bukti narkotika dalam jumlah besar, langkah preventif ini diyakini memberikan efek kejut (shock therapy) bagi para pelaku kejahatan. "Patroli cipta kondisi ini bertujuan untuk show of force. Kami ingin memastikan bahwa Kota Sawahlunto tidak aman bagi para pengedar narkoba. Kami memantau setiap pergerakan selama 24 jam," tegas Komandan Patroli.

Warga yang melintas merespons positif kegiatan kepolisian dan BNN ini. Mereka merasa lebih aman dan berharap patroli gabungan semacam ini dapat dilakukan secara rutin, tidak hanya pada hari-hari tertentu, agar wilayah Sawahlunto benar-benar terbebas dari ancaman kriminalitas dan peredaran narkotika.`
      },
      {
        title: 'BNNK Sawahlunto Adakan Lomba Konten Kreatif Anti Narkoba untuk Milenial',
        category: 'pengumuman',
        excerpt: 'Merangkul generasi Z, BNNK gelar lomba video pendek dan poster digital dengan total hadiah puluhan juta rupiah.',
        bodyText: `Di era digital, pendekatan penyuluhan narkoba tidak lagi bisa mengandalkan metode konvensional. Merespons tren ini, BNN Kota Sawahlunto secara resmi mengumumkan pembukaan Lomba Konten Kreatif Anti Narkoba 2026. Lomba yang mengusung tema "Muda Berkreasi, Tanpa Narkoba" ini ditujukan khusus bagi kalangan milenial dan Gen Z, mulai dari pelajar SMP, SMA, hingga mahasiswa se-Kota Sawahlunto.

Ada tiga kategori lomba yang dipertandingkan, yaitu: Video Pendek (Shorts/Reels/TikTok), Poster Digital, dan Cipta Lagu Jingle Anti Narkoba. Peserta ditantang untuk menuangkan ide-ide segar mereka dalam bentuk visual dan audio yang menarik, mudah dipahami, dan mampu memberikan pesan kuat kepada teman sebayanya tentang bahaya narkoba serta pentingnya hidup sehat.

Pendaftaran lomba dibuka selama satu bulan penuh dan tidak dipungut biaya alias gratis. Karya-karya terbaik tidak hanya akan memperebutkan total hadiah puluhan juta rupiah, piala bergilir Wali Kota, dan sertifikat penghargaan, tetapi juga akan diadopsi sebagai materi kampanye resmi BNNK Sawahlunto di berbagai platform media sosial.

"Kami menyadari bahwa pesan akan lebih efektif jika disampaikan dari, oleh, dan untuk anak muda sendiri. Lomba ini adalah wadah agar mereka bisa bersuara menentang narkoba dengan cara yang fun dan kekinian. Kami tunggu karya-karya terbaik dari pemuda-pemudi Sawahlunto," tutup panitia pelaksana dari BNNK.`
      },
      {
        title: 'Pembentukan Relawan Anti Narkoba Tingkat Mahasiswa di Sawahlunto',
        category: 'kegiatan',
        excerpt: 'Kampus sebagai agen perubahan. Mahasiswa di Sawahlunto mendeklarasikan diri sebagai Duta Kampus Bersinar.',
        bodyText: `Lingkungan perguruan tinggi merupakan salah satu pilar intelektual yang sangat penting dalam memerangi narkoba. Menyikapi hal ini, BNN Kota Sawahlunto menginisiasi program pembentukan Relawan Anti Narkoba di lingkungan kampus. Puluhan mahasiswa dari berbagai perguruan tinggi dan akademi di Sawahlunto telah terpilih dan mengikuti pelatihan intensif selama tiga hari untuk menjadi Duta Kampus Bersinar.

Dalam pelatihan tersebut, mahasiswa dibekali materi mengenai taktik peredaran narkoba terkini yang menyasar kalangan terpelajar, dampak psikologis dan medis dari zat adiktif, hingga teknik komunikasi persuasif (peer counseling). Dengan bekal ini, relawan diharapkan mampu menjadi teman curhat (peer educator) yang baik bagi rekan-rekan kampusnya yang mungkin sedang mengalami masalah dan rentan lari ke penggunaan narkoba.

Para mahasiswa sangat proaktif dalam merumuskan rencana aksi (action plan) mereka usai pelatihan. Beberapa inisiatif yang muncul antara lain: podcast kampus bertema kesehatan mental, kompetisi e-sports dengan kampanye P4GN, serta seminar bahaya penyalahgunaan obat resep (psikotropika) di masa ujian. Mereka berkomitmen untuk menjadikan kampus sebagai kawasan bebas narkoba (zero tolerance).

BNN akan terus membina komunikasi yang baik dengan organisasi mahasiswa (BEM/DEMA) serta pihak rektorat untuk mendukung jalannya program-program relawan ini. Langkah kolaboratif ini membuktikan bahwa mahasiswa tidak hanya berperan sebagai agent of change, tetapi juga agent of control dalam mewujudkan Indonesia Emas yang bebas narkotika.`
      },
      {
        title: 'Rapat Koordinasi Forkopimda Bahas Strategi Jangka Panjang Penanganan Narkoba',
        category: 'kegiatan',
        excerpt: 'Sinergi lintas sektoral diuji. Forkopimda Sawahlunto gelar Rakor khusus untuk mempertajam strategi P4GN.',
        bodyText: `Forum Koordinasi Pimpinan Daerah (Forkopimda) Kota Sawahlunto yang terdiri dari Wali Kota, Ketua DPRD, Kapolres, Dandim, Kajari, dan Kepala BNNK, menggelar Rapat Koordinasi (Rakor) strategis. Rapat ini digelar secara tertutup untuk membahas peta kerawanan narkotika terkini di wilayah Sawahlunto serta merumuskan strategi makro jangka panjang yang lebih integratif dalam menanggulangi peredaran narkotika.

Dalam pemaparannya, Kepala BNNK menyajikan data kerawanan yang menyoroti pergeseran tren usia pengguna narkoba yang semakin muda, serta munculnya modus operandi baru penyelundupan narkoba menggunakan jasa pengiriman (ekspedisi) online. Menanggapi paparan tersebut, Wali Kota menegaskan komitmen penuh pemerintah daerah untuk meningkatkan dukungan alokasi anggaran (APBD) demi berjalannya program P4GN di tahun mendatang.

Rakor ini juga menyoroti pentingnya sinkronisasi regulasi daerah (Peraturan Daerah) tentang fasilitasi P4GN agar memiliki landasan hukum yang kuat dalam pelaksanaannya di lapangan. Pihak Kejaksaan dan Kepolisian menyatakan kesiapannya untuk memberikan sanksi maksimal bagi bandar narkoba serta memperkuat sistem peradilan pidana (criminal justice system) yang berperspektif rehabilitasi bagi pecandu.

Di akhir rapat, ditandatangani dokumen kesepakatan bersama (Joint Action Plan) yang memuat target-target konkret setiap instansi selama satu tahun ke depan. Komitmen bersama ini diharapkan mampu menutup celah-celah kelemahan yang selama ini dimanfaatkan oleh jaringan narkoba, sehingga Kota Sawahlunto dapat menjadi kota percontohan dalam implementasi P4GN di Sumatera Barat.`
      },
      {
        title: 'BNNK Sawahlunto Berikan Penghargaan Kepada Tokoh Masyarakat Peduli P4GN',
        category: 'pengumuman',
        excerpt: 'Apresiasi tinggi diberikan kepada individu dan organisasi yang secara konsisten berjuang melawan narkoba di lingkungannya.',
        bodyText: `Dalam momen peringatan Hari Anti Narkotika Internasional (HANI), Badan Narkotika Nasional (BNN) Kota Sawahlunto memberikan anugerah penghargaan kepada sejumlah tokoh masyarakat, pemuka agama, dan organisasi kepemudaan yang dinilai berjasa besar dalam upaya Pencegahan, Pemberantasan, Penyalahgunaan, dan Peredaran Gelap Narkotika (P4GN) di Kota Sawahlunto.

Penghargaan ini diserahkan langsung oleh Wali Kota Sawahlunto didampingi Kepala BNNK. Salah satu penerima penghargaan adalah seorang Ketua RW yang berhasil menyulap kampungnya dari zona merah peredaran narkoba menjadi kawasan sentra UMKM yang produktif melalui pembinaan warga secara mandiri. Ada pula pemuka agama yang secara konsisten menyisipkan pesan bahaya narkoba dalam setiap dakwah dan khotbahnya.

Kepala BNNK menyatakan bahwa pemberian penghargaan ini bukan semata-mata untuk pencitraan, melainkan bentuk apresiasi tertinggi negara atas pengorbanan waktu, tenaga, dan keberanian para tokoh tersebut. "Berjuang melawan bandar narkoba di lingkungan sendiri tentu memiliki risiko tinggi. Keberanian bapak-ibu sekalian adalah inspirasi bagi kita semua bahwa masyarakat sipil memiliki kekuatan besar jika bersatu," pujinya.

Para penerima penghargaan menyatakan bahwa piagam ini akan menjadi pemicu semangat bagi mereka untuk terus berbuat lebih banyak lagi. Mereka berharap BNN dan pemerintah daerah dapat terus bersinergi, memfasilitasi program-program pemberdayaan masyarakat, dan tidak pernah lelah dalam melindungi generasi penerus bangsa dari kehancuran akibat narkoba.`
      },
      {
        title: 'Evaluasi Kinerja Akhir Tahun, BNNK Sawahlunto Catat Penurunan Kasus Narkoba Sebesar 20%',
        category: 'pengumuman',
        excerpt: 'Capaian impresif di penghujung tahun. Angka prevalensi penyalahgunaan narkoba di Sawahlunto sukses ditekan secara signifikan.',
        bodyText: `Menutup lembaran tahun ini, Badan Narkotika Nasional (BNN) Kota Sawahlunto menggelar acara press release evaluasi kinerja akhir tahun. Dalam laporannya, BNNK menyampaikan kabar menggembirakan bahwa angka prevalensi dan pengungkapan kasus penyalahgunaan narkotika di wilayah Kota Sawahlunto mengalami tren penurunan yang sangat positif, yakni mencapai angka 20% dibandingkan tahun sebelumnya.

Keberhasilan ini merupakan buah dari strategi "hard power" (penegakan hukum tegas) dan "soft power" (pencegahan dan rehabilitasi) yang berjalan seimbang. Di bidang pemberantasan, BNNK sukses membongkar 5 jaringan besar antarprovinsi dengan total aset sitaan TPPU mencapai ratusan juta rupiah. Sementara di bidang rehabilitasi, tingkat keberhasilan pemulihan (recovery rate) klien mencapai 75% tanpa relapse dalam 6 bulan terakhir.

Tingginya kesadaran masyarakat juga tercermin dari melonjaknya jumlah pelapor yang datang secara sukarela untuk mendaftarkan anggota keluarganya ke klinik rehabilitasi BNN. "Dulu masyarakat malu dan takut melapor karena menganggap aib atau takut dipenjara. Sekarang paradigma itu berubah. Ini bukti bahwa edukasi kita berhasil," terang Kepala BNNK dengan rasa bangga.

Tantangan di tahun depan tentu akan semakin berat dengan munculnya narkotika jenis baru (NPS) dan transaksi melalui dark web. Namun, dengan sinergitas yang telah terbangun kokoh antara BNN, aparat penegak hukum lain, pemerintah daerah, dan partisipasi aktif seluruh elemen masyarakat, BNNK Sawahlunto optimis mampu mempertahankan, bahkan meningkatkan tren positif ini di masa mendatang.`
      }
    ];

    const infoData = [
      {
        title: 'Bahaya dan Dampak Buruk Penggunaan Sabu-Sabu (Methamphetamine)',
        category: 'artikel',
        mediaType: 'article',
        excerpt: 'Sabu-sabu merupakan stimulan adiktif yang merusak sistem saraf pusat. Kenali bahaya jangka panjangnya sebelum terlambat.',
        bodyText: `Sabu-sabu atau Methamphetamine adalah salah satu jenis narkotika golongan I yang sangat adiktif. Berbentuk kristal putih yang tidak berbau dan pahit, zat ini bekerja dengan merangsang sistem saraf pusat untuk melepaskan dopamin dalam jumlah besar. Dopamin inilah yang menciptakan euforia semu, perasaan percaya diri berlebih, dan energi meledak-ledak. Namun, kesenangan sesaat ini harus dibayar mahal dengan kerusakan otak yang permanen.

Dampak fisik penggunaan sabu sangat mengerikan. Pengguna biasanya akan mengalami penurunan berat badan drastis (karena hilangnya nafsu makan), kerusakan gigi yang parah (dikenal dengan istilah 'meth mouth'), luka pada kulit akibat sering menggaruk (halusinasi serangga di bawah kulit), serta detak jantung tidak beraturan yang dapat memicu serangan jantung mendadak bahkan pada usia muda.

Dampak psikologisnya tidak kalah fatal. Sabu-sabu memicu paranoid akut, halusinasi, perubahan mood yang ekstrem, hingga gangguan kejiwaan yang parah menyerupai skizofrenia. Kerusakan sel otak akibat sabu sangat sulit dipulihkan, menyebabkan penggunanya mengalami penurunan daya ingat dan kemampuan kognitif. Jauhi sabu-sabu; tidak ada coba-coba dalam narkoba, sekali terjerat, masa depan Anda taruhannya.`
      },
      {
        title: 'Mengenal Ganja Sintetis (Tembakau Gorila) dan Efek Merusaknya',
        category: 'artikel',
        mediaType: 'article',
        excerpt: 'Sering disalahartikan sebagai rokok biasa, Tembakau Gorila adalah campuran bahan kimia berbahaya yang mematikan.',
        bodyText: `Dalam beberapa tahun terakhir, peredaran ganja sintetis yang lebih dikenal di jalanan dengan sebutan 'Tembakau Gorila' semakin meresahkan. Berbeda dengan ganja alami, tembakau gorila merupakan daun-daun herbal biasa (seperti daun cengkeh atau teh) yang disemprot dengan zat kimia sintetis berbahaya yang meniru efek THC (senyawa aktif pada ganja). Masalahnya, campuran kimia ini sering kali tidak jelas dosis dan kandungannya.

Efek yang ditimbulkan oleh tembakau gorila sangat kuat dan tidak dapat diprediksi. Pengguna sering kali melaporkan sensasi seperti 'tertimpa gorila', di mana tubuh terasa sangat berat, tidak bisa digerakkan, pusing hebat, disorientasi, halusinasi, dan panik (bad trip). Dalam dosis tinggi, zat ini dapat memicu kejang-kejang, koma, kerusakan ginjal akut, hingga kematian mendadak akibat keracunan sistemik.

Modus peredarannya sering kali dilakukan melalui media sosial dengan kemasan yang menarik menyerupai pomade, kopi, atau rokok lintingan biasa untuk mengelabui petugas dan orang tua. Sangat penting bagi masyarakat, terutama orang tua, untuk mewaspadai barang-barang mencurigakan yang dibeli anak secara online. Edukasi tentang bahaya NPS (New Psychoactive Substances) ini harus terus digencarkan.`
      },
      {
        title: 'Peran Keluarga Sebagai Benteng Pertama Pencegahan Narkoba',
        category: 'artikel',
        mediaType: 'article',
        excerpt: 'Keluarga yang harmonis dan komunikatif adalah kunci utama menyelamatkan anak dari godaan lingkungan yang buruk.',
        bodyText: `Pencegahan penyalahgunaan narkotika tidak boleh hanya diserahkan kepada pihak sekolah atau kepolisian. Benteng pertahanan pertama dan paling kokoh justru berada di rumah: Keluarga. Pola asuh (parenting) yang tepat sangat menentukan tingkat resiliensi (ketahanan) seorang anak saat ia menghadapi tekanan teman sebaya (peer pressure) untuk mencoba narkoba.

Keluarga yang harmonis tidak selalu berarti tanpa konflik, melainkan keluarga yang mengedepankan komunikasi terbuka. Anak yang merasa didengarkan dan dihargai pendapatnya di rumah cenderung tidak akan mencari 'pelarian' di luar. Orang tua harus meluangkan waktu berkualitas (quality time) setiap hari untuk berdialog tanpa menghakimi, mengenali siapa saja teman bermain anak, serta memantau aktivitas daring mereka secara bijaksana.

Selain itu, orang tua perlu membekali diri dengan pengetahuan dasar tentang jenis-jenis narkoba dan cara peredarannya saat ini agar dapat memberikan edukasi yang akurat kepada anak. Jangan ragu untuk menetapkan batasan yang jelas mengenai aturan di rumah dan mendiskusikan konsekuensi dari perbuatan melanggar hukum. Cinta kasih, kepedulian, dan pengawasan yang terukur adalah vaksin terbaik melawan epidemi narkoba.`
      },
      {
        title: 'Panduan Mengenali Tanda-Tanda Anak Terpapar Narkoba',
        category: 'infografis',
        mediaType: 'article',
        excerpt: 'Deteksi dini sangat penting. Ketahui perubahan fisik, emosional, dan perilaku yang mengindikasikan penggunaan narkoba.',
        bodyText: `Mendeteksi penyalahgunaan narkoba pada remaja sering kali sulit karena beberapa tanda menyerupai perubahan hormon pada masa pubertas. Namun, jika beberapa indikator fisik, perilaku, dan psikologis muncul secara bersamaan dan drastis, orang tua patut curiga dan melakukan pendekatan lebih dalam. Deteksi dini sangat penting agar proses rehabilitasi dapat dilakukan sebelum tingkat kecanduan menjadi parah.

Tanda Fisik: Perhatikan mata (merah, berair, pupil mengecil/membesar), hidung sering berair seperti flu, bau mulut yang tidak wajar, bekas suntikan atau memar di lengan, perubahan pola tidur yang ekstrem (tidak tidur berhari-hari atau tidur terus-menerus), dan penurunan kebersihan diri secara signifikan.

Tanda Perilaku dan Emosional: Sering mengurung diri di kamar, mudah marah dan meledak-ledak tanpa alasan jelas, prestasi akademik merosot tajam, sering bolos sekolah, hilangnya minat pada hobi yang dulu disukai, berbohong, mencuri barang di rumah untuk membeli narkoba, serta pergantian lingkungan pertemanan secara tiba-tiba dengan kelompok yang lebih tua atau mencurigakan.

Jika menemukan tanda-tanda ini, jangan panik atau langsung menggunakan kekerasan fisik. Ajak anak bicara dari hati ke hati, tunjukkan empati bahwa Anda ingin menolongnya, bukan menghukumnya. Segera konsultasikan ke layanan rehabilitasi medis BNN atau puskesmas/rumah sakit terdekat untuk penanganan profesional yang tepat.`
      },
      {
        title: 'Cara Kerja Rehabilitasi Medis dan Sosial BNN',
        category: 'infografis',
        mediaType: 'article',
        excerpt: 'Memahami tahapan pemulihan pecandu narkoba melalui program rehabilitasi terpadu dan gratis dari pemerintah.',
        bodyText: `Banyak masyarakat yang masih enggan melaporkan keluarganya yang menjadi pecandu karena takut dipenjara atau biaya pengobatan yang mahal. Faktanya, berdasarkan Undang-Undang, pecandu adalah korban yang berhak mendapatkan pengobatan, dan BNN menyediakan fasilitas rehabilitasi secara gratis tanpa tuntutan pidana (jika melapor secara sukarela). Proses rehabilitasi ini dilakukan secara holistik mencakup medis dan sosial.

Tahap pertama adalah Asesmen dan Detoksifikasi Medis. Pada tahap ini, tingkat kecanduan klien akan dievaluasi oleh dokter. Detoksifikasi dilakukan untuk menghilangkan racun (zat narkotika) dari dalam tubuh klien. Fase ini biasanya sangat menyiksa (sakau), sehingga memerlukan pengawasan medis dan obat-obatan tertentu untuk mengurangi rasa sakit dan menstabilkan kondisi fisik klien.

Tahap kedua adalah Rehabilitasi Non-Medis (Sosial). Setelah fisik klien stabil, fokus beralih pada perbaikan psikologis dan perilaku. BNN menggunakan berbagai metode seperti Therapeutic Community (TC), di mana sesama pecandu saling membantu pemulihan melalui konseling kelompok, bimbingan spiritual, kedisiplinan, dan pelatihan keterampilan kerja. Tujuannya adalah mengubah kebiasaan buruk menjadi kebiasaan produktif.

Tahap terakhir adalah Bina Lanjut (Aftercare). Klien yang telah menyelesaikan program utama akan dipantau secara berkala saat mereka kembali ke masyarakat. BNN memberikan dukungan psikologis lanjutan dan menghubungkan mereka dengan kelompok dukungan sebaya (support group) agar mereka tidak kembali (relapse) menggunakan narkoba ketika menghadapi stres dalam kehidupan nyata.`
      },
      {
        title: 'Hukum Pidana Terkait Kepemilikan dan Peredaran Narkotika di Indonesia',
        category: 'regulasi',
        mediaType: 'article',
        excerpt: 'Jangan coba-coba! Pelajari beratnya sanksi pidana dalam UU Nomor 35 Tahun 2009 tentang Narkotika.',
        bodyText: `Indonesia menerapkan kebijakan hukum yang sangat tegas dan tanpa kompromi terhadap kejahatan narkotika. Landasan hukum utamanya adalah Undang-Undang Nomor 35 Tahun 2009 tentang Narkotika. Undang-undang ini membedakan perlakuan antara pecandu (korban yang wajib direhabilitasi) dan pengedar/bandar yang akan dijerat dengan sanksi pidana paling berat, termasuk hukuman mati.

Bagi pihak yang kedapatan menanam, memelihara, memiliki, menyimpan, menguasai, atau menyediakan narkotika Golongan I (seperti ganja, sabu, ekstasi), hukumannya sangat berat. Pasal 111 dan Pasal 112 mengatur sanksi pidana penjara paling singkat 4 tahun dan paling lama 12 tahun, serta denda hingga 8 miliar rupiah. Jika barang bukti melebihi 1 kilogram (untuk tanaman) atau 5 gram (bukan tanaman), ancaman hukumannya meningkat menjadi pidana seumur hidup atau pidana mati.

Sementara itu, bagi mereka yang memproduksi, mengimpor, mengekspor, atau menyalurkan narkotika Golongan I, Pasal 113 memberikan ancaman hukuman penjara minimal 5 tahun hingga hukuman mati. Lebih jauh lagi, BNN dan Kepolisian saat ini aktif menerapkan Undang-Undang Tindak Pidana Pencucian Uang (TPPU) kepada para bandar narkoba. Tujuannya adalah merampas seluruh harta kekayaan hasil kejahatan narkoba agar jaringan mereka benar-benar miskin dan lumpuh total.`
      },
      {
        title: 'Mitos dan Fakta Seputar Narkoba yang Beredar di Masyarakat',
        category: 'artikel',
        mediaType: 'article',
        excerpt: 'Jangan termakan hoax. Mari bedah mitos-mitos menyesatkan tentang penggunaan narkoba yang beredar luas di pergaulan.',
        bodyText: `Banyak pemuda terjerumus ke dunia narkoba karena termakan informasi palsu atau mitos yang beredar dari mulut ke mulut di lingkungan pergaulannya. Mengklarifikasi mitos ini dengan fakta ilmiah adalah bagian penting dari edukasi pencegahan.

Mitos 1: "Coba sekali saja tidak akan bikin kecanduan." 
Fakta: Beberapa zat adiktif seperti sabu dan heroin memiliki daya ikat reseptor otak yang sangat kuat. Bahkan dari penggunaan pertama, zat tersebut dapat memicu perubahan struktur otak yang membuat penggunanya langsung mengalami ketergantungan psikologis (craving) yang tak tertahankan.

Mitos 2: "Ganja itu dari alam, jadi aman dan menyembuhkan penyakit."
Fakta: Meskipun ganja berasal dari tanaman, kandungan THC di dalamnya bersifat psikoaktif yang merusak fungsi memori, menurunkan IQ, dan memicu gangguan jiwa berat (psikosis). Penggunaan medis ganja (CBD) di beberapa negara dilakukan dengan ekstraksi laboratorium yang sangat ketat, bukan dengan cara dibakar dan dihisap yang justru merusak paru-paru dan otak.

Mitos 3: "Narkoba bisa membantu fokus belajar dan bekerja lebih kuat."
Fakta: Stimulan seperti sabu atau ekstasi memang memaksa tubuh bekerja melebihi kapasitas normal (overdrive). Namun, ini adalah energi paksaan yang membakar cadangan energi tubuh. Efek setelahnya adalah kelelahan ekstrem (crash), depresi berat, paranoid, dan akhirnya menurunkan produktivitas secara total. Fokus sejati didapat dari pola hidup sehat, bukan zat perusak.`
      },
      {
        title: 'Apa Itu Zat Prekursor dan Mengapa Diawasi Ketat?',
        category: 'regulasi',
        mediaType: 'article',
        excerpt: 'Zat kimia dasar ini ada di sekitar kita, namun jika jatuh ke tangan yang salah, bisa menjadi bahan baku pembuatan narkoba.',
        bodyText: `Dalam upaya pemberantasan narkoba, pengawasan tidak hanya dilakukan pada produk akhirnya (seperti sabu atau ekstasi), tetapi juga pada bahan baku pembuatannya. Bahan kimia dasar ini disebut dengan Prekursor Narkotika. Prekursor adalah zat atau bahan pemula/bahan kimia yang dapat digunakan dalam pembuatan narkotika dan psikotropika.

Uniknya, banyak zat prekursor sebenarnya memiliki kegunaan legal yang sangat penting dalam industri farmasi, kosmetik, atau industri kimia umum (contohnya: ephedrine untuk obat flu, atau aseton dan asam sulfat untuk pelarut industri). Oleh karena sifat 'dual-use' (kegunaan ganda) inilah, pengawasan prekursor menjadi sangat krusial dan kompleks. BNN bekerja sama dengan BPOM dan Bea Cukai mengawasi ketat perizinan impor dan distribusi zat-zat ini.

Penyimpangan (diversi) prekursor dari jalur industri legal ke jalur ilegal (pabrik narkoba gelap/clandestine lab) adalah celah utama peredaran narkotika sintetis di Indonesia. Undang-Undang No. 35 Tahun 2009 memberikan sanksi pidana yang sangat berat bagi pihak-pihak, termasuk korporasi farmasi atau kimia, yang terbukti secara sengaja menjual, memalsukan dokumen, atau membiarkan prekursor jatuh ke tangan pembuat narkoba.`
      },
      {
        title: 'Tips Menghindari Godaan Narkoba di Lingkungan Pergaulan',
        category: 'artikel',
        mediaType: 'article',
        excerpt: 'Tekanan teman sebaya sangat kuat. Pelajari cara cerdas menolak tawaran narkoba tanpa merusak pertemanan.',
        bodyText: `Sebagian besar pengguna narkoba pertama kali mencoba barang haram tersebut bukan karena inisiatif sendiri, melainkan karena tawaran atau tekanan dari teman pergaulan (peer pressure). Memiliki keberanian untuk menolak adalah keterampilan hidup (life skill) yang mutlak harus dimiliki oleh setiap remaja dan dewasa muda.

Langkah pertama adalah asertivitas. Anda berhak berkata "TIDAK" dengan tegas dan jelas, sambil menatap mata mereka. Anda tidak perlu memberikan penjelasan yang panjang lebar atau meminta maaf. Kalimat seperti "Maaf, aku tidak pakai barang itu" atau "Nggak makasih, aku mau fokus persiapan ujian besok" sudah cukup. Ketegasan Anda akan membuat mereka berhenti memaksa.

Langkah kedua, ubah topik pembicaraan atau tawarkan alternatif kegiatan lain yang positif. Misalnya, "Daripada itu, mending kita main futsal atau nge-game aja yuk." Jika tekanan masih berlanjut, berikan alasan yang rasional namun tidak bisa dibantah, seperti aturan ketat orang tua atau alasan kondisi kesehatan alergi.

Langkah terakhir dan paling efektif: Tinggalkan tempat tersebut (Walk Away). Jika lingkungan pertemanan Anda terus memaksa dan menjadikan narkoba sebagai syarat penerimaan dalam kelompok, maka itu bukan pertemanan yang sehat. Jangan takut kehilangan teman yang toxic. Jauh lebih baik mencari lingkaran pertemanan baru yang mendukung hobi positif dan cita-cita Anda.`
      },
      {
        title: 'Dukungan Psikologis bagi Mantan Pecandu (Aftercare)',
        category: 'infografis',
        mediaType: 'article',
        excerpt: 'Pemulihan tidak berhenti setelah keluar dari panti rehabilitasi. Dukungan moral dari masyarakat sangat dibutuhkan.',
        bodyText: `Proses rehabilitasi dari ketergantungan narkoba adalah perjalanan seumur hidup. Meskipun seorang pecandu telah dinyatakan bersih dan lulus dari panti rehabilitasi medis, perjuangan tersulit mereka sebenarnya baru saja dimulai ketika mereka kembali ke tengah masyarakat. Fase inilah yang disebut dengan Bina Lanjut atau Aftercare.

Tantangan terbesar di fase aftercare adalah stigma negatif, penolakan lingkungan, dan sulitnya mendapatkan pekerjaan. Kondisi stres dan depresi inilah yang sering kali menjadi pemicu utama mantan pecandu kembali menggunakan narkoba (relapse). Oleh karena itu, dukungan psikologis dari keluarga inti, teman terdekat, dan lingkungan sekitar sangatlah esensial.

Keluarga harus memberikan kepercayaan kembali, tidak terus-menerus mengungkit kesalahan masa lalu, namun tetap memberikan pengawasan yang sehat (tidak over-protektif). Lingkungan sosial masyarakat dan dunia usaha juga diharapkan membuka pintu kesempatan kerja, memberikan ruang bagi mantan pecandu untuk membuktikan bahwa mereka telah berubah dan bisa kembali menjadi individu yang produktif dan bermanfaat bagi sesama.`
      },
      {
        title: 'Dampak Jangka Panjang Narkoba Terhadap Otak dan Sistem Saraf',
        category: 'artikel',
        mediaType: 'article',
        excerpt: 'Kerusakan akibat narkoba bukan sekadar ilusi sementara. Zat adiktif ini secara harafiah mengubah struktur anatomi otak Anda.',
        bodyText: `Banyak orang mengira bahwa efek narkoba hanya terjadi saat mabuk dan akan hilang sepenuhnya ketika sadar. Sayangnya, sains membuktikan sebaliknya. Penggunaan narkotika dalam jangka panjang secara harafiah mengubah struktur anatomi dan fungsi kimiawi otak (neuroplastisitas negatif), yang menyebabkan kerusakan kognitif yang sulit—bahkan mustahil—untuk dipulihkan 100%.

Otak manusia memiliki sistem penghargaan (reward system) alami yang melepaskan dopamin ketika kita makan enak atau berolahraga. Narkoba membajak sistem ini dengan melepaskan dopamin hingga 10 kali lipat lebih banyak. Akibatnya, otak beradaptasi dengan mengurangi produksi dopamin alami dan mematikan reseptornya. Inilah mengapa pecandu merasa sangat hampa, depresi parah, dan tidak bisa menikmati hidup tanpa asupan narkoba. Inilah esensi dari kecanduan.

Selain sistem penghargaan, narkoba merusak korteks prefrontal, yakni bagian otak yang berfungsi untuk mengambil keputusan, mengontrol impuls, dan merencanakan masa depan. Kerusakan di area ini membuat pecandu kehilangan moralitas, mudah melakukan kejahatan (seperti mencuri), dan kehilangan kendali atas diri mereka sendiri. Stop sebelum mencoba, jangan biarkan zat kimia merampas masa depan dan kemanusiaan Anda.`
      },
      {
        title: 'Apa yang Harus Dilakukan Jika Mengetahui Ada Transaksi Narkoba?',
        category: 'regulasi',
        mediaType: 'article',
        excerpt: 'Jangan bertindak main hakim sendiri. Ikuti panduan aman ini untuk melaporkan tindak pidana kejahatan narkotika.',
        bodyText: `Mengetahui atau mencurigai adanya transaksi atau aktivitas peredaran narkoba di lingkungan tempat tinggal Anda tentu meresahkan. Namun, warga sangat diimbau untuk tidak bertindak gegabah atau main hakim sendiri. Sindikat narkoba sering kali terorganisir, nekat, dan bisa saja bersenjata. Keselamatan Anda dan keluarga adalah prioritas utama.

Langkah pertama: Observasi secara diam-diam. Catat informasi penting seperti ciri-ciri fisik pelaku, plat nomor kendaraan, waktu kejadian (jam berapa mereka sering berkumpul), dan modus yang sering digunakan (misalnya ada bungkusan yang sering dilempar di titik tertentu). Jangan mencoba merekam terang-terangan yang bisa memicu kecurigaan pelaku.

Langkah kedua: Laporkan informasi tersebut kepada aparat berwenang. Anda bisa melapor ke RT/RW setempat, Bhabinkamtibmas Polri, atau langsung menghubungi Call Center / form pengaduan online BNN Kota Sawahlunto. Berdasarkan UU Narkotika, identitas pelapor wajib dilindungi dan dirahasiakan oleh negara. 

Dengan menjadi mata dan telinga aparat, Anda telah memberikan kontribusi pahlawan yang sangat berharga. BNN dan Kepolisian memiliki tim intelijen yang terlatih untuk menindaklanjuti laporan masyarakat dengan operasi pengintaian yang taktis dan terukur.`
      },
      {
        title: 'Mengenal NPS (New Psychoactive Substances) yang Belum Terdaftar',
        category: 'infografis',
        mediaType: 'article',
        excerpt: 'Bahaya laten narkoba sintetis yang terus bermutasi untuk menghindari jerat hukum. Waspadai modusnya.',
        bodyText: `Dunia terus berkembang, begitu pula dengan modus operandi para bandar narkoba. Saat ini, dunia internasional menghadapi ancaman baru berupa NPS (New Psychoactive Substances) atau zat psikoaktif baru. NPS adalah zat sintetik yang dirancang di laboratorium gelap dengan sedikit memodifikasi struktur kimia narkoba tradisional (seperti ganja, kokain, atau ekstasi).

Tujuan utama pembuatan NPS adalah legal loophole: karena struktur kimianya baru, zat tersebut belum tercantum dalam lampiran Undang-Undang Narkotika suatu negara, sehingga pembuatnya berharap bisa mengedarkannya secara 'legal'. Bentuk NPS pun sangat beragam dan menipu, mulai dari cairan liquid vape (rokok elektrik), kertas perangko (blotter art), permen jeli, hingga bubuk teh kemasan.

Meskipun belum terdaftar, efek NPS sering kali jauh lebih mematikan dan neurotoksik dibandingkan narkoba aslinya. BNN RI dan Kementerian Kesehatan secara rutin memperbarui regulasi (Permenkes) untuk memasukkan puluhan jenis NPS baru ke dalam daftar narkotika Golongan I agar dapat segera ditindak secara hukum. Masyarakat diminta ekstra waspada, jangan mudah mengonsumsi produk herbal atau cairan rokok elektrik yang tidak memiliki izin edar BPOM.`
      },
      {
        title: 'Bahaya Penyalahgunaan Obat Resep (Psikotropika) Tanpa Pengawasan Dokter',
        category: 'artikel',
        mediaType: 'article',
        excerpt: 'Obat penenang dan pereda nyeri sangat bermanfaat untuk medis, namun menjadi racun mematikan jika disalahgunakan.',
        bodyText: `Selain narkotika jalanan, ancaman penyalahgunaan zat adiktif juga datang dari laci obat di rumah, yakni berupa obat-obatan resep atau Psikotropika. Obat-obatan seperti Benzodiazepine (Dumolid, Alprazolam/Xanax, Valium) atau pereda nyeri golongan opioid (Tramadol, Fentanyl) sangat krusial dalam dunia medis untuk mengobati depresi, kecemasan, atau nyeri pasca operasi.

Sayangnya, obat-obatan ini kerap disalahgunakan, terutama oleh kalangan pelajar dan mahasiswa, untuk mendapatkan efek relaksasi sesaat atau 'nge-fly'. Penggunaan tanpa indikasi medis dan di luar pengawasan resep dokter sangatlah berbahaya. Tubuh dengan cepat akan membangun toleransi, sehingga pengguna membutuhkan dosis yang semakin tinggi setiap harinya.

Overdosis obat resep (terutama jika dicampur dengan alkohol) dapat menyebabkan depresi sistem pernapasan. Napas melambat hingga akhirnya berhenti total saat tidur, memicu koma dan kematian. BNN menghimbau kepada apotek dan fasilitas kesehatan untuk memperketat kontrol distribusi psikotropika, serta mengingatkan orang tua untuk menyimpan obat-obatan resep dengan aman agar tidak mudah diakses oleh anak-anak.`
      },
      {
        title: 'Panduan Pelaksanaan Program Desa Bersinar (Bersih Narkoba)',
        category: 'video',
        mediaType: 'youtube',
        mediaUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', // Placeholder URL
        excerpt: 'Pelajari langkah-langkah strategis membangun ketahanan wilayah desa dari ancaman narkoba melalui partisipasi warga.',
        bodyText: `Desa Bersinar (Bersih Narkoba) adalah program unggulan kolaboratif BNN bersama Kementerian Dalam Negeri dan Kemendes PDTT. Tujuannya adalah menciptakan desa atau kelurahan yang memiliki kemandirian, daya tangkal, dan ketahanan keluarga yang kuat terhadap ancaman penyalahgunaan narkoba. Program ini menjadikan masyarakat desa sebagai subjek utama, bukan sekadar objek sosialisasi.

Ada tiga pilar utama dalam membangun Desa Bersinar. Pertama, Kelembagaan: Pembentukan kelompok kerja (Pokja) dan relawan anti narkoba yang disahkan melalui Surat Keputusan (SK) Kepala Desa. Kedua, Regulasi: Pembuatan Peraturan Desa (Perdes) yang mengatur sanksi sosial dan alokasi Dana Desa untuk kegiatan P4GN. Ketiga, Fasilitasi P4GN: Pelaksanaan kampanye masif, pelatihan keterampilan (life skill) bagi pemuda desa, dan penyediaan akses rehabilitasi berbasis masyarakat (Intervensi Berbasis Masyarakat/IBM).

Melalui panduan video ini, perangkat desa dapat mempelajari kisah sukses (best practices) dari desa-desa lain yang telah berhasil meraih predikat Desa Bersinar. Sinergi antara Kepala Desa, Babinsa, Bhabinkamtibmas, tokoh agama, dan karang taruna adalah kunci mutlak keberhasilan. Mari bersama lindungi kampung halaman kita dari invasi senyap bandar narkoba.`
      }
    ];

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

    console.log('Seeding 30 items completed successfully!');
  } catch (error) {
    console.error('Error during seeding:', error);
  }
}

seed();
