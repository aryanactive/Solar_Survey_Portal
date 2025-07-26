// Define the survey questions
const surveyQuestions = [
    {
        "id": 1,
        "text": "What is your primary source of energy for residential purposes?",
        "type": "mcq",
        "options": [
            { "id": "q1-a", "label": "Solar", "value": "Solar" },
            { "id": "q1-b", "label": "Electricity", "value": "Electricity" },
            { "id": "q1-c", "label": "Natural Gas", "value": "Natural Gas" },
            { "id": "q1-d", "label": "Others", "value": "Others" }
        ]
    },
    {
        "id": 2,
        "text": "How interested are you in using solar energy for your home?",
        "type": "mcq",
        "options": [
            { "id": "q2-a", "label": "Very interested", "value": "Very interested" },
            { "id": "q2-b", "label": "Somewhat interested", "value": "Somewhat interested" },
            { "id": "q2-c", "label": "Not interested", "value": "Not interested" },
            { "id": "q2-d", "label": "Unsure", "value": "Unsure" }
        ]
    },
    {
        "id": 3,
        "text": "How often do you consider energy efficiency when purchasing appliances?",
        "type": "mcq",
        "options": [
            { "id": "q3-a", "label": "Always", "value": "Always" },
            { "id": "q3-b", "label": "Often", "value": "Often" },
            { "id": "q3-c", "label": "Sometimes", "value": "Sometimes" },
            { "id": "q3-d", "label": "Rarely", "value": "Rarely" }
        ]
    },
    {
        "id": 4,
        "text": "What motivates you to consider renewable energy options?",
        "type": "mcq",
        "options": [
            { "id": "q4-a", "label": "Environmental concerns", "value": "Environmental concerns" },
            { "id": "q4-b", "label": "Cost savings", "value": "Cost savings" },
            { "id": "q4-c", "label": "Government incentives", "value": "Government incentives" }
        ]
    },
    {
        "id": 5,
        "text": "Have you ever installed any energy-saving devices in your home?",
        "type": "mcq",
        "options": [
            { "id": "q5-a", "label": "Yes", "value": "Yes" },
            { "id": "q5-b", "label": "No", "value": "No" },
            { "id": "q5-c", "label": "Planning to", "value": "Planning to" },
            { "id": "q5-d", "label": "Not sure", "value": "Not sure" }
        ]
    },
    {
        "id": 6,
        "text": "How likely are you to invest in solar panels in the next 5 years?",
        "type": "mcq",
        "options": [
            { "id": "q6-a", "label": "Very likely", "value": "Very likely" },
            { "id": "q6-b", "label": "Likely", "value": "Likely" },
            { "id": "q6-c", "label": "Unlikely", "value": "Unlikely" },
            { "id": "q6-d", "label": "Not sure", "value": "Not sure" }
        ]
    },
    {
        "id": 7,
        "text": "What factors would influence your decision to switch to solar energy?",
        "type": "mcq",
        "options": [
            { "id": "q7-a", "label": "Cost", "value": "Cost" },
            { "id": "q7-b", "label": "Government policies", "value": "Government policies" },
            { "id": "q7-c", "label": "Energy efficiency", "value": "Energy efficiency" },
            { "id": "q7-d", "label": "Other", "value": "Other" }
        ]
    },
    {
        "id": 8,
        "text": " How satisfied are you with your current energy provider?",
        "type": "mcq",
        "options": [
            { "id": "q8-a", "label": "Very satisfied", "value": "Very satisfied" },
            { "id": "q8-b", "label": "Satisfied", "value": "Satisfied" },
            { "id": "q8-c", "label": "Neutral", "value": "Neutral" },
            { "id": "q8-d", "label": "Dissatisfied", "value": "Dissatisfied" }
        ]
    },
    {
        "id": 9,
        "text": "Do you believe renewable energy sources are the future of energy?",
        "type": "mcq",
        "options": [
            { "id": "q9-a", "label": "Yes, definitely", "value": "Yes, definitely" },
            { "id": "q9-b", "label": "Possibly", "value": "Possibly" },
            { "id": "q9-c", "label": "No", "value": "No" },
            { "id": "q9-d", "label": "Unsure", "value": "Unsure" }
        ]
    },
    {
        "id": 10,
        "text": "How important is sustainability to you when making energy-related decisions?",
        "type": "mcq",
        "options": [
            { "id": "q10-a", "label": "Very important", "value": "Very important" },
            { "id": "q10-b", "label": "Important", "value": "Important" },
            { "id": "q10-c", "label": "Somewhat important", "value": "Somewhat important" },
            { "id": "q10-d", "label": "Not important", "value": "Not important" }
        ]
    },
    
];

// Function to fetch survey questions
function fetchSurveyQuestions() {
    return new Promise((resolve, reject) => {
        // Simulating API request delay with setTimeout
        setTimeout(() => {
            resolve(surveyQuestions);
        }, 500);
    });
}
