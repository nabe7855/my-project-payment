export default function SuccessPage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-green-50 p-6">
      <h1 className="text-3xl font-bold text-green-700 mb-4">決済が完了しました 🎉</h1>
      <p className="text-lg text-gray-700 mb-6">
        ご購入ありがとうございます。確認メールをお送りしました。
      </p>
      <a
        href="/"
        className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
      >
        トップへ戻る
      </a>
    </main>
  );
}
