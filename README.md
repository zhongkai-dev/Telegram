# Telegram Web App

This is a simple Telegram-like web application built with React and Firebase.

## Getting Started

### Prerequisites

- Node.js
- npm (or yarn)
- Firebase project setup with Firestore and Authentication enabled

### Installation

1. Clone the repository:

\`\`\`
git clone https://github.com/zhongkai-dev/Telegram.git
\`\`\`

2. Navigate to the project directory:

\`\`\`
cd Telegram
\`\`\`

3. Install the dependencies:

\`\`\`
npm install
\`\`\`

4. Configure Firebase:

   - Create a Firebase project in the [Firebase Console](https://console.firebase.google.com/).
   - Enable Authentication (Google Sign-In) and Firestore in your Firebase project.
   - Copy your Firebase project configuration and replace the placeholders in \`src/services/authService.js\` and \`src/services/chatService.js\`.

### Running the Application

To start the development server, run:

\`\`\`
npm start
\`\`\`

The application will be available at \`http://localhost:3000\`.

## License

This project is licensed under the MIT License.