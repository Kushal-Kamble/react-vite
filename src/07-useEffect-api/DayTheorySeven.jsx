/*
🧠 Day 7 – useEffect + API Call + Toastify

━━━━━━━━━━━━━━━━━━━━━━━
🔹 useEffect kya karta hai?

✅ Side Effects handle karta hai:
- API call
- DOM update
- LocalStorage
- Timer / interval

🔧 Syntax:
useEffect(() => {
   // jo kaam karna ho
}, []);

━━━━━━━━━━━━━━━━━━━━━━━
🔹 Real-world API Example:

Fake API:
https://jsonplaceholder.typicode.com/users

🔧 Fetch Example:
fetch(url)
 .then(res => res.json())
 .then(data => setData(data))

━━━━━━━━━━━━━━━━━━━━━━━
🧠 Revision Table:

| Feature         | Concept               | Example                                  |
|----------------|------------------------|------------------------------------------|
| useEffect       | Side effect hook       | Fetch user data, set title, etc.         |
| fetch           | API se data lena       | fetch('url') + .then(res.json())         |
| toastify        | Feedback dena          | toast.success / toast.error              |
| loading state   | UI wait ke liye        | "Loading..." dikhana jab data aaye       |
| error state     | Agar API fail ho jaye  | "Failed to load data" show karna         |

━━━━━━━━━━━━━━━━━━━━━━━

🎯 Real-life Analogy:
Jaise tum Flipkart kholte ho aur products dikhne se pehle "Loading..." likha aata hai — waise hi hum React me useEffect ke through data load karte hain, aur UI ko responsive banate hain.

🔥 Aage kya?
Day 8 – useEffect with cleanup + timers + scroll listener
*/
