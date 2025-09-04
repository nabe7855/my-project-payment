"use client";

import React from "react";

/**
 * Stripe決済セクション
 * 
 * ユーザーがプランを購入するためのセクションです。
 * Stripe Checkout APIを呼び出し、安全な決済ページへリダイレクトします。
 */
const PaymentSection: React.FC = () => {
  const handlePayment = async () => {
    try {
      // Next.js APIルートを呼び出してCheckoutセッション作成
      const res = await fetch("/api/checkout", {
        method: "POST",
      });

      if (!res.ok) {
        throw new Error("サーバーエラーが発生しました");
      }

      const { url } = await res.json();

      // StripeのCheckoutページへリダイレクト
      window.location.href = url;
    } catch (error) {
      console.error("決済エラー:", error);
      alert("決済ページの表示に失敗しました。");
    }
  };

  return (
    <section id="payment" className="bg-[#edf4f2] py-20 md:py-28">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-5xl text-[#383838] font-bold mb-4">
          プランのご購入
        </h2>
        <p className="text-lg md:text-xl text-gray-600 mb-12">
          相続コミコミプランをオンラインで決済いただけます。
        </p>

        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 border-2 border-[#80b963]">
          <h3 className="text-2xl md:text-3xl font-bold text-[#00693e] mb-2">
            一律66万円相続コミコミプラン
          </h3>
          <p className="text-4xl md:text-6xl font-bold text-[#383838] mb-8">
            660,000<span className="text-2xl md:text-3xl ml-2">円</span>
            <span className="text-base md:text-lg ml-2 font-normal">(税込)</span>
          </p>
          <p className="text-gray-500 mb-10">
            追加料金は一切かかりません。すべての手続きを専門家がサポートします。
          </p>
          <button
            onClick={handlePayment}
            className="w-full max-w-md mx-auto bg-[#ed8634] text-white font-bold py-4 px-6 rounded-lg hover:opacity-90 transition-opacity text-xl flex items-center justify-center gap-3"
            aria-label="Stripeを使って支払う"
          >
            <i className="fa-brands fa-stripe fa-2x"></i>
            <span>Stripeで安全に支払う</span>
          </button>
          <p className="text-xs text-gray-400 mt-4">
            上のボタンを押すと、Stripeの安全な決済ページに移動します。
          </p>
        </div>
      </div>
    </section>
  );
};

export default PaymentSection;
