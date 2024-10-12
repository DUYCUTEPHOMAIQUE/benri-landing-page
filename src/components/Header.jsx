import React from 'react';

function Header() {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
  <nav className="container mx-auto px-6 py-3">
    <div className="flex justify-between items-center">
      <a href="#h" className="text-2xl font-bold text-benri-green-400">Benri Fake</a>
      <div className="flex items-center space-x-4">
        <div className="hidden md:flex items-center space-x-4">
          <a href="#features" className="text-gray-800 hover:text-benri-green-400">Tính năng</a>
          <a href="#testimonials" className="text-gray-800 hover:text-benri-green-400">Đánh giá</a>
          <a href="#faq" className="text-gray-800 hover:text-benri-green-400">FAQ</a>
        </div>
        <a href="#" className="bg-benri-green-400 text-white px-4 py-2 rounded-full hover:bg-benri-green-500 transition duration-300">Tải ứng dụng</a>
      </div>
    </div>
  </nav>
</header>
  );
}

export default Header;