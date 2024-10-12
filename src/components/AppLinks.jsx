import React from 'react';

function AppLinks() {
  return (
    <div className="bg-benri-green-100 py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-benri-green-600 font-semibold tracking-wide uppercase">Tải ứng dụng</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-benri-green-800 sm:text-4xl">
            Có sẵn trên iOS và Android
          </p>
        </div>
        <div className="mt-10 flex justify-center">
          <a href="#" className="mr-4">
            <img className="h-12" src="/app-store-badge.png" alt="Download on the App Store" />
          </a>
          <a href="#">
            <img className="h-12" src="/google-play-badge.png" alt="Get it on Google Play" />
          </a>
        </div>
        <div className="mt-8 text-center">
          <img className="inline-block" src="/qr-code.png" alt="QR Code" width="150" height="150" />
          <p className="mt-2 text-sm text-benri-green-600">Quét mã QR để tải ứng dụng</p>
        </div>
      </div>
    </div>
  );
}

export default AppLinks;