import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-primary-600">404</h1>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Page Not Found</h2>
          <p className="text-xl text-gray-600 mb-8">
            Sorry, we couldn't find the page you're looking for.
          </p>
        </div>
        
        <div className="space-y-4">
          <Link href="/" className="btn-primary">
            Go Back Home
          </Link>
          <div className="text-sm text-gray-500">
            <p>Or try one of these popular pages:</p>
            <div className="flex justify-center space-x-4 mt-2">
              <Link href="/about" className="text-primary-600 hover:text-primary-700">
                About
              </Link>
              <Link href="/academics" className="text-primary-600 hover:text-primary-700">
                Academics
              </Link>
              <Link href="/admissions" className="text-primary-600 hover:text-primary-700">
                Admissions
              </Link>
              <Link href="/contact" className="text-primary-600 hover:text-primary-700">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
