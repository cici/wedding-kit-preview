import '@fontsource/shrikhand/400.css';
import '@fontsource/nunito/400.css';
import '@fontsource/nunito/400-italic.css';
import '@fontsource/nunito/700.css';
import '@fontsource/nunito/800.css';
import '@fontsource/nunito/900.css';
import './globals.css';

export const metadata = {
  title: 'Something Old, Something Queer: a wedding kit for LGBTQ+ couples over 40',
  description:
    'The party and the paperwork, planned together. Start with Before You Say I Do, a free checklist of the legal and money questions to settle before the big day.',
  // Private preview while the name test runs: keep it out of search engines.
  robots: { index: false, follow: false },
};

export const viewport = {
  themeColor: '#ee7a3b',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
