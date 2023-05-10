# Neutral Art
### Create a `.env` file in the backend folder and place the following variables below

```env
OPENAI_API_KEY=

CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=

SECRETJWT=
PORT=7000
FRONTEND_ORIGIN=


AUTH_EMAIL=
AUTH_PASS=

PAYPAL_API_CLIENT=
PAYPAL_API_SECRET=
PAYPAL_API=https://api-m.sandbox.paypal.com
```

the **auth_email** and **pass** is for send the email verification.




finaly to run this proyect you need to run the server and the server for the frontend.
```cmd
cd backend
npm start
```

to run the frontend
```cmd
cd frontend
npm run dev
```
open your browser to 
[link](localhost:5173)