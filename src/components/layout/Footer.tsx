import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t text-gray-900">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Support Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900">Support</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><address className="not-italic">123 Tech Avenue, Silicon Valley, CA 94000</address></li>
              <li><Link href="mailto:support@electronicsstore.com" className="hover:text-primary">support@electronicsstore.com</Link></li>
              <li><Link href="tel:+1234567890" className="hover:text-primary">+1 (234) 567-890</Link></li>
            </ul>
          </div>

          {/* Account Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900">Account</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><Link href="/account" className="hover:text-primary">My Account</Link></li>
              <li><Link href="/login" className="hover:text-primary">Login / Register</Link></li>
              <li><Link href="/cart" className="hover:text-primary">Cart</Link></li>
              <li><Link href="/wishlist" className="hover:text-primary">Wishlist</Link></li>
              <li><Link href="/" className="hover:text-primary">Shop</Link></li>
            </ul>
          </div>

          {/* Quick Links Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><Link href="/policies" className="hover:text-primary">Policies</Link></li>
              <li><Link href="/faq" className="hover:text-primary">FAQ</Link></li>
              <li><Link href="/contact" className="hover:text-primary">Contact</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-400 text-center text-sm text-gray-600">
          <p>&copy; {new Date().getFullYear()} ElectronicsStore. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
