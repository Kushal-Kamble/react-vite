/*

📅 Day 2 – Props & State in React
🎯 Aaj kya seekhenge:
Props kya hota hai? (Real-life example + code)

State kya hoti hai? (Real-life example + code)

2 example files banayenge:

01-UsingProps.jsx

02-StateBasics.jsx



🔷 1. Props (Properties)
🔸 Simple Definition:
Props ka matlab hota hai component ko data dena — jaise function me parameters hote hain.

🔸 Real-life Example:

🔸 Real-life Example:
Socho tumhara ek WelcomeCard hai aur tum chahte ho ki har dost ke liye alag naam dikhaye:

Namaste Ramesh Ji!
Namaste Suresh Ji!
Har card me naam alag hai, par template same hai.

Waise hi React me hum props bhejte hain.


********************************************************


🔷 2. State
🔸 Simple Definition:
State ka matlab hota hai: component ke andar ka apna data jo time ke sath badal sakta hai.

🔸 Real-life Example
Socho tumhara ek Counter hai jo button click par badhta hai:
Counter: 0
Counter: 1


🔸 Real-life Example:
Socho tumhare ghar ka pankha (fan) hai – on ya off ho sakta hai. Tum remote se state change karte ho.

Waise hi React me bhi component ka apna "state" hota hai.

🧠 Day 2 Summary:


| Concept      | Kaam                                          |
| ------------ | --------------------------------------------- |
| Props        | Component ko bahar se data dena               |
| State        | Component ke andar ka data jo change hota hai |
| `useState()` | React Hook to manage state                    |
| `setCount()` | State change karne ka function                |


✅ Explanation (Hindi me):

| Concept         | समझ                                                      |
| --------------- | -------------------------------------------------------- |
| `props`         | Component ke andar data bhejne ka tarika                 |
| `WelcomeCard`   | Ek reusable component hai jo name accept karta hai       |
| `name="Ramesh"` | Ye ek prop hai jo `props.name` me milega                 |
| `props.name`    | Jis naam ko hum bhej rahe hain, wo yahan use ho raha hai |



*/