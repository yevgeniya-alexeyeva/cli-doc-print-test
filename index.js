const { Command } = require("commander");

const fs = require('fs');
const { v4: uuidv4 } = require('uuid');
const pdf = require('html-pdf');
const path = require('path');

const program = new Command();

const options = {
    width: "8.25in",
    height: "11.75in",
    // format: printOptions?.PaperSize ?? 'A4',
    orientation: "portrait",
    viewportSize: {
        width: 794,
        height: 1122,
    },
    border: {
        top: "25mm",
        right: "0mm",
        bottom: "0mm",
        left: "0mm",
    },
    localUrlAccess: true,
};

const getDocumentUrl = async (docType) => {
    try {
        const filename = path.join(__dirname, 'pdf-files', `${uuidv4()}.pdf`);
        console.log('🚀 ~ file: index.js ~ line 34 ~ getDocumentUrl ~ filename', filename)

        const html = fs.readFileSync(path.join(__dirname, `./data/${docType}.html`), 'utf8');

        pdf.create(html, options).toFile(filename, (err, res) => {
            if (err) {
                console.log(
                    `ERROR WHILE GETTING URL`)
                reject(err);
            }
            console.log(
                `URL GOT SUCCESSFULLY`);
        });
    } catch (error) {
        console.log(
            `ERROR WHILE GETTING URL IN CATCH BLOCK`)
    };
}

program
    .option("-d, --document <type>", "choose document type")

program.parse(process.argv)

const argv = program.opts();

function invokeAction({ document }) {
    (async () => {
        await getDocumentUrl(document);
        console.log(
            `DOCUMENT CREATED`);
    })();
}

invokeAction(argv);