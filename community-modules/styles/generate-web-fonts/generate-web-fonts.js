const fs = require('fs');
const path = require('path');
const webfontsGenerator = require('@vusion/webfonts-generator');

const fonts = fs.readdirSync(path.join(__dirname, 'fonts'));

const codepoints = {
    "aggregation": 0xf101,
    "arrows": 0xf102,
    "asc": 0xf103,
    "cancel": 0xf104,
    "chart": 0xf105,
    "checkbox-checked": 0xf106,
    "checkbox-indeterminate": 0xf107,
    "checkbox-unchecked": 0xf108,
    "color-picker": 0xf109,
    "columns": 0xf10a,
    "contracted": 0xf10b,
    "copy": 0xf10c,
    "cross": 0xf10d,
    "csv": 0xf10e,
    "desc": 0xf10f,
    "excel": 0xf110,
    "expanded": 0xf111,
    "eye-slash": 0xf112,
    "eye": 0xf113,
    "filter": 0xf114,
    "first": 0xf115,
    "grip": 0xf116,
    "group": 0xf117,
    "last": 0xf118,
    "left": 0xf119,
    "linked": 0xf11a,
    "loading": 0xf11b,
    "maximize": 0xf11c,
    "menu": 0xf11d,
    "minimize": 0xf11e,
    "next": 0xf11f,
    "none": 0xf120,
    "not-allowed": 0xf121,
    "paste": 0xf122,
    "pin": 0xf123,
    "pivot": 0xf124,
    "previous": 0xf125,
    "radio-button-off": 0xf126,
    "radio-button-on": 0xf127,
    "right": 0xf128,
    "save": 0xf129,
    "small-down": 0xf12a,
    "small-left": 0xf12b,
    "small-right": 0xf12c,
    "small-up": 0xf12d,
    "tick": 0xf12e,
    "tree-closed": 0xf12f,
    "tree-indeterminate": 0xf130,
    "tree-open": 0xf131,
    "unlinked": 0xf132,
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
            dest: path.join(__dirname, ".."),
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