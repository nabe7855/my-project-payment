import type { Metadata } from 'next';
import '@/app/globals.css';
import ClientLayout from './ClientLayout';

// SEO・タイトルなどのメタデータ設定
export const metadata: Metadata = {
  title: '中央相続事務所｜あんしん相続パック',
  description:
    '生前からもしもの後まで。家族を守るワンストップ相続支援。全国対応・非対面完結・追加費用なし。',
  icons: {
    icon: '/favicon.ico',
  },
};

// layout.tsx はサーバーコンポーネントとして扱う
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className="bg-white text-gray-800 font-sans overflow-x-hidden">
        {/* クライアント用ロジックを別ファイルに分離 */}
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
