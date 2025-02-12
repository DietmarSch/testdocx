const libre = require("libreoffice-convert");
const fs = require("fs");
const path = require("path");

// Pfad zur Eingabedatei
const inputPath = path.join(__dirname, "input.docx");
// Pfad zur Ausgabedatei
const outputPath = path.join(__dirname, "output.pdf");

// Datei einlesen
const file = fs.readFileSync(inputPath);

// Konvertierung durchführen
libre.convert(file, ".pdf", undefined, (err, done) => {
  if (err) {
    console.log(`Fehler bei der Konvertierung: ${err}`);
  } else {
    // Konvertierte Datei speichern
    fs.writeFileSync(outputPath, done);
    console.log("Konvertierung erfolgreich!");
  }
});
