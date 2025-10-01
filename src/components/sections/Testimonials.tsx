import React from 'react';

const testimonials = [
  {
    quote: "何から手をつければ良いか分からず不安でしたが、最初から最後まで丁寧にサポートしていただき、本当に助かりました。兄弟とも揉めることなく、円満に解決できて感謝しています。",
    author: "A様・60代・女性",
    avatar: "https://picsum.photos/seed/avatar1/100/100",
  },
  {
    quote: "父が亡くなり、仕事も忙しく手続きを進める時間がありませんでした。パック料金で全てお任せできたので、精神的にも時間的にも余裕ができました。もっと早く相談すればよかったです。",
    author: "B様・40代・男性",
    avatar: "https://picsum.photos/seed/avatar2/100/100",
  },
  {
    quote: "遠方に住んでいるため、手続きが心配でした。Zoomや郵送で全国対応していただけたので、一度も事務所に伺うことなく完了できました。対応も迅速で安心できました。",
    author: "C様・50代・女性",
    avatar: "https://picsum.photos/seed/avatar3/100/100",
  },
];

// Silhouette icon for testimonials
const UserSilhouetteIcon = () => (
  <div className="w-20 h-20 rounded-full bg-gray-300 flex items-center justify-center ring-4 ring-gold">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-12 w-12 text-white"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
        clipRule="evenodd"
      />
    </svg>
  </div>
);

// Testimonials section: Customer voices
const Testimonials: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-center text-navy mb-12">
          お客様の声
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-lg flex flex-col items-center text-center"
            >
              <UserSilhouetteIcon />
              {/* ✅ ダブルクォートを日本語のカギ括弧に修正 */}
              <p className="text-gray-600 my-6 flex-grow">「{testimonial.quote}」</p>
              <p className="font-bold text-navy">{testimonial.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
