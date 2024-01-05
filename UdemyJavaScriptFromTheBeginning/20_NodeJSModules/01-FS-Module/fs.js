const fs = require('fs/promises');

// Write to a file

// Callback async version
// fs.writeFile('file1.txt', 'Hello World', (err) => {
//   if (err) throw err;
//   console.log('The file has been created!');
// });

// Promise version
// need to use const fs = require('fs/promises');
// fs.writeFile('file2.txt', 'Hello World 2')
//   .then(() => console.log('The file has been created!'))
//   .catch((err) => console.log(err));

// Sync version
// fs.writeFileSync('file3.txt', 'Hello World 3');
// console.log('The file has been created!');

// Async/Await
async function createFile(filename, content) {
  try {
    await fs.writeFile(filename, content);
    console.log('The file has been created!');
  } catch (error) {
    console.log(error);
  }
}

// Read from a file
async function readFile(filename) {
  try {
    const data = await fs.readFile(filename, 'utf8');
    console.log(data);
  } catch (err) {
    console.log(err);
  }
}

// Delete a file
async function deleteFile(filename) {
  try {
    await fs.unlink(filename);
    console.log(`File ${filename} has been deleted!`);
  } catch (err) {
    console.log(err);
  }
}

// Rename a file
async function renameFile(oldFilename, newFilename) {
  try {
    await fs.rename(oldFilename, newFilename);
    console.log(`File ${oldFilename} has been renamed to ${newFilename}!`);
  } catch (err) {
    console.log(err);
  }
}

// Create a folder
async function createFolder(foldername) {
  try {
    await fs.mkdir(foldername);
    console.log(`Folder ${foldername} has been created!`);
  } catch (err) {
    console.log(err);
  }
}

// createFile('file4.txt', 'Hello World 4');
// readFile('file1.txt');
// deleteFile('file4.txt'); 
// renameFile('file1.txt', 'file.txt');
// createFolder('folder1');