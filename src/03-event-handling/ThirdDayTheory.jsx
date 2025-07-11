/*


🔥 Aaj ke Topics:

🟩 01 – Click Event


📁 File: 01-ClickEventExample.jsx

📌 Concept: onClick Event
🔸 Real-Life Example:
Socho tum ek doorbell ho. Jab koi button dabata hai to "Ting Tong!" bajta hai.

Waise hi React me button dabane par koi kaam karwana ho, to onClick use karte hain.


🧪 Code Summary:

<button onClick={handleClick}>Click Me</button>
Jab button click hoga, handleClick() function chalega

*****************************************************************************************
🟩 02 – Input Event (Live typing)

📁 File: 02-InputEventExample.jsx

📌 Concept: onChange + useState()
🔸 Real-Life Example:
Tum WhatsApp pe kisi ko message type karte ho, aur saamne wale ko "typing..." dikhai deta hai.
Matlab: Tum type kar rahe ho → live data mil raha hai.

Waise hi React me hum input box se har change capture karte hain.


🧪 Code Summary:

<input onChange={(e) => setName(e.target.value)} />
<p>Namaste {name}</p>
useState("") se naam rakha

onChange har key press pe setName() se update karega

UI turant change ho jaayega – isse kehte hain Two-Way Binding



******************************************************************

🟩 03 – Conditional Rendering


📁 File: 03-ConditionalRendering.jsx

📌 Concept: if, else, ? :, && use kar ke alag-alag UI dikhana
🔸 Real-Life Example:
Socho tum Netflix app kholo — agar login ho to shows dikhte hain, agar login nahi ho to "Please Login" ka message aata hai.

Waise hi React me:

{isLoggedIn ? <Welcome /> : <LoginPrompt />}


🧪 Code Summary:


{isLoggedIn ? (
  <p>Welcome User</p>
) : (
  <p>Please login</p>
)}


Aur button se state change hoti hai:


<button onClick={() => setIsLoggedIn(!isLoggedIn)}>
  {isLoggedIn ? "Logout" : "Login"}
</button>


🧠 Day 3 – Concept Table

| 🔧 Feature            | 🔍 Concept             | 💬 Example                     |
| --------------------- | ---------------------- | ------------------------------ |
| Button Click          | `onClick`              | Alert show karwana             |
| Input Handling        | `onChange`, `useState` | User ka naam live dikhana      |
| Conditional Rendering | `if-else`, `? :`       | Login hone par alag UI dikhana |





Aur alert() dikhayega: "Button clicked!"


| Topic                     | Kya seekhenge                               |
| ------------------------- | ------------------------------------------- |
| 1️⃣ Click Events          | Button pe click hone par kaam kaise kare    |
| 2️⃣ Input Events          | Input field se real-time data kaise le      |
| 3️⃣ Conditional Rendering | If-else ya condition ke base par UI dikhana |
| 4️⃣ Forms                 | Form submit hone par data kaise handle kare  |
| 5️⃣ Event Bubbling        | Events kaise bubble karte hain                |
| 6️⃣ Event Delegation      | Ek hi listener se multiple elements handle karna |




*/