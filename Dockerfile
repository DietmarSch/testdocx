
FROM node:16

# Installiere nur libreoffice-writer
RUN apt-get update && apt-get install -y libreoffice-writer

# Setze den Pfad zur soffice-Binärdatei
ENV LIBREOFFICE_PATH /usr/lib/libreoffice/program/soffice

# Arbeitsverzeichnis im Container festlegen
WORKDIR /app

# Kopiere die package.json und package-lock.json
COPY package*.json ./

# Installiere Node.js-Abhängigkeiten
RUN npm install

# Kopiere den gesamten Projektcode
COPY . .

# Startbefehl
CMD ["node", "src/index.js"]