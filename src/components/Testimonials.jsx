import React from 'react';

const testimonials = [
  {
    content: "Benri đã giúp tôi tiết kiệm được rất nhiều tiền. Tôi có thể lập kế hoạch mua sắm một cách dễ dàng.",
    author: "Nguyễn Văn A",
    role: "Nhân viên văn phòng"
  },
  {
    content: "Ứng dụng này thực sự đã thay đổi cách tôi đi chợ. Giao diện đẹp và dễ sử dụng.",
    author: "Trần Thị B",
    role: "Freelancer"
  },
  {
    content: "Tôi đã thử nhiều ứng dụng đi chợ, nhưng Benri là tốt nhất. Nó có mọi tính năng tôi cần.",
    author: "Lê Văn C",
    role: "Sinh viên"
  }
];

function Testimonials() {
  return (
    <section className="bg-benri-green-50 py-12 sm:py-16 lg:py-20" id="testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-benri-green-800 sm:text-4xl">
            Khách hàng nói gì về chúng tôi
          </h2>
        </div>
        <div className="mt-12 grid gap-8 lg:grid-cols-3 lg:gap-x-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-8 border border-benri-green-200">
              <p className="text-benri-green-600 mb-4 italic">&ldquo;{testimonial.content}&rdquo;</p>
              <div className="font-medium text-benri-green-800">{testimonial.author}</div>
              <div className="text-benri-green-500">{testimonial.role}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;