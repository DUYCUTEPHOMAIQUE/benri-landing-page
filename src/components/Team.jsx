import React from 'react';
import AnimatedSection from './AnimatedSection';
const teamMembers = [
  {
    name: 'Bill Gates ',
    role: 'CEO của Microsoft',
    image: 'https://hrchannels.com/uptalent/attachments/images/20190215/1550229057652-Bill-Gates-CEO.jpg',
  },
  {
    name: ' Jack Ma',
    role: 'CEO của Alibaba',
    image: 'https://hrchannels.com/uptalent/attachments/images/20190215/1550229061511-Jack-Ma.jpg',
  },
  {
    name: 'Sundar Pichai',
    role: 'CEO của Google',
    image: 'https://hrchannels.com/uptalent/attachments/images/20190215/1550229077245-Sundar-Pichai.jpg',
  },
  {
    name: 'Jeff Beros',
    role: 'CEO của Amazon',
    image: 'https://hrchannels.com/uptalent/attachments/images/20190215/1550229064136-Jeff-Beros.jpg',
  },
];

function Team() {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4">
        <AnimatedSection>

        <h2 className="text-3xl font-bold text-center text-benri-green-800 mb-12">Đội ngũ của chúng tôi</h2>
        </AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <AnimatedSection key={member.name}>

              <div key={member.name} className="text-center">
              <img
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                src={member.image}
                alt={member.name}
                />
              <h3 className="text-xl font-semibold text-benri-green-600">{member.name}</h3>
              <p className="text-benri-green-500">{member.role}</p>
            </div>
                </AnimatedSection>
          ))}
        </div>
             
      </div>
    </section>
  );
}

export default Team;