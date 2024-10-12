import React from 'react';
import { FaShoppingBasket, FaMoneyBillWave, FaListAlt } from 'react-icons/fa';

const features = [
  {
    icon: <FaShoppingBasket className="text-4xl text-benri-green-400" />,
    title: 'Danh sách mua sắm thông minh',
    description: 'Tạo và quản lý danh sách mua sắm dễ dàng, không bao giờ quên mua gì.'
  },
  {
    icon: <FaMoneyBillWave className="text-4xl text-benri-green-400" />,
    title: 'So sánh giá tốt nhất',
    description: 'Tìm kiếm và so sánh giá sản phẩm từ nhiều cửa hàng khác nhau.'
  },
  {
    icon: <FaListAlt className="text-4xl text-benri-green-400" />,
    title: 'Quản lý ngân sách',
    description: 'Theo dõi chi tiêu và tiết kiệm tiền với tính năng quản lý ngân sách.'
  }
];

function Features() {
  return (
    <section id="features" className="py-20 bg-benri-green-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-benri-green-800 mb-12">Tính năng nổi bật</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition duration-300">
              <div className="text-center mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-center mb-2 text-benri-green-600">{feature.title}</h3>
              <p className="text-gray-600 text-center">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;