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
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-center text-navy mb-12">
          このパックで得られる安心
        </h2>

        {/* ✅ レスポンシブ構成: lg 以上は横並び */}
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* 左側にイラスト */}
          <div className="flex-1 flex justify-center">
            <img
              src="/images/団らん.png"
              alt="家族の団らんのイメージ"
              className="w-full max-w-md rounded-lg shadow-lg"
            />
          </div>

          {/* 右側に安心ポイント */}
          <div className="flex-1 w-full">
            <div className="bg-white rounded-lg shadow-xl overflow-hidden">
              <div className="divide-y divide-gray-200">
                {peaceOfMindPoints.map((point, index) => (
                  <div
                    key={index}
                    className="p-6 md:p-8 hover:bg-navy hover:bg-opacity-5 transition-colors"
                  >
                    <h3 className="text-xl font-bold text-gold mb-2">
                      {point.title}
                    </h3>
                    <p className="text-gray-700">{point.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PeaceOfMind;
