export default function Profile() {
  return (
    <section className="bg-surface-container-low py-xl">
      <div className="max-w-container-max mx-auto px-6 md:px-lg">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 flex flex-col gap-6">
            <h2 className="font-headline-section text-headline-section text-primary">Profil Institusi</h2>
            <p className="font-body-main text-body-main text-on-surface-variant">
              BNN Kota Sawahlunto merupakan instansi vertikal yang bertugas melaksanakan kebijakan nasional di bidang Pencegahan dan Pemberantasan Penyalahgunaan dan Peredaran Gelap Narkotika (P4GN) di wilayah Kota Sawahlunto.
            </p>
            <div className="w-full h-64 rounded-2xl overflow-hidden shadow-sm mt-4">
              <img className="w-full h-full object-cover" alt="professional diverse team of government workers in formal attire sitting around a bright meeting table discussing documents collaboratively" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCxKtovfF-cRzsGYOfUdZtjrajj4NUv5Uo5zZU10m_m83RlkUqNape7rY-F8QG2M0X7mSnpCA6WocscAMKtUUpQjd_CCti4fL2tLb6n3W0WgLL83lcEpTIgw09o1ejT4P1EMZD5IxhIMf2ix7W6tJ4MR_swAVIGsBM0bFGbsHE_dep65FBV8JHLb9rxIW-yO5fe825GTNB406POGVj9iqBo7IMjP-49ccKktZ6iwaBj8-6oh3LzXr57yjBREs5MjMDSEUwmi5CmkrSt"/>
            </div>
          </div>
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-surface-container-lowest p-8 rounded-2xl shadow-[0px_10px_25px_rgba(13,38,194,0.03)] border border-surface-container">
              <div className="w-12 h-12 bg-primary-container rounded-xl flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-on-primary-container">visibility</span>
              </div>
              <h3 className="font-headline-card text-headline-card text-on-surface mb-4">Visi</h3>
              <p className="font-body-small text-body-small text-on-surface-variant">
                Mewujudkan Kota Sawahlunto yang bersih dari penyalahgunaan dan peredaran gelap narkoba untuk mendukung terwujudnya masyarakat yang sehat, cerdas, dan produktif.
              </p>
            </div>
            <div className="bg-surface-container-lowest p-8 rounded-2xl shadow-[0px_10px_25px_rgba(13,38,194,0.03)] border border-surface-container">
              <div className="w-12 h-12 bg-secondary-container rounded-xl flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-on-secondary-container">assignment</span>
              </div>
              <h3 className="font-headline-card text-headline-card text-on-surface mb-4">Misi</h3>
              <p className="font-body-small text-body-small text-on-surface-variant">
                Mencegah peredaran gelap narkoba, memberdayakan masyarakat, dan memberikan layanan rehabilitasi medis dan sosial yang komprehensif bagi pecandu.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
