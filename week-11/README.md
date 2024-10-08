# Docker Comprehensive Guide

## Beginner Topics

### Introduction to Docker
- Docker is a platform for developing, shipping, and running applications in containers.
- Containers are lightweight, standalone, and executable packages that include everything needed to run an application: code, runtime, system tools, libraries, and settings.
- Docker enables consistent application behavior across different environments, from development to production.

### Why Use Docker?
- **Consistency**: Ensures applications run the same way in every environment, reducing "it works on my machine" problems.
- **Isolation**: Containers are isolated from each other and the host system, improving security and reducing conflicts.
- **Efficiency**: Containers share the host OS kernel, making them more lightweight than virtual machines.
- **Scalability**: Easy to scale applications horizontally by spinning up more containers.
- **Version Control**: Images can be versioned, allowing easy rollbacks and updates.
- **Rapid Deployment**: Containers can be created, replicated, and torn down quickly.
- **DevOps Integration**: Facilitates CI/CD practices and infrastructure as code.

### Installation
1. **Docker Desktop**: 
   - For Windows and macOS, provides a user-friendly GUI and includes Docker Engine, Docker CLI client, Docker Compose, and Kubernetes.
   - Download from the official Docker website and follow the installation wizard.
   - Offers easy switching between Linux and Windows containers (on Windows).

2. **Docker Engine**:
   - For Linux systems, install Docker Engine directly.
   - Follow distribution-specific instructions from Docker's official documentation.

3. **Verification**:
   After installation, open a terminal and run:
   ```bash
   docker --version
   docker run hello-world
   ```
   This verifies the installation and runs a test container.

### Key Concepts
- **Images**: 
  - Blueprint for containers, containing application code, libraries, and dependencies.
  - Immutable: once created, cannot be changed (a new image version is created instead).
  - Can be stored in registries like Docker Hub for easy sharing and distribution.
  - Composed of layers, each representing a Dockerfile instruction.

- **Containers**: 
  - Runtime instances of Docker images.
  - Isolated environments with their own filesystem, networking, and isolated process tree.
  - Can be started, stopped, moved, and deleted.
  - Stateless by default; any data that needs to persist must be stored in volumes.

- **Dockerfile**: 
  - A text file containing instructions to build a Docker image.
  - Specifies the base image, environment setup, file copying, and commands to run.
  - Each instruction creates a new layer in the image.

- **Docker Daemon**:
  - Background service running on the host that manages building, running, and distributing Docker containers.
  - Clients communicate with the daemon through the Docker API.

- **Docker Client**:
  - Command-line tool that allows users to interact with Docker.
  - Sends commands to the Docker daemon.

### Basic Docker Commands
Detailed explanations of essential Docker commands:

- `docker run <image>`: 
  - Creates and starts a container from the specified image.
  - If the image isn't available locally, Docker pulls it from the registry.
  - Example: `docker run -d -p 80:80 --name my_nginx nginx`

- `docker ps`: 
  - Lists running containers.
  - Use `docker ps -a` to show all containers, including stopped ones.
  - Example: `docker ps --format "table {{.ID}}\t{{.Image}}\t{{.Status}}"`

- `docker stop <container>`: 
  - Gracefully stops a running container.
  - Sends a SIGTERM signal, allowing the container to shut down cleanly.
  - Example: `docker stop my_nginx`

- `docker rm <container>`: 
  - Removes a stopped container.
  - Use `-f` flag to force remove a running container.
  - Example: `docker rm -f $(docker ps -aq)` (removes all containers)

- `docker images`: 
  - Lists all locally stored Docker images.
  - Shows image ID, repository, tag, and size.
  - Example: `docker images --format "{{.Repository}}:{{.Tag}} {{.Size}}"`

- `docker rmi <image>`: 
  - Removes a Docker image from the local system.
  - Cannot remove images that are being used by existing containers.
  - Example: `docker rmi $(docker images -q -f "dangling=true")` (removes all dangling images)

- `docker exec`:
  - Runs a command in a running container.
  - Useful for debugging or interacting with containers.
  - Example: `docker exec -it my_nginx /bin/bash`

### Creating a Dockerfile
A step-by-step explanation of a basic Dockerfile:

```dockerfile
# Use an official Node.js runtime as the base image
FROM node:14

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install application dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose port 3000 for the application
EXPOSE 3000

# Define the command to run the application
CMD ["node", "app.js"]
```

Explanation of each instruction:
- `FROM`: Specifies the base image to use.
- `WORKDIR`: Sets the working directory for subsequent instructions.
- `COPY`: Copies files from the host to the container.
- `RUN`: Executes commands in a new layer on top of the current image.
- `EXPOSE`: Informs Docker that the container listens on specified network ports at runtime.
- `CMD`: Provides defaults for an executing container.

### Building and Running an Image
Detailed steps to build and run a Docker image:

1. Build the image:
   ```bash
   docker build -t myapp:v1 .
   ```
   - `-t myapp:v1` tags the image with the name "myapp" and version "v1".
   - `.` specifies the build context (current directory).

2. Run a container from the image:
   ```bash
   docker run -d -p 3000:3000 --name myapp_container myapp:v1
   ```
   - `-d` runs the container in detached mode.
   - `-p 3000:3000` maps port 3000 of the container to port 3000 on the host.
   - `--name myapp_container` assigns a name to the container.

### Port Mapping
- Allows accessing container services from the host system.
- Format: `-p <host_port>:<container_port>`
- Example: `docker run -p 8080:80 nginx`
  - Maps container's port 80 to host's port 8080.
- Multiple port mappings: `docker run -p 8080:80 -p 443:443 nginx`

### Environment Variables
- Pass runtime configuration to containers.
- Use `-e` flag to set environment variables.
- Example: 
  ```bash
  docker run -e DB_HOST=localhost -e DB_PORT=5432 myapp
  ```
- Using an env file:
  ```bash
  docker run --env-file ./env.list myapp
  ```

### Docker Compose
- Tool for defining and running multi-container Docker applications.
- Uses a YAML file to configure application services.
- Example `docker-compose.yml`:

```yaml
version: '3'
services:
  web:
    build: .
    ports:
      - "5000:5000"
  redis:
    image: "redis:alpine"
  db:
    image: "postgres:12"
    environment:
      - POSTGRES_DB=myapp
      - POSTGRES_PASSWORD=secret
```

- Start services: `docker-compose up -d`
  - Builds, (re)creates, starts, and attaches to containers for a service.
- Stop services: `docker-compose down`
- View logs: `docker-compose logs`

## Intermediate Topics

### Docker Networking
Explanation of different network modes:

- **Bridge Mode**: 
  - Default network mode.
  - Creates a private network inside the host.
  - Containers can communicate with each other if they're on the same bridge network.
  - Example: `docker run --network bridge nginx`

- **Host Mode**: 
  - the container and the host.
  - Container uses the host's network directly.
  - Useful for high-performance networking requirements.
  - Example: `docker run --network host nginx`

- **None Mode**: 
  - Disables all networking.
  - Useful for running batch jobs that don't require network access.
  - Example: `docker run --network none alpine`

- **Overlay Network**:
  - Enables communication between containers across multiple Docker daemon hosts.
  - Used in Docker Swarm mode.

### Custom Networks
Creating and using custom networks for better isolation:

```bash
# Create a custom network
docker network create --driver bridge mynetwork

# Run containers in the custom network
docker run --network mynetwork --name container1 nginx
docker run --network mynetwork --name container2 alpine
```

Containers on the same custom network can communicate using container names as hostnames.

### Volume Mounting
Detailed explanation of volume mounting for data persistence:

```bash
# Mount a host directory to a container
docker run -v /host/data:/container/data myapp

# Use a named volume
docker volume create mydata
docker run -v mydata:/container/data myapp
```

- `/host/data`: Path on the host system.
- `/container/data`: Path in the container where the host directory is mounted.
- Named volumes are managed by Docker and are more portable across different host systems.

### Docker Registry
Working with Docker registries for sharing and storing images:

- **Docker Hub**: Public registry for sharing Docker images.
  - Push an image: `docker push username/repository:tag`
  - Pull an image: `docker pull username/repository:tag`

- **Private Registry**: Set up a secure, private Docker registry for your organization.
  - Useful for storing proprietary or sensitive images.
  - Example using Docker Registry image:
    ```bash
    docker run -d -p 5000:5000 --name registry registry:2
    docker tag myapp localhost:5000/myapp
    docker push localhost:5000/myapp
    ```

## Advanced Topics

### Efficient Caching in Layers
Optimizing Dockerfile for better build performance:

- Order instructions from least to most frequently changing.
- Use `.dockerignore` to exclude unnecessary files from the build context.
- Combine multiple RUN commands to reduce the number of layers.

Example of optimizing RUN instructions:

```dockerfile
# Bad practice (creates multiple layers)
RUN apt-get update
RUN apt-get install -y package1
RUN apt-get install -y package2

# Good practice (creates a single layer)
RUN apt-get update && apt-get install -y \
    package1 \
    package2 \
 && rm -rf /var/lib/apt/lists/*
```

### Multi-Stage Builds
Using multiple stages to create smaller, more secure final images:

```dockerfile
# Build stage
FROM node:14 AS builder
WORKDIR /app
COPY . .
RUN npm ci && npm run build

# Production stage
FROM node:14-alpine
WORKDIR /app
COPY --from=builder /app/dist ./dist
COPY package*.json ./
RUN npm ci --only=production
CMD ["node", "dist/app.js"]
```

Benefits:
- Separates build and runtime environments.
- Final image only contains necessary production files.
- Reduces final image size and potential security vulnerabilities.

### Security Best Practices
Enhancing Docker container security:

1. Run containers as non-root users:
   ```dockerfile
   RUN useradd -m myuser
   USER myuser
   ```

2. Use official images from trusted sources to reduce the risk of malware.

3. Implement resource limits:
   ```bash
   docker run --memory=512m --cpu-shares=1024 myapp
   ```

4. Regularly update base images to patch known vulnerabilities:
   ```bash
   docker pull nginx:latest
   docker build --pull -t myapp .
   ```

5. Use Docker Content Trust to sign and verify images:
   ```bash
   export DOCKER_CONTENT_TRUST=1
   docker push myuser/myapp:latest
   ```

6. Scan images for vulnerabilities:
   ```bash
   docker scan myapp:latest
   ```

### Monitoring and Logging
Effective ways to monitor and log Docker containers:

1. View container logs:
   ```bash
   docker logs --tail 100 -f mycontainer
   ```

2. Implement logging drivers to send logs to centralized logging systems:
   ```bash
   docker run --log-driver=syslog --log-opt syslog-address=udp://logserver:514 myapp
   ```

3. Use Docker stats for real-time performance metrics:
   ```bash
   docker stats mycontainer
   ```

4. Integrate with monitoring tools:
   - Prometheus for metrics collection
   - Grafana for visualization
   - Example using docker-compose:
     ```yaml
     version: '3'
     services:
       app:
         image: myapp
         ports:
           - "8080:8080"
       prometheus:
         image: prom/prometheus
         volumes:
           - ./prometheus.yml:/etc/prometheus/prometheus.yml
         ports:
           - "9090:9090"
       grafana:
         image: grafana/grafana
         ports:
           - "3000:3000"
     ```

### Orchestration with Docker Swarm and Kubernetes
Overview of container orchestration tools:

- **Docker Swarm**: 
  - Native clustering and orchestration solution for Docker.
  - Easy to set up and use for smaller deployments.
  - Basic commands:
    ```bash
    docker swarm init
    docker service create --replicas 3 -p 80:80 nginx
    docker service ls
    docker service scale myservice=5
    ```

- **Kubernetes**: 
  - Powerful, extensible platform for managing containerized workloads.
  - Offers advanced features like automatic scaling, rolling updates, and self-healing.
  - Basic commands:
    ```bash
    kubectl create deployment nginx --image=nginx
    kubectl expose deployment nginx --port=80
    kubectl scale deployment nginx --replicas=3
    kubectl get pods
    ```

### Conclusion
- Docker simplifies application deployment and management through containerization.
- Advanced features like custom networking, volumes, and multi-stage builds enhance Docker's capabilities.
- Container orchestration tools extend Docker's usefulness to complex, distributed systems.
- Proper security practices and monitoring are crucial for production Docker deployments.

