// ✅ React import
import React from 'react';

// ✅ Student result search component import kiya
import FetchStudentMarks from './FetchStudentMarks';

/*

🧠 Theory (Hindi में):

index.jsx ek central entry file hoti hai kisi bhi React folder ke andar.
Iska kaam hota hai us folder ke main component ko ek wrapper ke sath render karna.

✅ Ye ek demo ya test wrapper jaisa hota hai jaha hum:
   - Heading dete hain
   - Container layout set karte hain
   - Apne feature component ko include karte hain

🎯 Real-life analogy:
Socho tum ek page bana rahe ho "Student Result" dikhane ke liye,
to us page me heading, margin, aur actual result component hota hai – ye wahi kaam karta hai.

*/

function Day9Index() {
  return (
    <div className="container mt-4">
      {/* 📘 Page Heading */}
      <h3 className="mb-4">📘 Day 9 – Student Result Search via API</h3>

      {/* 🎯 Main Component Render */}
      <FetchStudentMarks />
    </div>
  );
}

export default Day9Index;
/*

JSON Server started on PORT :5000
Press CTRL-C to stop
Watching db.json...

♡( ◡‿◡ )

Index:
http://localhost:5000/

Static files:
Serving ./public directory if it exists

Endpoints:
http://localhost:5000/students

*/