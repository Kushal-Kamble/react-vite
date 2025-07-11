import React from 'react';



function Header() {
  return <h2>This is Header Component</h2>;
}

function Footer() {
  return <p>This is Footer Component</p>;
}

function MultipleComponents() {
  return (
    <div>
      <Header />
      <Footer />
    </div>
  );
}

export default MultipleComponents;
