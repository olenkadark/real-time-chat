# Real-Time Chat App with Vue.js 3 and Firebase

This project is a real-time chat application built using Vue.js 3 and Firebase. It offers a sleek, modern UI and real-time interaction capabilities, making it perfect for personal or small-scale professional use.

## Features

- Real-time messaging
- User authentication (sign up, sign in, sign out)
- Fully responsive design
- Easy integration with other projects

## Prerequisites

Before you begin, ensure you have met the following requirements:
- Node.js and npm installed (download from [nodejs.org](https://nodejs.org/))
- Vue CLI installed (`npm install -g @vue/cli`)

## Installation

To install the chat app, follow these steps:

```bash
git clone https://your-repository-url-here
cd real-time-chat
npm install
```

## Firebase Configuration

1. Create a Firebase project at Firebase console.
2. Add your project credentials to the src/firebase.js file:
```
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};
```

## Running the Application

Compiles and minifies for production
```
npm run build
```

Lints and fixes files
```
npm run lint
```
To run the application on your local machine:

```
npm run serve
```

Visit http://localhost:8080 to view the application.

## Contributing to the Real-Time Chat App

To contribute to the chat app, follow these steps:

1. Fork this repository.
2. Create a branch: git checkout -b <branch_name>.
3. Make your changes and commit them: git commit -m '<commit_message>'
4. Push to the original branch: git push origin <project_name>/<location>
5. Create the pull request.

Alternatively, see the GitHub documentation on [creating a pull request](https://help.github.com/articles/creating-a-pull-request/).

## Contributors

[@olenkadark](https://github.com/olenkadark/)

## Contact

If you want to contact me you can reach me at [olena@starryarray.com](mailto:olena@starryarray.com).

## License

This project uses the following license: **MIT**.