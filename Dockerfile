# FROM node:17-alpine
# WORKDIR /frontend
# COPY /frontend/package.json .
# RUN npm install 
# COPY frontend .
# RUN npm run build
# EXPOSE 3000
# CMD ["node","server.js"]

FROM node:17-alpine
WORKDIR /frontend
COPY /frontend/package.json .
RUN npm install 
COPY frontend .
EXPOSE 3000
CMD ["npm","start"]

# check if it will work if only build is copied ???


# Alternatively instead of creating a node server you can install server package 
# npm install -g serve
# serve -s build -l 4000
