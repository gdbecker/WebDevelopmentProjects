/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/

// Local development version

// import inquirer from "inquirer";
// import qr from "qr-image";
// import fs from "fs";

// // Get user input
// inquirer
//   .prompt([
//     {
//       message: "Type in your URL:",
//       name: "URL",
//     },
//   ])
//   .then((answers) => {
//     const url = answers.URL;

//     // Convert user's url into QR code
//     let qr_svg = qr.image(url);
//     qr_svg.pipe(fs.createWriteStream("qr_img.png"));

//     // Text file to save user input
//     fs.writeFile("URL.txt", url, (err) => {
//       if (err) throw err;
//       console.log("The file has been saved!");
//     });
//   })
//   .catch((error) => {
//     if (error.isTtyError) {
//       // Prompt couldn't be rendered in the current environment
//     } else {
//       // Something else went wrong
//     }
//   });

// Deployment version
import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

// Helper function to generate the files
const generateFiles = (url) => {
  let qr_svg = qr.image(url);
  qr_svg.pipe(fs.createWriteStream("qr_img.png"));

  fs.writeFile("URL.txt", url, (err) => {
    if (err) throw err;
    console.log("The file has been saved!");
  });
};

// Check if we are in a Build Environment (like Netlify)
if (process.env.NODE_ENV === 'production' || process.env.CI) {
  // Use a default URL for the portfolio build
  generateFiles("https://github.com/gdbecker");
} else {
  // Run normal interactive mode for your local machine
  inquirer
    .prompt([{ message: "Type in your URL:", name: "URL" }])
    .then((answers) => {
      generateFiles(answers.URL);
    })
    .catch((error) => {
      console.error("Inquirer error:", error);
    });
}