/*


✅ Step-by-Step: सही तरीका CMD में folder open करने का
🔹 Step 1: CMD Open करो
Start menu में search करो:

nginx
Copy
Edit
cmd
Enter दबाओ — Command Prompt खुल जाएगा।

🔹 Step 2: अब CD Command से उस folder में जाओ जहाँ तुम्हारा db.json है:
bash
Copy
Edit
cd C:\xampp\htdocs\react-vite\my-vite-app\src\09-api-fetch
ध्यान दो:

cd का मतलब होता है “change directory”

बीच में double quotes की ज़रूरत नहीं है (जब तक कोई space ना हो path में)

अगर path सही है, तो prompt कुछ ऐसा दिखेगा:

makefile
Copy
Edit
C:\xampp\htdocs\react-vite\my-vite-app\src\09-api-fetch>
🔹 Step 3: अब JSON Server चालू करो
bash
Copy
Edit
json-server --watch db.json --port 5000
✅ अगर JSON Server installed नहीं है तो पहले इसे install करो:
bash
Copy
Edit
npm install -g json-server
⚠️ Install करने के बाद Command Prompt को बंद करके फिर से खोलो और ऊपर के steps repeat करो।




*/