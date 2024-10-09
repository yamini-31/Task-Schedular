# Use an official Nginx image as the base
FROM nginx:alpine

# Set the working directory in the container
WORKDIR /usr/share/nginx/html

# Remove any existing files in the default Nginx folder (optional)
RUN rm -rf /usr/share/nginx/html/*

# Copy the contents of the 'Quizapp' directory (inside /project) into Nginx's default serving directory
COPY ./repo/Task-Schedular /usr/share/nginx/html/


# Expose port 80
EXPOSE 3000
