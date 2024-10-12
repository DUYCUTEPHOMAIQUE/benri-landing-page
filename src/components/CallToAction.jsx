import React from 'react';

function CallToAction() {
  return (
    <div className="bg-benri-green-400">
      <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
          <span className="block">Sẵn sàng để bắt đầu?</span>
          <span className="block">Tải ứng dụng ngay hôm nay.</span>
        </h2>
        <p className="mt-4 text-lg leading-6 text-benri-green-100">
          Bắt đầu quản lý tài chính của bạn một cách thông minh và hiệu quả với Benri.
        </p>
        <a
          href="#"
          className="mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-benri-green-600 bg-white hover:bg-benri-green-50 sm:w-auto"
        >
          Tải xuống miễn phí
        </a>
      </div>
    </div>
  );
}

export default CallToAction;