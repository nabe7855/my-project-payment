import React from 'react';
import SectionTitle from '../ui/SectionTitle';
import Card from '../ui/Card';
import { REVIEWS } from '../../constants';
import { Star } from 'lucide-react';

const ReviewSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white via-[#fafafa] to-white">
      <div className="container mx-auto px-4 sm:px-6">
        <SectionTitle title="お客様の声" subtitle="Testimonials" />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {REVIEWS.map((review, index) => (
            <Card
              key={index}
              className="flex flex-col bg-white rounded-2xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300"
            >
              {/* ⭐ レビュー評価 */}
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 transition-all duration-300 ${
                      i < review.rating
                        ? 'text-gold fill-current hover:scale-110'
                        : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>

              {/* 💬 引用文（エスケープ対応） */}
              <p className="text-gray-700 italic mb-4 flex-grow relative leading-relaxed">
                <span className="text-2xl text-gold font-serif mr-1">“</span>
                <span>{review.quote}</span>
                <span className="text-2xl text-gold font-serif ml-1">”</span>
              </p>

              {/* 👤 著者情報 */}
              <div className="mt-auto">
                <p className="font-bold text-navy">{review.author}</p>
                <p className="text-sm text-gray-500">{review.details}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewSection;
