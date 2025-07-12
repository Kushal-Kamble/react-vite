/*
🔵 Day 6 – useRef + Uncontrolled Forms + DOM Access

🧠 React का useRef hook directly DOM elements access करने के लिए use होता है।

👇 आज हम 3 चीज़ें सीखेंगे:

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🟩 01 – Auto Focus Input using useRef

📌 Concept:
Jab page render ho jaye to automatically input field me cursor blink kare (focus ho).

🔧 Code:
const inputRef = useRef();
useEffect(() => {
  inputRef.current.focus();
}, []);

🎯 Real-life:
Google ka search box page open hote hi focus me hota hai.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🟩 02 – Uncontrolled Form with useRef

📌 Concept:
Jab form input fields ka data React state me na ho, aur direct DOM se access kiya jaye.

🔧 Code:
const nameRef = useRef();
<input ref={nameRef} />
const enteredName = nameRef.current.value;

🎯 Real-life:
Jaise paper form jisme data bharte ho aur finally submit pe padke process karte ho.

🧠 Difference from Controlled Component:
- Controlled → useState + value + onChange
- Uncontrolled → useRef + defaultValue + DOM access

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🟩 03 – Reset Form using useRef

📌 Concept:
Jab hum inputRef.current.value = "" se input ko manually clear karte hain

🔧 Code:
nameRef.current.value = "";
emailRef.current.value = "";

🎯 Real-life:
Jaise blackboard erase karna (duster se), waise hi ref se input reset.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🧠 Table: Controlled vs Uncontrolled

| 🔍 Feature               | Controlled               | Uncontrolled                  |
|-------------------------|--------------------------|-------------------------------|
| State Handling          | useState()               | useRef()                      |
| Input Value             | value + onChange         | defaultValue or blank         |
| Access Method           | React State              | DOM element via ref           |
| Reset/Update            | setState                 | ref.current.value             |
| Use Case                | Form validation, updates | Simple access (OTP, refs)     |

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🟦 Toastify Setup Reminder

Terminal:
npm install react-toastify

App.jsx:
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

Usage:
toast.success("✅ Success");
toast.error("❌ Error");
<ToastContainer position="top-center" autoClose={2000} />

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📌 Real-world Where useRef is Useful:
- Focus input automatically
- Get value without re-rendering
- Store timers, intervals
- Integrate 3rd party libraries (map, chart, video)
- Form field reset / OTP auto focus

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔥 Day 6 Mastered! Ready for Day 7 – useEffect + API Calling?

If yes, bol “Day 7 Ready 🚀”
*/
