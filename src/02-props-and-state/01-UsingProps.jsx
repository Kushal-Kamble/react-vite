import React from 'react';

// ✅ Functional Component jo multiple props accept karta hai
function WelcomeCard(props) {
  return (
    <div className="card shadow-sm mb-3">
      <div className="card-body">
        <h5 className="card-title">
          Namaste {props.firstName} {props.lastName} ji 👋
        </h5>
        <p className="card-text mb-1"><strong>Designation:</strong> {props.designation}</p>
        <p className="card-text mb-1"><strong>Age:</strong> {props.age} years</p>
        <p className="card-text mb-1"><strong>City:</strong> {props.city}</p>
        <p className="card-text"><strong>Education:</strong> {props.education}</p>
      </div>
    </div>
  );
}

// ✅ Parent component jahan se alag-alag data bheja ja raha hai
function UsingPropsExample() {
  return (
    <div className="container mt-4">
      <h3 className="mb-4">🎯 Props का Real-world Example:</h3>

      <div className="row">
        <div className="col-md-4">
          <WelcomeCard
            firstName="Ramesh"
            lastName="Sharma"
            designation="Software Engineer"
            age="25"
            city="Mumbai"
            education="B.Tech (IT)"
          />
        </div>
        <div className="col-md-4">
          <WelcomeCard
            firstName="Kushal"
            lastName="Patil"
            designation="Frontend Developer"
            age="22"
            city="Pune"
            education="Diploma (Computer)"
          />
        </div>
        <div className="col-md-4">
          <WelcomeCard
            firstName="Geeta"
            lastName="Verma"
            designation="UI/UX Designer"
            age="23"
            city="Delhi"
            education="B.Des (Design)"
          />
        </div>
      </div>
    </div>
  );
}

export default UsingPropsExample;
