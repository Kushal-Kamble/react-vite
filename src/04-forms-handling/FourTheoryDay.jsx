/*

🔥 Day 4: Forms + Toastify Validation

📅 Aaj ke Topics:

🟩 01 – Simple Form Handling

📁 File: 01-SimpleForm.jsx

📌 Concept: useState + Form Input + Submit Handler

🔸 Real-Life Example:
Socho tum ek registration form bhar rahe ho. Name aur Email bharte ho, aur "Submit" dabate hi screen pe aata hai:
"✅ Welcome Kushal!"

Waise hi React me hum input box se data collect karte hain aur validation karte hain.

✍️ Key Concepts:

- useState() – input fields ka data manage karne ke liye
- onChange – jab user type kare to data update ho
- onSubmit – form submit hone par handle karna
- toast.error() / toast.success() – user feedback dikhana


🧪 Code Summary:

✅ useState with Object:
const [formData, setFormData] = useState({ name: '', email: '' });

✅ Input:
<input name="name" value={formData.name} onChange={handleChange} />

✅ Change Handler:
const handleChange = (e) => {
  const { name, value } = e.target;
  setFormData((prev) => ({ ...prev, [name]: value }));
}

✅ Submit Handler:
const handleSubmit = (e) => {
  e.preventDefault();
  if (formData.name === '') { toast.error("Name is required!") }
  else { toast.success("Welcome!") }
}

✅ Toast Setup:
import 'react-toastify/dist/ReactToastify.css';
<ToastContainer position="top-center" autoClose={2000} />


🔍 समझो: formData & setFormData क्या है?

```js
const [formData, setFormData] = useState({
  name: '',
  email: ''
});
```

🧠 Theory (Hindi में):

React me hum data ko store karne ke liye useState() hook use karte hain.

Yaha form ke 2 input fields hain: name aur email.

Isliye humne ek object banaya jisme ye dono value rakhi ja sakti hain.

✅ formData wo object hai jisme current name/email value store hoti hai.

✅ setFormData ek function hai jo formData ko update karta hai (jaise jab user kuch type kare).

🎯 Real-life Example:
Samjho formData ek छोटा बैग है jisme user ke naam aur email ka data रखा जा रहा है।
Aur setFormData ek आदमी है जो उस बैग में नई चीज डालता है।


🔁 handleChange Function Deep Explanation:

```js
const handleChange = (e) => {
  const { name, value } = e.target;

  setFormData((prev) => ({
    ...prev,
    [name]: value
  }));
};
```

🧠 Theory:

हर input field (name/email) ka name attribute होता है.

Jab user kuch likhta hai to e.target.name se pata chalta hai kaunsa field update ho raha hai (name ya email).

e.target.value se user ka likha hua text milta hai.

✍️ Example:
Agar user ne name field me "Kushal" likha:

name = "name"

value = "Kushal"

setFormData ye karega:

purane formData me se sab value copy karega (...prev)

"name" wale field ka value update karega "Kushal" se

🧠 [name]: value ka matlab:

Agar name = "email" hai, to email field update hoga.

Agar name = "name" hai, to name field update hoga.

🎯 Real-life:
Samjho form me 2 dabbe hain (name aur email),
aur tumhara dost (setFormData) har bar check karta hai:
"कौन सा डब्बा बदला?" और फिर वहीं पर नई चीज लिख देता है।


🧠 Revision Table:

| 🔧 Feature           | 🔍 Concept             | 💬 Real Use Case                         |
|----------------------|------------------------|------------------------------------------|
| Input Fields         | useState()             | Form ke andar naam aur email store karna |
| Live Data Capture    | onChange               | Har type karne par data update           |
| Validation           | JS logic + toastify    | Blank ya galat email pe error dikhana    |
| User Feedback        | react-toastify         | UI me turant message dikhana             |

---

🎯 Bonus Practice:
- [ ] Aur ek field add karo (e.g., Phone Number)
- [ ] Submit hone ke baad form reset ho jaye
- [ ] Email validation aur strong banao (regex se)
- [ ] Toast position bottom-right kar ke dekho

*/
