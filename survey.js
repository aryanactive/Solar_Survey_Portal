const fs = require('fs');

// Function to save responses to a text file
function saveResponsesToFile(responses) {
    const data = responses.map(response => response.map(question => `${question.text}: ${question.answer}`).join('\n')).join('\n\n');
    fs.writeFile('survey_responses.txt', data, (err) => {
        if (err) throw err;
        console.log('Responses saved to survey_responses.txt');
    });
}

// Sample responses (replace this with actual responses saved from the survey)
const sampleResponses = [
    [
        { text: "What is your primary source of energy for residential purposes?", answer: "Solar" },
        { text: "How interested are you in using solar energy for your home?", answer: "Very interested" },
        // Include other questions and answers here
    ],
    [
        { text: "What is your primary source of energy for residential purposes?", answer: "Electricity" },
        { text: "How interested are you in using solar energy for your home?", answer: "Somewhat interested" },
        // Include other questions and answers here
    ],
    // Include more responses as needed
];

// Save the sample responses to a file
saveResponsesToFile(sampleResponses);

module.exports = {
    saveResponsesToFile,
    sampleResponses
};


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
