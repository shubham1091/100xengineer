# Set up MongoDB

This guide will help you set up MongoDB for your application running MongoDB locally with Docker. with or without authentication.

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
