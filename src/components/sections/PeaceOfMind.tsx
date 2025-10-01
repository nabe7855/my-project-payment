import React from 'react';

const peaceOfMindPoints = [
  { title: '手間ゼロ', description: '複雑な戸籍収集や書類作成、金融機関とのやり取りなど、面倒な手続きはすべて専門家にお任せいただけます。' },
  { title: 'もめない関係', description: '専門家が中立的な立場で調整役となり、感情的な対立を回避。ご家族の円満な関係性を守ります。' },
  { title: '節税・資産保全', description: '二次相続まで見据えた最適な遺産分割や税務対策を提案し、大切な資産を無駄なく次世代へ繋ぎます。' },
  { title: '未来の安心', description: '相続手続きの完了後も、不動産の活用や将来の資産管理について継続的にサポート。未来の不安も解消します。' },
];

const PeaceOfMind: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-navy mb-6">
          このパックで得られる安心
        </h2>

        {/* ✅ 見出しの下にイラストを表示 */}
        <div className="flex justify-center mb-12">
          <img
            src="/images/団らん.png"
            alt="家族の団らんのイメージ"
            className="max-w-md rounded-lg shadow-lg"
          />
        </div>

        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-xl overflow-hidden">
          <div className="divide-y divide-gray-200">
            {peaceOfMindPoints.map((point, index) => (
              <div
                key={index}
                className="p-6 md:p-8 grid md:grid-cols-3 gap-4 items-center hover:bg-navy hover:bg-opacity-5 transition-colors"
              >
                <div className="md:col-span-1">
                  <h3 className="text-xl font-bold text-gold text-center md:text-left">
                    {point.title}
                  </h3>
                </div>
                <div className="md:col-span-2">
                  <p className="text-gray-700">{point.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PeaceOfMind;
