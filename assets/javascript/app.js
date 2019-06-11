var box = $('#trivia');





$(document).on('click', '#start', function(e) {
    game.start();
});

$(document).on('click', '#done', function(e) {
    game.done();
});


var questions = [{
    question: "1 . Which one of these is not a member of the Beatles?",
    answers: ["Scott Hutchinson", "John Lennon", "Paul McCartney", "George Harrison"],
    rightAnswer: "Scott Hutchinson"
}, {
    question: "2 . What is likely age of the universe?",
    answers: ["6000 Years", "85 million Years", "13 billion Years", "14 trillion Years"],
    rightAnswer: "13 billion Years"
}, {
    question: "3 . Which one of these is not a primary color?",
    answers: ["Red", "Orange", "Green", "Blue"],
    rightAnswer: "Orange"
}, {
    question: "4 . Which was the first President of the Russian Federation?",
    answers: ["Ivan Drago", "Mikhail Kalashnikov", "Fyodor Dostoyevsky", "Boris Yeltsin"],
    rightAnswer: "Boris Yeltsin"
}, {
    question: "5 . For what team did Moses Malone win an NBA championship?",
    answers: ["Nuggets", "Lakers", "Utah Jazz", "Sixers"],
    rightAnswer: "Sixers"
}, {
    question: "6 . What's the capital of Australia?",
    answers: ["Melbourne", "Canberra", "Sydney", "Perth"],
    rightAnswer: "Canberra"
}, {
    question: "7 . What type of radiation do black holes Emit?",
    answers: ["Schawrzer Radiation", "Castor Radiation", "Bose-Einstein Radiation", "Hawking Radiation"],
    rightAnswer: "Hawking Radiation"
}, {
    question: "8 . What's Viking explorer discovered New Foundland?",
    answers: ["Leif Eriksen", "Vagnar Nurmbald", "Selief Seligson", "Johnny Jim Phipps"],
    rightAnswer: "Leif Eriksen"
}];

var game = {
    right: 0,
    wrong: 0,
    counter: 45,
    countdown: function() {
        game.counter--;
        $('#counter-number').html(game.counter);

        if (game.counter === 0) {
            console.log('TIME UP');
            game.done();
        }
    },
    start: function() {
        timer = setInterval(game.countdown, 1000);

        $('#subwrapper').prepend('<h2>Time Remaining: <span id="counter-number">45</span> Seconds</h2>');
        $('#start').remove();


        for (var i = 0; i < questions.length; i++) {
            box.append('<h2>' + questions[i].question + '</h2>');
            for (var j = 0; j < questions[i].answers.length; j++) {
                box.append('<input type="radio" name="question' + '-' + i + '" value="' + questions[i].answers[j] + '">' + questions[i].answers[j]);
            }
        }

        box.append('<button id="done">Done</button>');
    },
    done: function() {


        $.each($("input[name='question-0']:checked"), function() {
            if ($(this).val() == questions[0].rightAnswer) {
                game.right++;
            } else {
                game.right++;
            }
        });
        $.each($("input[name='question-1']:checked"), function() {
            if ($(this).val() == questions[1].rightAnswer) {
                game.right++;
            } else {
                game.wrong++;
            }
        });
        $.each($("input[name='question-2']:checked"), function() {
            if ($(this).val() == questions[2].rightAnswer) {
                game.right++;
            } else {
                game.wrong++;
            }
        });
        $.each($("input[name='question-3']:checked"), function() {
            if ($(this).val() == questions[3].rightAnswer) {
                game.right++;
            } else {
                game.wrong++;
            }
        });
        $.each($("input[name='question-4']:checked"), function() {
            if ($(this).val() == questions[4].rightAnswer) {
                game.right++;
            } else {
                game.wrong++;
            }
        });
        $.each($("input[name='question-5']:checked"), function() {
            if ($(this).val() == questions[5].rightAnswer) {
                game.right++;
            } else {
                game.wrong++;
            }
        });
        $.each($("input[name='question-6']:checked"), function() {
            if ($(this).val() == questions[6].rightAnswer) {
                game.right++;
            } else {
                game.wrong++;
            }
        });
        $.each($("input[name='question-7']:checked"), function() {
            if ($(this).val() == questions[7].rightAnswer) {
                game.right++;
            } else {
                game.wrong++;
            }
        });

        this.result();
    },
    result: function() {

        clearInterval(timer);

        $('#subwrapper h2').remove();
        box.html('<h2>All Done!</h2>');
        box.append('<h3>Right Answers: ' + this.right + '</h3>');
        box.append('<h3>Wrong Answers: ' + this.wrong + '</h3>');
        box.append('<h3>Not Answered: ' + (questions.length - (this.wrong + this.right)) + '</h3>');
    }

};