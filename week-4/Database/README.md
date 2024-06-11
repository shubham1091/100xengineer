# Set up MongoDB

This guide will help you set up MongoDB for your application. You have two options: using an online MongoDB service or running MongoDB locally with Docker. Both options include steps for configuring MongoDB with or without authentication.

## Option A: Online MongoDB

1. **Create an account on MongoDB Atlas:** Sign up at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) and create a new cluster.
2. **Get your connection string:** Navigate to your cluster in the MongoDB Atlas dashboard, click "Connect," choose "Connect your application," and copy the provided connection string.
3. **Update your connection string:** Replace `<username>`, `<password>`, and `<dbname>` in the connection string with your MongoDB Atlas credentials and database name.

## Option B: MongoDB with Docker

### With Authentication

1. **Run MongoDB in a Docker container with authentication:**

   ```bash
   docker run -d \
     --name mongodb-container \
     -e MONGO_INITDB_ROOT_USERNAME=yourUsername \
     -e MONGO_INITDB_ROOT_PASSWORD=yourPassword \
     -e MONGO_INITDB_DATABASE=yourDatabaseName \
     -p 27017:27017 \
     mongo
   ```

2. **Verify that MongoDB is running:**
   - Check the running containers with `docker ps`.
   - You should see `mongodb-container` listed.

### Without Authentication

1. **Run MongoDB in a Docker container without authentication:**

   ```bash
   docker run -d \
     --name mongodb-container \
     -e MONGO_INITDB_DATABASE=yourDatabaseName \
     -p 27017:27017 \
     mongo
   ```

2. **Verify that MongoDB is running:**
   - Check the running containers with `docker ps`.
   - You should see `mongodb-container` listed.

## Configure Environment Variables

1. **Create a `.env` file in the root directory of your project:**

   ```env
   # With authentication
   DB_URL=mongodb://yourUsername:yourPassword@localhost:27017/yourDatabaseName?authSource=admin

   # Without authentication
   DB_URL=mongodb://localhost:27017/yourDatabaseName
   ```

   - If you're using MongoDB Atlas, the `DB_URL` will be the connection string provided by Atlas, modified with your credentials.


