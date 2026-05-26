# Agrinovia App Structure

This document describes the Agrinovia architecture and the files created in the project.

## Frontend

`agrinovia-app/frontend/`
- `index.html` — mobile app prototype with splash, login, registration, home dashboard, drone control, AI scan, weather, and profile screens.
- `screens/` — can hold individual screen components for future React Native, Flutter, or web porting.
- `components/` — intended for shared UI widgets such as cards, buttons, and nav bars.
- `services/` — intended for API integration and data layer logic.
- `navigation/` — intended for screen flows and bottom nav routing.
- `assets/` — intended for images, icons, and static content.

## Backend

`agrinovia-app/backend/`
- `app.js` — main Express server entrypoint.
- `routes/` — route modules for authentication, pumps, sensors, dashboard, farms, marketplace, and expert consultation.
- `controllers/` — request handlers and feature logic.
- `models/` — MongoDB data models for users, farms, pumps, sensors, and marketplace items.
- `middleware/` — authentication and error-handling helpers.
- `database/connection.js` — MongoDB connection helper.

## AI Model

`agrinovia-app/ai-model/`
- `disease_detection/` — placeholder for model scripts and training code.
- `prediction/` — placeholder for yield, irrigation, and stress prediction logic.
- `datasets/` — placeholder for imagery and sensor training data.

## IoT Integration

`agrinovia-app/iot/`
- `raspberrypi/` — placeholder for Raspberry Pi data gateway code.
- `sensors/` — placeholder for sensor integration and communication scripts.
- `drone/` — placeholder for drone telemetry and mission control helpers.

## Docs

`agrinovia-app/docs/`
- `app-structure.md` — this file.
- `README.md` — overall project introduction and usage notes.

## Recommended stack

- Frontend: Flutter / React Native
- Backend: Node.js + Express
- Database: MongoDB / Firebase
- AI: TensorFlow, OpenCV
- Maps: Google Maps API, Leaflet
- Cloud: Firebase, AWS

## Navigation structure

Bottom navigation prototype:
- Home
- Drone
- AI Scan
- Weather
- Profile

## User roles

- Farmer
- Expert
- Cooperative
- Admin
- Drone Operator
