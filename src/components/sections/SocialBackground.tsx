
'use client';
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend } from 'recharts';

// Data for charts
const disputeData = [
  { name: '<1000万円', value: 34 },
  { name: '1000-5000万円', value: 43 },
  { name: '5000万円-1億円', value: 12 },
  { name: '>1億円', value: 11 },
];

const vacantHouseData = [{ name: '相続', value: 54.6 }, { name: 'その他', value: 45.4 }];
const registrationData = [{ name: '認知', value: 46.6 }, { name: '未認知', value: 53.4 }];

const COLORS = ['#1A237E', '#D4AF37', '#B0BEC5'];

// SocialBackground section: Explains "Why now?"
const SocialBackground: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-center text-navy mb-4">
          なぜ今、相続対策が必要なのか？
        </h2>
        <p className="text-center text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
          相続税がかからない家庭ほど、もめている。だから一般家庭こそ準備が必要。
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Chart Card 1 */}
          <div className="bg-white p-8 rounded-lg shadow-lg text-center">
            <h3 className="text-xl font-bold text-navy mb-2">遺産額5,000万円未満が<br/>約75%</h3>
            <p className="text-gray-600 mb-4 text-sm">相続税がかからない家庭ほどもめています</p>
            <div style={{ width: '100%', height: 250 }}>
              <ResponsiveContainer>
                <BarChart data={disputeData} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
                  <XAxis dataKey="name" />
                  <YAxis unit="%" />
                  <Tooltip formatter={(value: number) => `${value}%`} />
                  <Bar dataKey="value" fill="#1A237E" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Chart Card 2 */}
          <div className="bg-white p-8 rounded-lg shadow-lg text-center">
            <h3 className="text-xl font-bold text-navy mb-2">空き家の54.6%は<br/>相続が原因</h3>
            <p className="text-gray-600 mb-4 text-sm">放置すると管理・税負担が増加します</p>
            <div style={{ width: '100%', height: 250 }}>
              <ResponsiveContainer>
                <PieChart>
                  <Pie data={vacantHouseData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80} label>
                     {vacantHouseData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                  </Pie>
                  <Tooltip formatter={(value: number) => `${value}%`} />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Chart Card 3 */}
          <div className="bg-white p-8 rounded-lg shadow-lg text-center">
            <h3 className="text-xl font-bold text-navy mb-2">登記義務化の認知度は<br/>まだ46.6%</h3>
            <p className="text-gray-600 mb-4 text-sm">知らずに放置すると法的リスクが発生します</p>
            <div style={{ width: '100%', height: 250 }}>
              <ResponsiveContainer>
                <PieChart>
                  <Pie data={registrationData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80} label>
                     {registrationData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                  </Pie>
                  <Tooltip formatter={(value: number) => `${value}%`} />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialBackground;
