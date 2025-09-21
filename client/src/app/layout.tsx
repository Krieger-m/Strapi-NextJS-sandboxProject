// app/layout.tsx
import '../styles/globals.css';
import { ReactNode } from 'react';
import EmotionProviderClient from '@/components/wrapperComponent';



export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        {/* wrap children with client-only provider */}
        <EmotionProviderClient>{children}</EmotionProviderClient>
      </body>
    </html>
  );
}

// Add this for SSR in app directory (Next.js 13+)
export async function generateStaticParams() {
  // No-op, but required for static export
  return [];
}

export async function generateMetadata() {
  // No-op, but required for static export
  return {};
}
