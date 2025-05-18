const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    // Set the content type to HTML
    res.setHeader('Content-Type', 'text/html');

    // Read the HTML file
    fs.readFile(path.join(__dirname, 'server_page.html'), (err, content) => {
        if (err) {
            res.writeHead(500);
            res.end('Error loading the page');
            return;
        }
        res.writeHead(200);
        res.end(content);
    });
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
}); 