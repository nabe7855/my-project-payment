
'use client';
import React, { useState } from 'react';

// Contact section: Final CTA and contact form
const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '無料相談を希望します。',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // In a real application, you would send this data to a server or a form handling service.
    // e.g., using fetch() to a Next.js API route or Formspree.
    alert(`お問い合わせありがとうございます。\n以下の内容で送信されました：\n${JSON.stringify(formData, null, 2)}`);
    // Reset form after submission
    setFormData({ name: '', phone: '', email: '', message: '無料相談を希望します。' });
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-center text-navy mb-4">
          まずは無料相談から
        </h2>
        <p className="text-center text-lg text-gray-600 mb-12">
          Zoom・LINE・お電話での非対面相談も全国対応しております。お気軽にお問い合わせください。
        </p>

        <div className="max-w-4xl mx-auto p-8 bg-gray-50 rounded-lg shadow-xl">
          <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6">
            <div className="md:col-span-2">
              <label htmlFor="name" className="block text-sm font-bold text-gray-700 mb-2">お名前 <span className="text-red-500">*</span></label>
              <input type="text" name="name" id="name" required value={formData.name} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-navy focus:border-navy" />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-bold text-gray-700 mb-2">電話番号 <span className="text-red-500">*</span></label>
              <input type="tel" name="phone" id="phone" required value={formData.phone} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-navy focus:border-navy" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-2">メールアドレス <span className="text-red-500">*</span></label>
              <input type="email" name="email" id="email" required value={formData.email} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-navy focus:border-navy" />
            </div>
            <div className="md:col-span-2">
              <label htmlFor="message" className="block text-sm font-bold text-gray-700 mb-2">ご相談内容</label>
              <textarea name="message" id="message" rows={5} value={formData.message} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-navy focus:border-navy"></textarea>
            </div>
            <div className="md:col-span-2 text-center">
              <button type="submit" className="bg-gold text-white font-bold py-3 px-12 rounded-lg text-lg hover:bg-opacity-90 transition-transform transform hover:scale-105">
                この内容で送信する
              </button>
            </div>
          </form>
        </div>

        <div className="mt-16 text-center text-gray-700">
            <h3 className="text-2xl font-bold text-navy mb-6">事務所情報</h3>
            <p>中央相続事務所</p>
            <p>〒100-0001 東京都千代田区千代田1-1</p>
            <p>電話: 0120-123-456 (受付時間: 平日9:00-18:00)</p>
            <p>メール: info@chuo-souzoku.com</p>
            <div className="flex justify-center items-center space-x-8 mt-6">
                <div className="w-48 h-48 bg-gray-200 flex items-center justify-center text-gray-500">
                    Google Map
                </div>
                <div className="w-48 h-48 bg-gray-200 flex items-center justify-center text-gray-500">
                    LINE QRコード
                </div>
            </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;
