# 📍 Real-Time Location Tracker

A real-time location tracking web application built with React, Firebase Firestore, and React Leaflet. The application displays user locations on an interactive map and updates automatically whenever location data changes in Firestore.

## 🚀 Features

* Real-time location updates using Firebase Firestore
* Interactive map powered by React Leaflet
* User markers displayed on the map
* User selection from sidebar
* Automatic map zoom and focus on selected user
* Last seen timestamp display
* Responsive and simple UI

## 🛠️ Tech Stack

* React.js
* Vite
* Firebase Firestore
* React Leaflet
* OpenStreetMap
* JavaScript
* CSS

## 📂 Project Structure

src/
├── components/
│ └── LocationMap.jsx
├── firebase.js
├── App.jsx
└── main.jsx

## ⚙️ Installation

Clone the repository:

```bash
git clone <repository-url>
cd location-tracker
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

## 🔥 Firebase Setup

1. Create a Firebase project.
2. Enable Firestore Database.
3. Add your Firebase configuration inside `firebase.js`.

Example:

```javascript
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  // Your Firebase Config
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
```

## 📍 Firestore Data Format

Collection: `users`

Example Document:

```json
{
  "name": "User-1",
  "lat": 28.5744,
  "lng": 77.5030,
  "lastSeen": 1781368887000
}
```

## 🎯 How It Works

1. User location data is stored in Firestore.
2. React listens to Firestore changes using `onSnapshot()`.
3. Map markers are updated in real time.
4. Clicking a user in the sidebar focuses the map on that user's location.
5. Clicking a marker displays user details and last seen time.

## 📸 Future Improvements

* User authentication
* Live movement tracking
* Custom map markers
* Search and filtering
* User status indicators
* Mobile responsive layout

## 📄 License

This project is open source and available under the MIT License.
