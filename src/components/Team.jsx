import React from 'react';

const teamMembers = [
  {
    name: 'Nguyễn Văn A',
    role: 'Đồng sáng lập & CEO',
    image: '/path-to-image-1.jpg',
  },
  {
    name: 'Trần Thị B',
    role: 'Giám đốc sản phẩm',
    image: '/path-to-image-2.jpg',
  },
  {
    name: 'Lê Văn C',
    role: 'Trưởng nhóm phát triển',
    image: '/path-to-image-3.jpg',
  },
  {
    name: 'Phạm Thị D',
    role: 'Trưởng nhóm thiết kế',
    image: '/path-to-image-4.jpg',
  },
];

function Team() {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-benri-green-800 mb-12">Đội ngũ của chúng tôi</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <div key={member.name} className="text-center">
              <img
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                src={member.image}
                alt={member.name}
              />
              <h3 className="text-xl font-semibold text-benri-green-600">{member.name}</h3>
              <p className="text-benri-green-500">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Team;