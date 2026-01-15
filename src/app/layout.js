import './globals.css';
import ToastProvider from '@/components/ToastProvider';
import Footer from '@/components/shared/Footer';
import Navbar from '@/components/shared/Navbar';
import QueryProvider from '@/providers/QueryProvider';

export const metadata = {
  title: 'SwiftCart',
  description:
    'SwiftCart is a modern product listing app with categories, detailed item pages, and secure item management—built with Next.js and MongoDB.',
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180' }],
  },
  manifest: '/site.webmanifest',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <ToastProvider />

        <header>
          <Navbar />
        </header>

        <main>
          <QueryProvider>{children}</QueryProvider>
        </main>

        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
