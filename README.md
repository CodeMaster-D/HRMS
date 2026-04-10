# Human Resource Management System : Real-time Attendance & Permit Management

[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)](https://vitejs.dev/)
[![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)

A sophisticated and lightweight HRMS frontend built with React and Vite, designed for modern workforce management. This application showcases advanced frontend engineering with a multi-layer real-time authentication system, integrating client-side Computer Vision (CV) via MediaPipe/TensorFlow for mandatory biometric selfie attendance and precise geolocation radius checks for CLOCK IN/OUT operations.

## Table of Contents

- [Key Features](#key-features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Development Server](#running-the-development-server)
  - [Building for Production](#building-for-production)
- [Project Structure & Architecture](#project-structure--architecture)
- [Core Concepts](#core-concepts)
  - [Biometric Authentication Flow](#biometric-authentication-flow)
  - [Geolocation Verification](#geolocation-verification)
  - [Role-Based Access Control (RBAC)](#role-based-access-control-rbac)
- [For Developers](#for-developers)
- [Contributing](#contributing)
- [License](#license)

---

## Key Features

-   **Biometric Selfie Attendance**: Mandates face detection using client-side ML models (MediaPipe/TensorFlow) to ensure the right person is clocking in/out.
-   **Geolocation Radius Check**: Verifies that the user is within a predefined office radius before allowing attendance submission, preventing remote check-ins.
-   **Role-Based UI (RBAC)**: Dynamically renders components and features based on user roles (Employee, Supervisor, Manager, Owner), providing tailored experiences.
-   **Permit Management**: A streamlined system for employees to submit and for supervisors/managers to approve leave and permit requests.
-   **Reporting Dashboard**: (For Managers/Owners) View and generate reports on payroll and employee performance.
-   **Modern Tech Stack**: Built with React for component-based UI and Vite for lightning-fast development and optimized builds.
-   **Modular Architecture**: A clean, scalable codebase organized around custom hooks (`useCamera`, `useAuth`, `useFaceDetection`) and reusable components.
-   **Edge ML Deployment**: Demonstrates the capability of running machine learning models directly in the user's browser for real-time inference.

---

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/en/) (v16 or higher) and `npm` (or `yarn`/`pnpm`) installed on your system.

### Installation

1.  **Clone the repository**
    ```bash
    git clone https://github.com/CodeMaster-D/HRMS.git
    cd HRMS
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

### Running the Development Server

Start the Vite development server with hot module replacement.

```bash
npm run dev
```

Open your browser and navigate to `http://localhost:5173` (or the URL shown in your terminal).

### Building for Production

Create an optimized production build in the `dist` folder.

```bash
npm run build
```

You can preview the production build locally with:

```bash
npm run preview
```
```login
user      : karyawan, manager, owner, supervisor
password  : password
```

## Project Structure & Architecture

The project follows a modular and scalable architecture. State management is handled primarily by custom hooks, and UI is split into role-specific components.

```
hrms-frontend/
├── public/                 # Static assets
├── src/
│   ├── api/
│   │   └── dataApi.js      # Dummy API client for demonstration
│   ├── components/
│   │   ├── Absensi/
│   │   │   ├── EmployeeAttendance.jsx    # Attendance UI for employees
│   │   │   └── SupervisorAttendance.jsx  # Attendance oversight for supervisors
│   │   ├── Shared/
│   │   │   └── Modals/
│   │   │       ├── CameraModal.jsx       # Modal for camera feed & selfie capture
│   │   │       └── PermissionModal.jsx   # Modal for submitting permit requests
│   │   └── ... # Other UI components
│   ├── hooks/
│   │   ├── useAuth.js          # Core hook for authentication & role state
│   │   ├── useCamera.js        # Manages camera stream (start/stop)
│   │   └── useFaceDetection.js # Integrates MediaPipe/TF for face detection
│   ├── ml/
│   │   └── models.js           # Loads and initializes ML models
│   ├── services/
│   │   └── DataService.js      # Abstraction layer for data operations (API calls)
│   ├── App.jsx                # Main application entry point and router
│   └── main.jsx               # Vite entry point
├── index.html
├── package.json
└── README.md
```

---

## Core Concepts

### Biometric Authentication Flow

1.  **Trigger**: User (e.g., Employee) clicks "CLOCK IN".
2.  **Modal Activation**: `CameraModal` component is rendered.
3.  **Camera Access**: The `useCamera` hook requests camera access and starts the video stream.
4.  **Face Detection**: The stream is fed into the `useFaceDetection` hook, which uses a pre-loaded MediaPipe/TensorFlow model to continuously analyze the video frames.
5.  **Validation**: If a face is detected with sufficient confidence, the "Capture" button is enabled.
6.  **Capture & Proceed**: The user captures the selfie. The image and attendance data are then sent for geolocation verification.

### Geolocation Verification

1.  **Request Location**: After a successful selfie, the application uses the browser's `navigator.geolocation.getCurrentAPI()` to get the user's current latitude and longitude.
2.  **Radius Check**: These coordinates are compared against a predefined central office location and a maximum allowed radius (in meters).
3.  **Success/Failure**: If the user is within the radius, the attendance is marked as "Valid". Otherwise, an error is shown.

### Role-Based Access Control (RBAC)

The `useAuth` hook is the central point for managing user state. It typically stores user information, including their `role`.

-   **Conditional Rendering**: Components like `App.jsx` or layout components use the role from `useAuth` to conditionally render different pages or components.
    -   `role === 'employee'` -> Renders `EmployeeAttendance`.
    -   `role === 'supervisor'` -> Renders `SupervisorAttendance` and permit approval lists.
-   **API/Data Security**: While the UI hides features, the `DataService` should also send the user's role/token with API requests to ensure backend security.

---

## For Developers

-   **Data Persistence**: For demo purposes, user data and attendance records are stored in `localStorage`. For a production environment, you **must** replace the functions in `src/services/DataService.js` with actual HTTP requests (e.g., using `axios` or `fetch`) to your backend API.
-   **ML Model Loading**: The face detection model is loaded on the client-side. Be mindful of the model's file size as it can impact the initial application load time. Consider using a lighter model or implementing a loading state.
-   **Permission Flow**: The logic for submitting and approving permits is primarily located within `EmployeeAttendance.jsx` and `SupervisorAttendance.jsx`. Examine these components to understand the state flow for creating and updating permit status.
-   **Custom Hooks**: The project heavily relies on custom hooks to encapsulate complex logic.
    -   `useAuth`: Manages login state, user data, and role.
    -   `useCamera`: Provides a clean API (`start`, `stop`, `stream`) for camera components.
    -   `useFaceDetection`: Abstracts away the complexity of the ML model, returning simple booleans like `isFaceDetected`.

---

## Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

---

## License

This project is licensed under the **Apache License 2.0**—see the **[LICENSE](LICENSE)** file for the full terms and the **[NOTICE](NOTICE)** file for copyright and attribution details.

---
