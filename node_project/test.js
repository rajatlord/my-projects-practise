// const http = require('http');
// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello, World!\n');
// });

// server.listen(3000, '127.0.0.1', () => {
//   console.log('Server running at http://127.0.0.1:3000/');
// });

// const http = require('http');
// const server = http.createServer((req, res) => {
//   if (req.url === '/' && req.method === 'GET') {
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/html');
//     res.end('<h1>Home Page</h1>');
//   } else if (req.url === '/about' && req.method === 'GET') {
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/html');
//     res.end('<h1>About Page</h1>');
//   } else {
//     res.statusCode = 404;
//     res.setHeader('Content-Type', 'text/html');
//     res.end('<h1>Page Not Found</h1>');
//   }
// });

// server.listen(3000, '127.0.0.1', () => {
//   console.log('Server running at http://127.0.0.1:3000/');
// });

                // These comments are added on wed 24 July 2024 

                // console.log("Hello world ");

                // const http = require("http");

                // const server = http.createServer((req, res) => {
                //   res.statusCode = 200;
                //   res.setHeader("Content-Type", "text/plain");
                //   res.end("Hello, World!\n");
                // });

                // const port = 3000;
                // server.listen(port, () => {
                //   console.log(`Server running at http://localhost:${port}/`);
                // });


                // // Event Loop and Asynchronous Operations:
                // console.log("Start");

                // setTimeout(() => {
                //   console.log("Timeout callback executed");
                // }, 0);

                // console.log("End");


                // // Non-blocking I/O
                // const fs = require('fs');

                // console.log('Start reading file');

                // fs.readFile('example.txt', 'utf8', (err, data) => {
                //   if (err) {
                //     console.error('Error reading file:', err);
                //     return;
                //   }
                //   console.log('File contents:', data);
                // });

                // console.log('End of script');

// what is non-blocking exactly 
// In the context of Node.js and asynchronous programming, "non-blocking" refers to the ability of a system to perform operations without waiting for a particular task to complete before moving on to the next one. 


// =============================================================================================================================================
// --------------------------------------------------------New code written on 24 July 2024-----------------------------------------------------
//______________________________________________________________________________________________________________________________________________
// method-handling.js
// const http = require('http');

// const server = http.createServer((req, res) => {
//   if (req.method === 'GET') {
//     res.writeHead(200, { 'Content-Type': 'text/plain' });
//     res.end('GET request received\n');
//   } else if (req.method === 'POST') {
//     let body = '';
//     req.on('data', chunk => {
//       body += chunk.toString();
//     });
//     req.on('end', () => {
//       res.writeHead(200, { 'Content-Type': 'text/plain' });
//       res.end(`POST request received with data: ${body}\n`);
//     });
//   } else {
//     res.writeHead(405, { 'Content-Type': 'text/plain' });
//     res.end(`${req.method} not allowed\n`);
//   }
// });

// const PORT = 3000;
// server.listen(PORT, () => {
//   console.log(`Server running at http://localhost:${PORT}/`);
// });

//----------------------------------------------------------------------------------------------------------------------------------------------
// ----------------------------------------------------------3. Creating an HTTP Client---------------------------------------------------------
//______________________________________________________________________________________________________________________________________________
// http-client.js
const http = require('http');

const options = {
  hostname: 'jsonplaceholder.typicode.com',
  port: 80,
  path: '/posts/1',
  method: 'GET',
};

const req = http.request(options, res => {
  let data = '';

  // A chunk of data has been received.
  res.on('data', chunk => {
    data += chunk;
  });

  // The whole response has been received.
  res.on('end', () => {
    console.log(`Response: ${data}`);
  });
});

req.on('error', error => {
  console.error(`Error: ${error.message}`);
});

req.end();

