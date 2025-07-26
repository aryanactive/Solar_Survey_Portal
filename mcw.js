// Function to display multiple choice questions
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

// Update the displayQuestion function to handle different question types
function displayQuestion(question) {
    if (question.type === 'mcq') {
        displayMCQuestion(question);
    } else {
        // Handle other question types here
    }
}
