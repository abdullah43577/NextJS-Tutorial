import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

export default function RootLayout({ children }) {
  return (
    <div className="content">
      <header>
        <Navbar />
      </header>
      {children}
      <Footer />
    </div>
  );
}
