FROM node:16
RUN apt-get update && apt-get install -y libreoffice
ENV LIBREOFFICE_PATH /usr/lib/libreoffice/program/soffice
WORKDIR /app
COPY . .
RUN npm install
CMD ["node", "src/convert.js"]