const http = require('http');
const fs = require('fs');
const survey = require('./survey.js');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write('Survey responses are being saved to a file...\n');
    survey.saveResponsesToFile(survey.sampleResponses);
    res.end('Responses saved successfully!');
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
