const PDFDocument = require('pdfkit');

function buildPDF(dataCallback, endCallback) {
  const doc = new PDFDocument({ bufferPages: true, font: 'Courier' });

  doc.on('data', dataCallback);
  doc.on('end', endCallback);

  doc.fontSize(20).text(`A heading`);

  doc
    .fontSize(12)
    .text(
      `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores, saepe.`
    );
  doc.end();
}

module.exports = { buildPDF };
