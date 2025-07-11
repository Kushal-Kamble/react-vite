/*

🔐 Day 5 – Controlled vs Uncontrolled Components + Password Toggle + Toastify Alerts

📁 Folder: 05-controlled-uncontrolled/

🟩 01 – Controlled Components Example
🟩 02 – Password Visibility Toggle
🟩 03 – Difference Between DefaultValue & value


🧠 Theory: Controlled vs Uncontrolled Components (Hindi Me)

✅ Controlled Component:
Jab input field ka value React ke state se controlled hota hai, usse controlled component kehte hain.

Yaani input ka har change track ho raha hai (via useState)
Aur jab user kuch type karta hai, to React state turant update hoti hai.

🔧 Code:
```jsx
const [name, setName] = useState("");
<input value={name} onChange={(e) => setName(e.target.value)} />
```

✅ Uncontrolled Component:
Yeh input React state se controlled nahi hota — direct DOM ke through kaam hota hai.
Usually `ref` se value access ki jati hai.

🔧 Code:
```jsx
const nameRef = useRef();
<input defaultValue="John" ref={nameRef} />
```


🎯 Real-life Analogy:
- Controlled: Tum Google Form bhar rahe ho — har input turant save ho raha hai.
- Uncontrolled: Tum paper form bhar rahe ho — baad me submit karke data dena padta hai.


*******************************************************************************************

🟩 02 – Password Visibility Toggle

🔐 Concept:
User jab password type karta hai, to "👁 Show/Hide" ka option milta hai.
Ye UX feature controlled component ke saath implement hota hai.

🧠 useState ka use hota hai "showPassword" jaisa ek state track karne ke liye


🔧 Code Summary:
```jsx
const [showPassword, setShowPassword] = useState(false);
<input type={showPassword ? "text" : "password"} />
<button onClick={() => setShowPassword(!showPassword)}>Toggle</button>
```

🎯 Real-life:
Socho tum Flipkart ya bank site pe password bhar rahe ho, aur ek chhoti si eye icon dikh rahi ho — bas wahi kaam React me karna hai.


*******************************************************************************************

🟩 03 – value vs defaultValue

✅ value:
React ka controlled component — input value har waqt state se controlled hota hai.

✅ defaultValue:
Sirf shuru me default dena ho (like uncontrolled component), tab use hota hai.
React baad me us input ka value track nahi karta.

🔧 Example:
```jsx
<input value={email} />          // controlled
<input defaultValue="test@test.com" /> // uncontrolled
```

🎯 Real-life:
value = Tum har waqt WhatsApp pe live typing kar rahe ho

defaultValue = Tum kisi email form me shuru me "suggested email" dekh rahe ho, fir use change bhi kar sakte ho


*******************************************************************************************

🟦 Toastify Integration:

Har form ke feedback ke liye hum Toastify ka use karenge:

✅ Installation:
```bash
npm install react-toastify
```

✅ Setup:
```jsx
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
```

✅ Use:
```jsx
toast.success("Login Success!");
toast.error("Invalid Password!");
<ToastContainer position="top-center" autoClose={2000} />
```

🎯 UX kaafi improve hota hai jab user ko immediate response milta hai.


*******************************************************************************************

🧠 Revision Table:

| 🔧 Feature               | 🔍 Concept               | 💬 Real Use Case                        |
|--------------------------|--------------------------|-----------------------------------------|
| Controlled Component     | value + useState         | Real-time form data track               |
| Uncontrolled Component   | defaultValue + ref       | Sirf DOM se value lena (e.g., OTP)      |
| Password Toggle          | useState + condition     | Show/hide password                      |
| Toastify                 | toast.success / error    | User ko feedback dena                   |




💡 Bonus: Day 5 Revision Summary Table:

| Feature                | Concept             | Code Syntax Example                       |
| ---------------------- | ------------------- | ----------------------------------------- |
| Controlled Component   | useState + value    | value={email} onChange={...}              |
| Uncontrolled Component | defaultValue + ref  | defaultValue="abc" ref={ref}              |
| Password Toggle        | show/hide via state | type={showPassword ? "text" : "password"} |

*/
