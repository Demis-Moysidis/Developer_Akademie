let questions = [
    {
        "question": "Wer hat HTML erfunden?",
        "answer_1": "Robbie Williams",
        "answer_2": "Lady Gaga",
        "answer_3": "Tim Berners-Lee",
        "answer_4": "Justin Bieber",
        "right_answer": 3
    },
    {
        "question": "Was bedeutet das HTML Tag &lt;a&gt;?",
        "answer_1": "Text Fett",
        "answer_2": "Container",
        "answer_3": "Ein Link",
        "answer_4": "Kursiv",
        "right_answer": 3
    },
    {
        "question": "Wie bindet man eine Webseite in eine Webseite ein?",
        "answer_1": "&lt;iframe&gt;, &lt;frame&gt;, and &lt;frameset&gt;",
        "answer_2": "&lt;iframe&gt;",
        "answer_3": "&lt;frame&gt;",
        "answer_4": "&lt;frameset&gt;",
        "right_answer": 2
    },
    {
        "question": "Wie stellt man Text am BESTEN fett dar?",
        "answer_1": "&lt;strong&gt;",
        "answer_2": "CSS nutzen",
        "answer_3": "&lt;bold&gt;",
        "answer_4": "&lt;b&gt;",
        "right_answer": 1
    },
    {
        "question": "Welches Attribut kann man NICHT für Textarea verwenden?",
        "answer_1": "readonly",
        "answer_2": "max",
        "answer_3": "from",
        "answer_4": "spellcheck",
        "right_answer": 1
    },
    {
        "question": "Wie wählst du alle Elemente vom Typ &lt;a&gt; mit dem Attribut title aus?",
        "answer_1": "a[title]{...}",
        "answer_2": "a > title  {...}",
        "answer_3": "a.title {...}",
        "answer_4": "a=title {...}",
        "right_answer": 1
    },
    {
        "question": "Wie definiert man in JavaScript eine Variable?",
        "answer_1": "let 100 = rate;",
        "answer_2": "100 = let rate;",
        "answer_3": "rate = 100;",
        "answer_4": "let rate = 100;",
        "right_answer": 4
    }
]

let currentQuestion = 0;
let rightQuestions = 0;
let AUDIO_SUCCESS = new Audio('./assets/audio/correct.mp3');
let AUDIO_FAIL = new Audio('./assets/audio/wrong.mp3');

function init(){}

function showQuestion(){
    if(gameIsOver()){
        showEndScreen();
    }else{
        updateProgressBar();
        updateToNextQuestion();
    }
}

function gameIsOver(){
    return currentQuestion >= questions.length;
}

function updateProgressBar(){
    let percent = (currentQuestion + 1) / questions.length;
    percent = Math.round(percent * 100);
    document.getElementById('progress-bar').innerHTML = `${percent} %`;
    document.getElementById('progress-bar').style.width = `${percent}%`;
}

function updateToNextQuestion(){
    let question = questions[currentQuestion];
    document.getElementById('question-number').innerHTML = currentQuestion + 1;
    document.getElementById('question-text').innerHTML = question['question'];
    document.getElementById('answer_1').innerHTML = question['answer_1'];
    document.getElementById('answer_2').innerHTML = question['answer_2'];
    document.getElementById('answer_3').innerHTML = question['answer_3'];
    document.getElementById('answer_4').innerHTML = question['answer_4'];
}

function showEndScreen(){
    document.getElementById('endScreen').style = '';
    document.getElementById('questionBody').style = 'display: none';

    document.getElementById('amount-of-questions').innerHTML = questions.length;
    document.getElementById('amount-of-right-questions').innerHTML  = rightQuestions;

    // document.getElementById('header-img').src = './assets/imgs/trophy.png';
}

function answer(selection){
    let question = questions[currentQuestion];

    let selectedQuestionNumber = selection.slice(-1);

    let idOfRightAnswer = `answer_${question['right_answer']}`

    if(rightAnswerSelected(selectedQuestionNumber, question)){
        document.getElementById(selection).parentNode.classList.add('bg-success');
        document.getElementById(selection).previousElementSibling.classList.add('bg-green');
        AUDIO_SUCCESS.play();
        rightQuestions++;
    }else{
        document.getElementById(selection).parentNode.classList.add('bg-danger');
        document.getElementById(selection).previousElementSibling.classList.add('bg-red');
        document.getElementById(idOfRightAnswer).parentNode.classList.add('bg-success');
        document.getElementById(idOfRightAnswer).previousElementSibling.classList.add('bg-green');
        AUDIO_FAIL.play();
    }

    document.getElementById('next-button').disabled = false;
}

function rightAnswerSelected(selectedQuestionNumber, question){
    return selectedQuestionNumber == question['right_answer'];
}

function nextQuestion(){
    currentQuestion++;
    document.getElementById('next-button').disabled = true;
    resetAnswerButtons();
    showQuestion();
}

function resetAnswerButtons(){
    document.getElementById('answer_1').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_1').parentNode.classList.remove('bg-success');
    document.getElementById('answer_1').previousElementSibling.classList.remove('bg-green');
    document.getElementById('answer_1').previousElementSibling.classList.remove('bg-red');

    document.getElementById('answer_2').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_2').parentNode.classList.remove('bg-success');
    document.getElementById('answer_2').previousElementSibling.classList.remove('bg-green');
    document.getElementById('answer_2').previousElementSibling.classList.remove('bg-red');

    document.getElementById('answer_3').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_3').parentNode.classList.remove('bg-success');
    document.getElementById('answer_3').previousElementSibling.classList.remove('bg-green');
    document.getElementById('answer_3').previousElementSibling.classList.remove('bg-red');

    document.getElementById('answer_4').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_4').parentNode.classList.remove('bg-success');
    document.getElementById('answer_4').previousElementSibling.classList.remove('bg-green');
    document.getElementById('answer_4').previousElementSibling.classList.remove('bg-red');
}

function restartGame(){
    // document.getElementById('header-img').src = './assets/imgs/pencil.jpg';

    document.getElementById('questionBody').style = '';
    document.getElementById('endScreen').style = 'display: none';

    currentQuestion = 0;
    rightQuestions = 0;

    startGame();
}

function startGame(){
    document.getElementById('questionBody').style = '';
    document.getElementById('startScreen').style = 'display: none';

    document.getElementById('all-questions').innerHTML = questions.length;
    showQuestion();
}