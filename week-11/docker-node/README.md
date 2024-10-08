# Motionscape

Motionscape is a simple Express.js application that serves a "Hello World" GIF. This project demonstrates basic Docker containerization and web server deployment using Node.js.

## Docker Hub

The project is available on Docker Hub at:

```
shubham1091/motionscape
```

You can pull the image using:

```bash
docker pull shubham1091/motionscape
```

## Features

- Serves a static "Hello World" GIF
- Built with Express.js
- Colorful console logging using chalk
- Dockerized for easy deployment and scaling
- Configurable port via environment variable

## Usage

To run this application using Docker:

1. Pull the image from Docker Hub:
   ```bash
   docker pull shubham1091/motionscape
   ```

2. Run the container:
   ```bash
   docker run -p 3000:3000 shubham1091/motionscape
   ```

3. Access the application at `http://localhost:3000`

## Development

For local development without Docker:

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the server:
   ```bash
   node your-main-file.js
   ```

Replace `your-main-file.js` with the actual name of your main JavaScript file.

## Learning Objectives

- Basic Express.js server setup
- Serving static files with Express
- Implementing logging middleware
- Dockerizing a Node.js application
- Environment variable usage in Node.js and Docker

Feel free to fork and modify this project as you explore Docker and Express.js further!
```

This README file includes all the essential information about the Motionscape project, including its availability on Docker Hub, features, usage instructions, and learning objectives. It provides a comprehensive guide for users who want to run the project or use it as a learning resource.