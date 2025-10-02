import './globals.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export const metadata = {
  title: 'Smart Academy - Quality Education in Monrovia, Liberia',
  description: 'Smart Academy provides quality education for students in Monrovia, Liberia. Founded in 2013, we serve 376 students with excellence in education.',
  keywords: 'school, education, Liberia, Monrovia, Smart Academy, Dr. Numehn Owen Dunbar, quality education',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
