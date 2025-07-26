document.addEventListener('DOMContentLoaded', function() {
    const questionContainer = document.getElementById('question-container');
    const prevButton = document.getElementById('prev-btn');
    const nextButton = document.getElementById('next-btn');
    const submitButton = document.getElementById('submit-btn');
    const resultsSection = document.getElementById('results-section');

    let currentQuestionIndex = 0;
    let userResponses = [];

    // Function to fetch survey questions
    function fetchSurveyQuestions() {
        return new Promise((resolve, reject) => {
            // Simulating API request delay with setTimeout
            setTimeout(() => {
                resolve(surveyQuestions);
            }, 500);
        });
    }

    // Function to display multiple choice question
    function displayMCQuestion(question) {
        // Clear previous question
        questionContainer.innerHTML = '';

        // Create question element
        const questionElement = document.createElement('h2');
        questionElement.textContent = question.text;
        questionContainer.appendChild(questionElement);

        // Create radio buttons for each option
        question.options.forEach(option => {
            const optionElement = document.createElement('input');
            optionElement.type = 'radio';
            optionElement.name = 'answer';
            optionElement.value = option.value;
            optionElement.id = option.id;
            optionElement.dataset.questionIndex = currentQuestionIndex;

            // Check if user has already answered this question
            if (userResponses[currentQuestionIndex] === option.value) {
                optionElement.checked = true;
            }

            const labelElement = document.createElement('label');
            labelElement.textContent = option.label;
            labelElement.htmlFor = option.id;

            questionContainer.appendChild(optionElement);
            questionContainer.appendChild(labelElement);
            questionContainer.appendChild(document.createElement('br'));
        });
    }

    // Function to display selective section question (checkboxes)
    function displaySelectiveSectionQuestion(question) {
        // Clear previous question
        questionContainer.innerHTML = '';

        // Create question element
        const questionElement = document.createElement('h2');
        questionElement.textContent = question.text;
        questionContainer.appendChild(questionElement);

        // Create checkboxes for each option
        question.options.forEach(option => {
            const optionElement = document.createElement('input');
            optionElement.type = 'checkbox';
            optionElement.name = 'answer';
            optionElement.value = option.value;
            optionElement.id = option.id;
            optionElement.dataset.questionIndex = currentQuestionIndex;

            // Check if user has already selected this option
            if (userResponses[currentQuestionIndex] && userResponses[currentQuestionIndex].includes(option.value)) {
                optionElement.checked = true;
            }

            const labelElement = document.createElement('label');
            labelElement.textContent = option.label;
            labelElement.htmlFor = option.id;

            questionContainer.appendChild(optionElement);
            questionContainer.appendChild(labelElement);
            questionContainer.appendChild(document.createElement('br'));
        });
    }

    // Function to display short answer question
    function displayShortAnswerQuestion(question) {
        // Clear previous question
        questionContainer.innerHTML = '';

        // Create question element
        const questionElement = document.createElement('h2');
        questionElement.textContent = question.text;
        questionContainer.appendChild(questionElement);

        // Create input field for short answer
        const inputElement = document.createElement('input');
        inputElement.type = 'text';
        inputElement.name = 'answer';
        inputElement.id = 'short-answer';
        inputElement.placeholder = 'Your answer...';

        // Check if user has already answered this question
        if (userResponses[currentQuestionIndex]) {
            inputElement.value = userResponses[currentQuestionIndex];
        }

        questionContainer.appendChild(inputElement);
    }

    // Function to display descriptive answer question
    function displayDescriptiveAnswerQuestion(question) {
        // Clear previous question
        questionContainer.innerHTML = '';

        // Create question element
        const questionElement = document.createElement('h2');
        questionElement.textContent = question.text;
        questionContainer.appendChild(questionElement);

        // Create textarea for descriptive answer
        const textareaElement = document.createElement('textarea');
        textareaElement.name = 'answer';
        textareaElement.id = 'descriptive-answer';
        textareaElement.placeholder = 'Your answer...';

        // Check if user has already answered this question
        if (userResponses[currentQuestionIndex]) {
            textareaElement.value = userResponses[currentQuestionIndex];
        }

        questionContainer.appendChild(textareaElement);
    }

    // Function to display question based on its type
    function displayQuestion(question) {
        if (question.type === 'mcq') {
            displayMCQuestion(question);
        } else if (question.type === 'selective') {
            displaySelectiveSectionQuestion(question);
        } else if (question.type === 'short') {
            displayShortAnswerQuestion(question);
        } else if (question.type === 'descriptive') {
            displayDescriptiveAnswerQuestion(question);
        } else {
            // Handle other question types here
        }
    }

    // Function to navigate to previous question
    function goToPreviousQuestion() {
        if (currentQuestionIndex > 0) {
            currentQuestionIndex--;
            displayQuestion(surveyQuestions[currentQuestionIndex]);
        }
    }

    // Function to navigate to next question
    function goToNextQuestion() {
        if (currentQuestionIndex < surveyQuestions.length - 1) {
            currentQuestionIndex++;
            displayQuestion(surveyQuestions[currentQuestionIndex]);
        }
    }

    // Event listeners for navigation buttons
    prevButton.addEventListener('click', goToPreviousQuestion);
    nextButton.addEventListener('click', goToNextQuestion);

    // Fetch survey questions when the page loads
    fetchSurveyQuestions().then(questions => {
        displayQuestion(questions[currentQuestionIndex]);
    });

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

        // selective q
        {
            "id": 11,
            "text": "Which of the following renewable energy sources are you considering for your home? (Check all that apply)",
            "type": "selective",
            "options": [
                { "id": "q11-a", "label": "Solar", "value": "Solar" },
                { "id": "q11-b", "label": "Wind", "value": "Wind" },
                { "id": "q11-c", "label": "Hydroelectric", "value": "Hydroelectric" },
                { "id": "q11-d", "label": "Geothermal", "value": "Geothermal" },
                { "id": "q11-e", "label": "None", "value": "None" }
            ]
        },
        {
            "id": 12,
            "text": "What factors would motivate you to switch to solar energy? (Select all that apply)",
            "type": "selective",
            "options": [
                { "id": "q12-a", "label": "Cost savings", "value": "Cost savings" },
                { "id": "q12-b", "label": "Environmental benefits", "value": "Environmental benefits" },
                { "id": "q12-c", "label": "Government incentives", "value": "Government incentives" },
                { "id": "q12-d", "label": "Energy independence", "value": "Energy independence" },
                { "id": "q12-e", "label": "Other", "value": "Other" }
            ]
        },
        {
            "id": 13,
            "text": "Which of the following concerns you the most about installing solar panels? (Check all that apply)",
            "type": "selective",
            "options": [
                { "id": "q13-a", "label": "Initial cost", "value": "Initial cost" },
                { "id": "q13-b", "label": "Aesthetics of panels", "value": "Aesthetics of panels" },
                { "id": "q13-c", "label": "Maintenance requirements", "value": "Maintenance requirements" },
                { "id": "q13-d", "label": "Effectiveness in varying weather conditions", "value": "Effectiveness in varying weather conditions" },
                { "id": "q13-e", "label": "None", "value": "None" }
            ]
        },
        {
            "id": 14,
            "text": "Which smart technology features would you be interested in integrating into your solar energy system? (Check all that apply)",
            "type": "selective",
            "options": [
                { "id": "q14-a", "label": "Energy monitoring", "value": "Energy monitoring" },
                { "id": "q14-b", "label": "Remote system control", "value": "Remote system control" },
                { "id": "q14-c", "label": "Battery storage integration", "value": "Battery storage integration" },
                { "id": "q14-d", "label": "Automated shading control", "value": "Automated shading control" },
                { "id": "q14-e", "label": "None", "value": "None" }
            ]
        },
        {
            "id": 15,
            "text": "What are your preferred communication channels for receiving updates and information about solar energy? (Check all that apply)",
            "type": "selective",
            "options": [
                { "id": "q15-a", "label": "Email", "value": "Email" },
                { "id": "q15-b", "label": "Phone calls", "value": "Phone calls" },
                { "id": "q15-c", "label": "Social media platforms", "value": "Social media platforms" },
                { "id": "q15-d", "label": "Postal mail", "value": "Postal mail" },
                { "id": "q15-e", "label": "In-person consultations", "value": "In-person consultations" },
                { "id": "q15-f", "label": "None", "value": "None" }
            ]
        },

        {
            "id": 13,
            "text": "What is your estimated annual electricity bill in dollars?",
            "type": "short"
        },
        {
            "id": 14,
            "text": "How many years do you consider an ideal payback period for your solar investment?",
            "type": "short"
        },
        {
            "id": 15,
            "text": "What is the primary reason for your consideration of solar energy?",
            "type": "short"
        },
        {
            "id": 16,
            "text": "What is your biggest concern about adopting solar energy?",
            "type": "short"
        },
        {
            "id": 17,
            "text": "How do you prefer to finance your solar installation?",
            "type": "short"
        },
        {
            "id": 18,
            "text": "Describe any previous experience you have had with renewable energy technologies.",
            "type": "descriptive"
        },
        {
            "id": 19,
            "text": "Provide any additional comments or suggestions you have regarding renewable energy or Solar Energy World's services.",
            "type": "descriptive"
        } 
    ];
});
