import inquirer from "inquirer";
import qr from "qr-image";
import fs from "node:fs";

inquirer
    // prompt question in cli using inquirer package
    .prompt([
        {
            message: "Type in your URL: ",
            name: "URL",
        },
    ])
    // return answer
    .then((answers) => {
        const url = answers.URL;
        let qr_svg = qr.image(url);
        // generate qr image using qr-image package
        qr_svg.pipe(fs.createWriteStream(`./img/qr_img_${url}.png`));

        // write url with .txt file base using fs.writeFile (node native module)
        fs.writeFile(`./route/URL_${url}.txt`, url, (err) => {
            if (err) throw err;
            console.log("The file has been saved!");
        });
    })
    .catch((error) => {
        if (error.isTtyError) {
            // Prompt couldn't be rendered in the current environment
        } else {
            // Something else went wrong
        }
    });
/*
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/
