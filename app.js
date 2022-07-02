function askMarvelmovies() {
    let movies = prompt('How man Marvel movies are out?');
    let message;
    if (movies <= 10) {
        message = 'Way Moooore!';
    } else if (movies <= 20) {
        message = 'Almost there!';
    } else if (movies <= 30) {
        message = 'Almost almost there';
    } else {
        message = 'You know your stuff!';
        askMarvelmovies();
    }
    document.write(message);
    // return message;
};

// askMarvelmovies();
function addNumbers(x, y) {
    return x + y;
}

function favAvenger() {
    let usersAvenger = prompt("Who is your favorite Avenger?").toLowerCase();
    if (usersAvenger === "iron man") {
        document.write("I am Iron Man!");
    } else if (usersAvenger === "thor") {
        document.write("Well he is a space angel!");
    } else {
        document.write("That's a good one.");
    }
}

// favAvenger();38

function frustration() {
    const userNum = prompt("How did I feel making this?");
    // for (let i = 0; i < userNum; i++) {
        document.write("<iframe src=\"https://giphy.com/embed/l9Jhzwdi09Ve0\" width=\"480\" height=\"366\" frameBorder=\"0\" class=\"giphy-embed\" allowFullScreen></iframe>");
    document.write(username);
}