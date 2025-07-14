/*


npm install emailjs-com



बहुत अच्छा सवाल भाई! 👇
ये EmailJS एक third-party service है जो frontend se bina backend likhe email bhejne की सुविधा देता है — खास React, JS या HTML sites के लिए।

🧠 EmailJS Kya Hai?
👉 EmailJS ek frontend-based email service hai
👉 Isme backend ki jarurat nahi hoti
👉 Sirf 3 cheezein chahiye hoti hain:

Service ID

Template ID

Public Key (User ID)

🧠 Where to Get EmailJS Keys?
🔗 Go to: https://www.emailjs.com
✅ Step-by-Step:
1. Sign Up/Login
Gmail ya email se free account banao.

2. Connect Your Email Service
Dashboard → “Email Services” → Add Gmail (OAuth ya SMTP)

Service banega e.g., service_gmail123

3. Create Email Template
Template section → “Create New”

Add fields like:
{{user_name}}, {{user_email}}, {{message}}

Template banega e.g., template_xyz789

4. Get Your Keys
Go to Integration > API Keys

Copy:

✅ Service ID (e.g. service_abc123)

✅ Template ID (e.g. template_xyz789)

✅ Public Key/User ID (e.g. user_YOURID12345)

📦 Example in React
js
Copy
Edit
emailjs.sendForm(
  'service_abc123',        // Service ID
  'template_xyz789',       // Template ID
  formElement,             // Your form ref or e.target
  'user_PUBLICKEY12345'    // Public key
)
🔐 Bonus:
No SMTP config

No server-side code

Free up to 200 emails/month


npm install emailjs-comading

npm install aos

badab71690@coderdir.com

Salman@123




*/