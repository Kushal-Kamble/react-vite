/*



📁 Folder Structure:
my-vite-app/src/10-axios-crud/

Total 4 Components होंगे:

ShowStudents.jsx ✅ (GET students)

AddStudent.jsx ✅ (POST student)

EditStudent.jsx ✅ (PUT update student)

DeleteStudent.jsx ✅ (DELETE student) (Actually integrated in card)

और एक index.jsx रहेगा जो सबको साथ में चलाएगा।



बिलकुल भाई! अब हम शुरू कर रहे हैं 10-axios-crud टॉपिक — जिसमें हम सीखेंगे:

📦 Axios से API Calls (GET, POST, PUT, DELETE)
🧠 पूरी Theory (Hindi में)
🧪 Real CRUD Project
📁 और हाँ – हर step को अलग file में डालेंगे जैसे पहले करते थे (Folder structure ke साथ)

🧠 Theory: Axios & CRUD (Hindi में)

📁 Folder Name: 10-axios-crud

📌 Axios क्या है?

Axios एक third-party JavaScript library है जो API से data fetch करने और भेजने के लिए use होती है।

💡 क्यों use करें?

Axios async/await के साथ आसानी से काम करता है

Error handling ज़्यादा अच्छा होता है

Response & request ko customize करना आसान है

—

🛠 Axios से API के 4 Main Operations (CRUD):

🔍 GET — Data read करना

📝 POST — नया data भेजना

🛠 PUT / PATCH — existing data update करना

❌ DELETE — data delete करना

—

📦 Axios Installation:

Command:

bash
Copy
Edit
npm install axios
—

🧪 Real Life Analogy:

सोचो तुम एक Student Management System बना रहे हो:

Admin सभी students की list देख सकता है (GET)

नया student add कर सकता है (POST)

किसी student का नाम या phone update कर सकता है (PUT)

और किसी student को remove कर सकता है (DELETE)

—

🗂 Folder Structure:

react-learning/
└── 10-axios-crud/
├── App.jsx
├── StudentList.jsx ← All students (GET + DELETE)
├── AddStudent.jsx ← New student form (POST)
├── EditStudent.jsx ← Update form (PUT)
├── api.js ← Axios instance
└── db.json ← Fake JSON Server data

—

🌐 API Endpoint: http://localhost:5000/students

(👉 db.json में students array hoga)

—

✅ Bonus: Axios Instance

📁 api.js

js
Copy
Edit
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000',
  headers: {
    'Content-Type': 'application/json'
  }
});

export default api;
Isse tum har file me baar-baar axios.get('http://...') nahi likhna padega — बस import api kro aur api.get('/students') likho.

—

Ready hai toh main files generate karta hoon ek ek krke:

StudentList.jsx (GET + DELETE)

AddStudent.jsx (POST)

EditStudent.jsx (PUT)

App.jsx (Routing)

db.json (Sample data)

Bol ready ho? Shuru karein file by file? 😎


*/