document.addEventListener('DOMContentLoaded', function() {
    
    let randomNumber = Math.floor(Math.random() * 100) + 1;
    let attemptsLeft = 10;
    let prevGuesses = [];

    const submitBtn = document.getElementById('subt');
    const guessInput = document.getElementById('guessField');
    const resultDisplay = document.querySelector('.result');
    const feedbackDisplay = document.querySelector('.feedback');
    const guessesDisplay = document.querySelector('.guesses');

    submitBtn.addEventListener('click', function() {
        let userGuess = parseInt(guessInput.value);
        
        // Validate user input
        if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
            alert('Please enter a valid number between 1 and 100.');
            return;
        }

        // Add user guess to previous guesses array
        prevGuesses.push(userGuess);
        guessesDisplay.textContent = `Previous guesses: ${prevGuesses.join(', ')}`;

        // Check if the guess is correct
        if (userGuess === randomNumber) {
            resultDisplay.textContent = 'Congratulations! You got it right!';
            resultDisplay.style.backgroundColor = 'green';
            feedbackDisplay.textContent = '';
            gameOver();
        } else {
            // Provide feedback on the guess
            if (userGuess < randomNumber) {
                feedbackDisplay.textContent = 'Last guess was too low!';
            } else {
                feedbackDisplay.textContent = 'Last guess was too high!';
            }
            resultDisplay.textContent = 'Wrong!';
            resultDisplay.style.backgroundColor = 'red';
            attemptsLeft--;
            if (attemptsLeft === 0) {
                resultDisplay.textContent = 'Game over! The correct number was ' + randomNumber;
                gameOver();
            }
        }

        // Clear the input field
        guessInput.value = '';
        guessInput.focus();
    });

    function gameOver() {
        guessInput.disabled = true;
        submitBtn.disabled = true;
    }
});
