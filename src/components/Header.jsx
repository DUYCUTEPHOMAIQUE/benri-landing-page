import React from 'react';
import { motion } from 'framer-motion';

function Header() {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
  <nav className="container mx-auto px-6 py-3">
    <div className="flex justify-between items-center">
      <a href="#h" className="text-2xl font-bold text-benri-green-400">Benri Fake</a>
      <div className="flex items-center space-x-4">
        <div className="hidden md:flex items-center space-x-4">
          <a href="#features" className="text-benri-green-800 hover:text-benri-green-400 font-semibold">Tính năng</a>
          <a href="#testimonials" className="text-benri-green-800 hover:text-benri-green-400 font-semibold">Đánh giá</a>
          <a href="#faq" className="text-benri-green-800 hover:text-benri-green-400 font-semibold">FAQ</a>
        </div>
        <motion.div
  whileHover={{ scale: 1.10, transition: { duration: 0.3 } }}
  whileTap={{ scale: 0.95 }}
>
        <a href="#" className="bg-benri-green-400 text-white px-4 py-2 rounded-full hover:bg-benri-green-500 transition duration-300 inline-flex items-center justify-center">Tải ứng dụng</a>
        </motion.div>
      </div>
    </div>
  </nav>
</header>
  );
}

export default Header;