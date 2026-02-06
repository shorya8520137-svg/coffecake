import { Link } from 'react-router';
import { Coffee, Home } from 'lucide-react';

export function NotFound() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="text-center">
        <Coffee className="w-24 h-24 text-black mx-auto mb-6" />
        <h1 className="text-6xl mb-4 text-black">404</h1>
        <h2 className="text-3xl mb-4 text-black">Page Not Found</h2>
        <p className="text-xl text-gray-700 mb-8">
          Oops! The page you're looking for doesn't exist.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 bg-black hover:bg-gray-800 text-white px-8 py-3 rounded-lg transition-colors"
        >
          <Home className="w-5 h-5" />
          Back to Home
        </Link>
      </div>
    </div>
  );
}