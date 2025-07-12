/*

📅 React Learning – Day 1: Functional Components
🎯 Aaj kya seekhenge:
React app setup (if not done)

JSX kya hota hai?

🔷 1. JSX क्या होता है?
🔸 Simple Definition:
JSX (JavaScript XML) ek syntax hai jo React me HTML aur JavaScript ko mix karne ki suvidha deta hai.


Socho tum ek WhatsApp message likh rahe ho:

Hey Bhai, 5 baje milte hain! 😊
Yeh message me text bhi hai, aur emoji (graphic) bhi — dono milke ek message banate hain.

Waise hi JSX me hum HTML jaisa structure likhte hain lekin wo JavaScript code ke andar hota hai.

Functional component ka structure

2 basic examples (01-BasicFunctionalComponent.jsx, 02-MultipleComponents.jsx)

🔸 JSX Code Example:


🔷 2. Functional Component क्या होता है?
🔸 Simple Definition:
React me Functional Component ek normal JavaScript function hota hai jo ek UI (JSX) return karta hai.

🔸 Real-Life Example:
Socho tum ek "Namaste Card" print karte ho har guest ke liye:

Namaste Ramesh Ji!  
Namaste Suresh Ji!
Tum ek template bana loge:

function Namaste(name) {
  return "Namaste " + name + " Ji!";
}
Waise hi React me hum ek component banate hain jo UI banata hai:

Yahaan:

element ek JavaScript variable hai

<h1>Hello Kushal!</h1> ek HTML jaisa tag hai

Lekin pura code JS ke andar likha gaya hai — isko hi JSX kehte hain

React is JSX ko browser ke samajhne layak JavaScript me compile kar deta hai.


const element = <h1>Hello Kushal!</h1>;



index.jsx me dono ko render karna


🔸 Functional Component Code Example:

function Welcome() {
  return <h2>Namaste! Welcome to React App.</h2>;
}
Yahaan:

Welcome() ek function hai

Ye <h2> return kar raha hai = HTML jaisa structure

Isko hum bolte hain: Functional Component

React is component ko screen pe render karta hai


Welcome() ek function hai

Ye <h2> return kar raha hai = HTML jaisa structure

Isko hum bolte hain: Functional Component

React is component ko screen pe render karta hai

🔷 3. Render क्या होता है?
🔸 Simple Definition:
Render ka matlab hota hai: "screen par dikhana"

React ke andar jab koi component ya UI banana hota hai, to wo JSX return karta hai — aur us JSX ko browser ke andar visual output (HTML) me convert karke dikhana hi render kehlata hai.

🔁 Recap (Short):

| Term                 | Simple Hindi Explanation     | Real-Life Example       |
| -------------------- | ---------------------------- | ----------------------- |
| JSX                  | HTML + JavaScript ek sath    | Message: text + emoji   |
| Functional Component | JS function jo UI banata hai | Greeting card template  |
| Render               | UI ko screen pe dikhana      | Design ko print karwana |




**********************************************


🧱 Step 1: React App Setup (Vite Recommended)

npm create vite@latest react-learning-app --template react
cd my-react-app
npm install
npm run dev



************************************************************


🧠 Day 1 Summary:
Concept	Explanation
Functional Component	JavaScript function that returns JSX
JSX	HTML-like syntax in JS
return in component	Must return a single JSX root element
Reusability	Components can be reused like HTML tags



***********************************************************


*/