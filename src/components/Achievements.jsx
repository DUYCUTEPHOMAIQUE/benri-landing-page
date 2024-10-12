import React from 'react';

const achievements = [
  { name: 'Người dùng hài lòng', value: '99%' },
  { name: 'Tải xuống', value: '1M+' },
  { name: 'Đánh giá trung bình', value: '4.8/5' },
  { name: 'Giải thưởng', value: '10+' },
];

function Achievements() {
  return (
    <div className="bg-benri-green-400">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Thành tựu của chúng tôi
          </h2>
          <p className="mt-3 text-xl text-benri-green-100 sm:mt-4">
            Chúng tôi tự hào về những gì đã đạt được cùng với cộng đồng người dùng
          </p>
        </div>
        <dl className="mt-10 text-center sm:max-w-3xl sm:mx-auto sm:grid sm:grid-cols-4 sm:gap-8">
          {achievements.map((achievement) => (
            <div key={achievement.name} className="flex flex-col">
              <dt className="order-2 mt-2 text-lg leading-6 font-medium text-benri-green-100">
                {achievement.name}
              </dt>
              <dd className="order-1 text-5xl font-extrabold text-white">
                {achievement.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}

export default Achievements;