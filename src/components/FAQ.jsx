import React from 'react';
import AnimatedSection from './AnimatedSection';

const faqs = [
  {
    question: 'Ứng dụng có miễn phí không?',
    answer: 'Có, ứng dụng cơ bản là miễn phí. Chúng tôi cũng cung cấp phiên bản premium với các tính năng nâng cao.',
  },
  {
    question: 'Benri hỗ trợ những hệ điều hành nào?',
    answer: 'Benri hiện hỗ trợ cả iOS và Android. Bạn có thể tải ứng dụng từ App Store hoặc Google Play.',
  },
  {
    question: 'Làm thế nào để bắt đầu sử dụng Benri?',
    answer: 'Sau khi tải ứng dụng, bạn chỉ cần đăng ký tài khoản và bắt đầu tạo danh sách mua sắm của mình.',
  },
  {
    question: 'Dữ liệu của tôi có an toàn không?',
    answer: 'Chúng tôi coi trọng bảo mật và quyền riêng tư của người dùng. Tất cả dữ liệu được mã hóa và lưu trữ an toàn.',
  },
];

function FAQ() {
  return (
    <div className="bg-benri-green-50" id="faq">
      

      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
      <AnimatedSection>
        <h2 className="text-3xl font-extrabold text-benri-green-800 text-center mb-8">
          Câu hỏi thường gặp
        </h2>
        </AnimatedSection>
        <dl className="mt-6 space-y-6 divide-y divide-benri-green-200">
          {faqs.map((faq) => (
            <AnimatedSection key={faq.question}>
              <div className="pt-6">
              <dt className="text-lg">
                <span className="font-medium text-benri-green-600">{faq.question}</span>
              </dt>
              <dd className="mt-2 text-base text-benri-green-500">{faq.answer}</dd>
            </div>
            </AnimatedSection>
          ))}
        </dl>
      </div>
         
    </div>
  );
}

export default FAQ;