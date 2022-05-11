const fs = require('fs');
const path = require('path');
const webfontsGenerator = require('@vusion/webfonts-generator');

const fonts = fs.readdirSync('fonts');

const codepoints = {
    "aggregation": "f101",
    "arrows": "f102",
    "asc": "f103",
    "cancel": "f104",
    "chart": "f105",
    "checkbox-checked": "f106",
    "checkbox-indeterminate": "f107",
    "checkbox-unchecked": "f108",
    "color-picker": "f109",
    "columns": "f10a",
    "contracted": "f10b",
    "copy": "f10c",
    "cross": "f10d",
    "csv": "f10e",
    "desc": "f10f",
    "excel": "f110",
    "expanded": "f111",
    "eye-slash": "f112",
    "eye": "f113",
    "filter": "f114",
    "first": "f115",
    "grip": "f116",
    "group": "f117",
    "last": "f118",
    "left": "f119",
    "linked": "f11a",
    "loading": "f11b",
    "maximize": "f11c",
    "menu": "f11d",
    "minimize": "f11e",
    "next": "f11f",
    "none": "f120",
    "not-allowed": "f121",
    "paste": "f122",
    "pin": "f123",
    "pivot": "f124",
    "previous": "f125",
    "radio-button-off": "f126",
    "radio-button-on": "f127",
    "right": "f128",
    "save": "f129",
    "small-down": "f12a",
    "small-left": "f12b",
    "small-right": "f12c",
    "small-up": "f12d",
    "tick": "f12e",
    "tree-closed": "f12f",
    "tree-indeterminate": "f130",
    "tree-open": "f131",
    "unlinked": "f132",
}

fonts.forEach((fontName) => {
    const sourceFolder = path.join(__dirname, `fonts/${fontName}`);
    const destinationFile = path.join(__dirname, `${fontName}.woff2`);
    console.log(`Generating ${destinationFile}`);
    const files = fs.readdirSync(sourceFolder)
        .filter(file => file.endsWith(".svg"))
        .map(file => path.join(sourceFolder, file));
        
    webfontsGenerator(
        {
            files: files,
            writeFiles: false,
            fontName: fontName,
            fontHeight: 1000,
            types: ["woff2"],
            css: false,
            fixedWidth: false,
            dest: "..",
            codepoints
        },
        (err, res) => {
            if (err) {
                console.log(err);
                process.exit(1);
            }
            fs.writeFileSync(destinationFile, res.woff2);
        }
    );
});