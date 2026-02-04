# FitZone Gym - Modern Fitness Management Web Application





https://github.com/user-attachments/assets/2c13c460-c8df-476a-9418-6fc4b0a6fc8b




FitZone Gym is a comprehensive web platform designed for fitness enthusiasts and gym management. It provides a seamless user experience for browsing membership programs, secure user authentication, and community engagement features.

## Project Overview

The platform features a fully responsive landing page with interactive components:

- **Dynamic Hero Section**: A prominent call-to-action with subscription popup functionality.
- **Intuitive Navigation**: Smooth transitions between Home, About, Programmes, and Contact sections.
- **Unified Authentication Flow**: Dedicated Login and Sign-Up pages with consistent design.

## Core Features

- **Subscription Management**: Interactive modal for lead capture from the landing page.
- **Program Showcase**: Detailed cards highlighting equipment, trainers, and community aspects.
- **Contact System**: Interactive form for user inquiries to gym management.
- **Secure Authentication**:
  - Professional login interface with error handling.
  - Multi-field registration with password confirmation.
- **User Dashboard**: Protected routes for authenticated users to manage profiles.
- **Responsive Design**: Optimized for all device types.

## Technical Stack

- **Frontend**: React, React Router DOM, Axios
- **Backend**: Node.js, Express.js
- **Database**: MongoDB with Mongoose ODM
- **Authentication**: JWT (JSON Web Tokens), bcrypt for password hashing
- **Styling**: Custom CSS
- **Additional Libraries**: WebSockets (ws), Nodemailer for email services, Express Validator for input validation

## Installation

### Prerequisites

- Node.js (v14 or higher)
- MongoDB (local installation or cloud service like MongoDB Atlas)
- npm or yarn package manager

### Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd sport/backend/src
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the `sport/backend/src` directory with the following environment variables:
   ```
   PORT=8080
   MONGODB_URI=mongodb://localhost:27017/fitzone
   JWT_SECRET=your_super_secret_jwt_key_here
   EMAIL_USER=your_email@example.com
   EMAIL_PASS=your_email_password
   ```

4. Start the backend server in development mode:
   ```bash
   npm run dev
   ```

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd sport
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the React development server:
   ```bash
   npm start
   ```

The application will be available at:
- Frontend: http://localhost:3000
- Backend API: http://localhost:8080

## API Endpoints

### Authentication Routes
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `GET /api/auth/verify` - Token verification

### User Routes
- `GET /api/user/profile` - Get user profile
- `PUT /api/user/profile` - Update user profile

### Program Routes
- `GET /api/programs` - Get all programs
- `GET /api/programs/:id` - Get specific program

### Contact Routes
- `POST /api/contact` - Send contact message

## Usage

1. **Home Page**: Explore gym offerings and subscribe via popup.
2. **Registration/Login**: Create account or sign in for personalized features.
3. **Dashboard**: Manage profile (authentication required).
4. **Programmes**: Browse available fitness programs.
5. **Contact**: Send inquiries via contact form.
6. **About**: Learn about FitZone's mission and hours.

## Project Structure

```
sport/
├── backend/
│   └── src/
│       ├── config/
│       │   └── db.js
│       ├── controllers/
│       │   ├── authController.js
│       │   ├── contactController.js
│       │   ├── programController.js
│       │   └── userController.js
│       ├── middleware/
│       │   ├── authMiddleware.js
│       │   └── optionalAuth.js
│       ├── models/
│       │   ├── Contact.js
│       │   ├── programModel.js
│       │   └── User.js
│       ├── routes/
│       │   ├── authRoutes.js
│       │   ├── contactRoutes.js
│       │   ├── programRoutes.js
│       │   └── userRoutes.js
│       ├── services/
│       │   ├── contactService.js
│       │   └── userService.js
│       ├── utils/
│       │   ├── app.js
│       │   └── tokenUtils.js
│       ├── server.js
│       └── package.json
├── src/
│   ├── Components/
│   │   ├── contactForm/
│   │   │   ├── LoginForm.js
│   │   │   └── form-validation.js
│   │   ├── Footer.js
│   │   ├── Navbar.js
│   │   ├── profile.js
│   │   ├── ProtectedRoute.js
│   │   ├── Register.css
│   │   ├── Signup.js
│   │   └── WebsocnetComponent.js
│   ├── context/
│   │   └── UserContext.js
│   ├── Logo/
│   │   └── logo.jpg
│   ├── Pages/
│   │   ├── About.js
│   │   ├── Contact.js
│   │   ├── ContactPage.js
│   │   ├── Dashboard.js
│   │   ├── Home.js
│   │   ├── MainPage.js
│   │   ├── NotFound.js
│   │   ├── Programmes.js
│   │   ├── Register.js
│   │   └── subscription.js
│   ├── APIs/
│   │   └── db.json
│   ├── App.js
│   ├── App.test.js
│   ├── ErrorBoundary.js
│   ├── index.css
│   ├── index.js
│   ├── logo.svg
│   ├── reportWebVitals.js
│   ├── setupTests.js
│   └── validateResponse.js
├── public/
│   ├── favicon.ico
│   ├── index.html
│   ├── manifest.json
│   └── robots.txt
├── package.json
└── README.md
```

## Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

For questions or support, please contact us through the contact form on the website or reach out to the development team.
nd the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

