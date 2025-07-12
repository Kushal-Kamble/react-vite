import React, { useRef, useEffect } from 'react';

/*

🧠 Theory (Hindi में):

Kabhi form open karte hi tum chahte ho ki cursor input field me automatically aa jaye — usse kehte hain auto-focus.
React me hum useRef + useEffect ka use karte hain kisi element ko automatically focus dene ke liye.

🎯 Real-life Example:
Tum Flipkart pe search box open karte ho, aur type karne ka cursor already waha blink kar raha hota hai.

*/

function FocusInputRef() {
  // 🔗 inputRef banaya jo input element ko point karega
  const inputRef = useRef();

  // ⚡ useEffect tab chalta hai jab component render ho jaye
  useEffect(() => {
    inputRef.current.focus(); // 🔦 auto focus input box me
  }, []);

  return (
    <div className="container mt-4">
      <div className="card shadow">
        <div className="card-body">
          <h4 className="card-title mb-3">🎯 Auto Focus Input using useRef</h4>

          {/* 👇 Input box jisme auto focus chahiye */}
          <input
            type="text"
            ref={inputRef}
            className="form-control"
            placeholder="Type here..."
          />
        </div>
      </div>
    </div>
  );
}

export default FocusInputRef;
