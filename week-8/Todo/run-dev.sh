#!/bin/bash

# Navigate to the frontend directory and run npm run dev
echo "Starting frontend..."
cd frontend
npm run dev &
FRONTEND_PID=$!

# Navigate to the backend directory and run npm run dev
echo "Starting backend..."
cd ../backend
npm run dev &
BACKEND_PID=$!

# Wait for both processes to finish
wait $FRONTEND_PID
wait $BACKEND_PID

echo "Both frontend and backend have stopped."
