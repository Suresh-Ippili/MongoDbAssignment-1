// server.js
const http = require('http');
const fs = require('fs');
const path = require('path');
const os = require('os');

// Create the server
const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Server is running at port 3004\n');
  }
});

// Start the server
server.listen(3004, () => {
  console.log('Server has started at port no 3004');
});

// Create and write to file.txt
const filePath = path.join(__dirname, 'file.txt');
fs.writeFile(filePath, 'this is first line of the file', (err) => {
  if (err) throw err;
  console.log('file.txt has been created and written');

  // Read contents of file.txt
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) throw err;
    console.log('Contents of file.txt:', data);
  });
});

// Display system information
console.log('Current Directory:', __dirname);
console.log('Date of Creation:', fs.statSync(__filename).birthtime);
console.log('Name of OS:', os.type());
console.log('Free Memory:', os.freemem());
