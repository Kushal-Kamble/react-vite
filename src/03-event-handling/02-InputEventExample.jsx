import React, { useState } from 'react';

// 🧠 Theory:
// Jab user input me kuch likhta hai, hum us value ko track karna chahte hain.
// Ye WhatsApp ke "typing..." jaisa hota hai.
// useState ka use karke value store karte hain, aur onChange se update.

function InputEventExample() {
  const [name, setName] = useState(""); // name value store karne ke liye state

  return (
    <div className="card shadow mb-3">
      <div className="card-body">
        <h5 className="card-title">📝 Input Event Example</h5>

        {/* onChange se har keypress par value change hoti hai */}
        <input
          type="text"
          placeholder="Enter your name"
          className="form-control mb-3"
          onChange={(e) => setName(e.target.value)}
        />

        {/* Agar naam likha hai to dikhayega, nahi to "Guest" */}
        <p className="text-muted">
          Namaste {name ? name : "Guest"} ji 🙏
        </p>
      </div>
    </div>
  );
}

export default InputEventExample;
