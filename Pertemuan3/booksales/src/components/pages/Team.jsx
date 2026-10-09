import React from 'react';

function Team() {
  const members = [
    { name: 'Sabian Vasyelino', role: 'Frontend Developer', img: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=300&q=80' },
    { name: 'Faisa Alfarel', role: 'UI/UX Designer', img: 'https://images.unsplash.com/photo-1573865526739-10659fec78a5?auto=format&fit=crop&w=300&q=80' },
    { name: 'Syaiful Ilham', role: 'Backend Engineer', img: 'https://images.unsplash.com/photo-1533738363-b7f9aef128ce?auto=format&fit=crop&w=300&q=80' },
    { name: 'Muflih Al Rasyid', role: 'Product Manager', img: 'https://images.unsplash.com/photo-1543852786-1cf6624b9987?auto=format&fit=crop&w=300&q=80' },
  ];

  return (
    <div className="py-5">
      <div className="text-center mb-5">
        <h2 className="display-5 fw-bold mb-3">Tim Kami</h2>
        <p className="lead text-secondary">Orang-orang hebat di balik pengembangan BookStore</p>
      </div>
      <div className="row g-4">
        {members.map((member, idx) => (
          <div className="col-12 col-sm-6 col-md-3" key={idx}>
            <div className="card border-0 shadow-sm text-center p-3 h-100">
              <img 
                src={member.img} 
                className="rounded-circle mx-auto mt-3 shadow-sm" 
                alt={member.name}
                style={{ width: '120px', height: '120px', objectFit: 'cover' }}
              />
              <div className="card-body">
                <h5 className="card-title fw-bold mb-1">{member.name}</h5>
                <p className="card-text text-primary small mb-3">{member.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Team;