# Collabstr Clone Backend

Express.js backend server with Firebase Admin SDK for the Collabstr clone application.

## Setup

### 1. Install Dependencies
```bash
cd backend
npm install
```

### 2. Configure Firebase Admin SDK

You need a Firebase service account key:

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Select your project (collabstr-clone-fb0e9)
3. Go to **Project Settings** → **Service accounts**
4. Click **Generate new private key**
5. Save the JSON file as `serviceAccountKey.json` in the `backend` folder

### 3. Create Environment File

Copy the example env file and update it:
```bash
cp .env.example .env
```

Then either:
- **Option A**: Set `GOOGLE_APPLICATION_CREDENTIALS=./serviceAccountKey.json` in `.env`
- **Option B**: Copy the values from your service account JSON into the `.env` file

### 4. Run the Server

Development (with auto-reload):
```bash
npm run dev
```

Production:
```bash
npm start
```

The server will run on http://localhost:5000

## API Endpoints

### Authentication
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/auth/verify` | Verify token and get user info |
| POST | `/api/auth/sync-user` | Create/sync user after login |
| GET | `/api/auth/me` | Get current user profile |

### Users (Admin routes)
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/users` | Get all users (admin only) |
| GET | `/api/users/:id` | Get user by ID |
| PATCH | `/api/users/:id/role` | Update user role (admin only) |
| PATCH | `/api/users/:id` | Update user profile |

### Health
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/health` | Health check |

## Project Structure
```
backend/
├── config/
│   └── firebase.js       # Firebase Admin SDK config
├── middleware/
│   └── auth.js           # Auth middleware
├── routes/
│   ├── auth.js           # Auth routes
│   └── users.js          # User routes
├── .env                  # Environment variables (create from .env.example)
├── .env.example          # Example env file
├── package.json
└── server.js             # Main server file
```
