// const libre = require("libreoffice-convert");
// const fs = require("fs");
// const path = require("path");

// // Pfad zur LibreOffice-Binärdatei setzen
// process.env.LIBREOFFICE_PATH = "/usr/lib/libreoffice/program/soffice";

// // Promise-basierte Version von libre.convert
// function convertToPdf(inputBuffer) {
//   return new Promise((resolve, reject) => {
//     libre.convert(inputBuffer, ".pdf", undefined, (err, done) => {
//       if (err) {
//         reject(err);
//       } else {
//         resolve(done);
//       }
//     });
//   });
// }

// async function main() {
//     try {
//       // Pfad zur Eingabedatei
//       const inputPath = path.join(__dirname, "input.docx");
//       console.log({ inputPath });

//       // Pfad zur Ausgabedatei
//       const outputPath = path.join(__dirname, "output.pdf");

//       // Überprüfen, ob die Eingabedatei existiert
//       if (!fs.existsSync(inputPath)) {
//         console.log("Eingabedatei nicht gefunden:", inputPath);
//         process.exit(1); // Beende das Programm mit Fehlercode
//       }

//       // Datei einlesen
//       const file = fs.readFileSync(inputPath);

//       // Konvertierung durchführen
//       const pdfBuffer = await convertToPdf(file);

//       // Konvertierte Datei speichern
//       fs.writeFileSync(outputPath, pdfBuffer);
//       console.log("Konvertierung erfolgreich!");
//     } catch (err) {
//       console.log("Fehler:", err);
//     }
//   }

//   // Hauptfunktion aufrufen
//   main();

const libre = require("libreoffice-convert");
const fs = require("fs");
const path = require("path");

// Pfad zur LibreOffice-Binärdatei setzen
process.env.LIBREOFFICE_PATH = "/usr/lib/libreoffice/program/soffice";

// Promise-basierte Version von libre.convert
function convertToPdf(inputBuffer) {
  return new Promise((resolve, reject) => {
    libre.convert(inputBuffer, ".pdf", undefined, (err, done) => {
      if (err) {
        reject(err);
      } else {
        resolve(done);
      }
    });
  });
}

async function main() {
  try {
    // Pfad zur Eingabedatei
    const inputPath = path.join(__dirname, "input.docx");
    console.log({ inputPath });

    // Pfad zur Ausgabedatei
    const outputPath = path.join(__dirname, "output.pdf");

    // Überprüfen, ob die Eingabedatei existiert
    if (!fs.existsSync(inputPath)) {
      console.log("Eingabedatei nicht gefunden:", inputPath);
      process.exit(1); // Beende das Programm mit Fehlercode
    }

    // Datei einlesen
    const file = fs.readFileSync(inputPath);

    // Konvertierung durchführen
    const pdfBuffer = await convertToPdf(file);

    // Konvertierte Datei speichern
    await fs.writeFileSync(outputPath, pdfBuffer);
    console.log("Konvertierung erfolgreich!");
    console.log('pdf existiert: ', fs.existsSync(outputPath))
  } catch (err) {
    console.log("Fehler:", err);
  }
}

// Hauptfunktion aufrufen
main();

// const libre = require("libreoffice-convert");
// const fs = require("fs");
// const path = require("path");

// // Pfad zur Eingabedatei
// const inputPath = path.join(__dirname, "input.docx");

// console.log({ inputPath });
// if (!fs.existsSync(inputPath)) {
//     console.log("Eingabedatei nicht gefunden:", inputPath);
//     return;
//   }

// // Pfad zur Ausgabedatei
// const outputPath = path.join(__dirname, "output.pdf");
// process.env.LIBREOFFICE_PATH = "/usr/lib/libreoffice/program/soffice"; // Pfad zu soffice

// // Datei einlesen
// const file = fs.readFileSync(inputPath);

// // Konvertierung durchführen
// try {
//   libre.convert(file, ".pdf", undefined, (err, done) => {

//     if (err) {
//       console.log(`Fehler bei der Konvertierung: ${err}`);
//     } else {
//       // Konvertierte Datei speichern
//       fs.writeFileSync(outputPath, done);
//       console.log("Konvertierung erfolgreich!");
//     }
//   });
// } catch (err) {
//   console.log(err);
// }
