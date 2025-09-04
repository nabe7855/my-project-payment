export default function CancelPage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-red-50 p-6">
      <h1 className="text-3xl font-bold text-red-700 mb-4">決済がキャンセルされました ❌</h1>
      <p className="text-lg text-gray-700 mb-6">
        再度お試しいただくか、別のお支払い方法をご利用ください。
      </p>
      <a
        href="/"
        className="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
      >
        トップへ戻る
      </a>
    </main>
  );
}
