
import React from 'react';

// Hero section: The first view of the landing page
const Hero: React.FC = () => {
  return (
    <section className="bg-gradient-to-br from-navy to-slate-900 text-white relative">
      <div className="container mx-auto px-6 py-24 md:py-32 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 lg:w-3/5 text-center md:text-left">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold leading-tight mb-4">
            生前から、もしもの後まで。
            <br />
            家族を守るワンストップ相続支援
          </h1>
          <p className="text-xl md:text-2xl mb-8 font-bold text-gold">
            相続の不安、まるごとお任せ33万円<span className="text-base font-normal text-white">(税込)</span>
          </p>
          <div className="flex justify-center md:justify-start space-x-4">
            <a href="#contact" className="bg-gold text-white font-bold py-3 px-8 rounded-lg text-lg hover:bg-opacity-90 transition-transform transform hover:scale-105">
              ✅ 無料相談を申し込む
            </a>
            <a href="#contact" className="bg-white text-navy border-2 border-white font-bold py-3 px-8 rounded-lg text-lg hover:bg-transparent hover:text-white transition-colors">
              ✅ 資料をダウンロード
            </a>
          </div>
        </div>
        <div className="md:w-1/2 lg:w-2/5 mt-10 md:mt-0 flex justify-center">
          <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-2xl border-4 border-gold bg-cover bg-center" style={{ backgroundImage: "url('https://picsum.photos/seed/lawyer/400/400')" }}>
            {/* Image of a professional consultation */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
