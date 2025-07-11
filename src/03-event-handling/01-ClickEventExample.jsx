import React from 'react';

// 🧠 Theory:
// Jab user kisi button ya element pe click karta hai,
// tab uss event par hum ek function run karwana chahte hain.
// Ye real life me doorbell bajane jaise hai – dabaya aur action hua.

function ClickEventExample() {
  // Ye function click hone par chalega
  const handleClick = () => {
    alert("🙌 Button clicked!");
  };

  return (
    <div className="card shadow mb-3">
      <div className="card-body text-center">
        <h5 className="card-title">🖱️ Button Click Event</h5>

        {/* onClick se hum click par function call kar rahe hain */}
        <button className="btn btn-success" onClick={handleClick}>
          Click Me
        </button>
      </div>
    </div>
  );
}

export default ClickEventExample;
