
const debug = true;


var body = document.getElementsByTagName('body')[0];
var result = document.getElementsByClassName('number')[0];
var message = document.getElementsByClassName('message')[0];
var input = document.getElementsByClassName('guess')[0];
var btn_again = document.getElementsByClassName('again')[0];
var btn_check = document.getElementsByClassName('check')[0];
var label_score = document.getElementsByClassName('label-score')[0];
var label_highscore = document.getElementsByClassName('label-highscore')[0];


var store = {};


window.onload = (event) => {
    if (debug) console.info("page is fully loaded");

    init_game();

    btn_again.addEventListener("click", () => {
        if (debug) console.info('btn_again: clicked');
        new_game();
    });

    btn_check.addEventListener("click", () => {
        if (debug) console.info('btn_check: clicked');

        let value = parseInt(input.value);

        if (value >= 1 && value <= 20) {
            if (value === get_guest_number()) {
                decrease_score(1);
                if (get_score() > get_highscore()) {
                    set_highscore(get_score());
                }
                result.innerText = value;
                message.innerText = "hoorah ... :)";
                change_body_background_color('success');
                setTimeout(function() {
                    new_game();
                }, 2000);
            } else {
                if (get_score() <= 1) {
                    set_score(0);
                    message.innerText = "you have failed :( \r\n\r\n > click on `Again !` to start a new game";
                    setTimeout(function() {
                        change_body_background_color('failed');
                    }, 1000);
                } else {
                    if (value > get_guest_number()) {
                        message.innerText = "too high ... :(";
                    } else {
                        message.innerText = "too low ... :(";
                    }
                    decrease_score(1);
                    if (debug) console.info('message.innerText: ', message.innerText);
                }
            }
        } else {
            message.innerText = "unauthorized value ... :( \r\n\r\n > choose between 1 & 20";
            change_body_background_color('failed');
            if (debug) console.info('message.innerText: ', message.innerText);
        }
    });
};

function init_game() {
    new_game();
    set_highscore(0);
}

function new_game() {
    set_guest_number(random(1, 20));
    input.value = "";
    result.innerText = "?";
    message.innerText = "Start guessing ...";
    set_score(20);
}

function reset() {
    set_score(0);
}

function set_guest_number(value) {
    store.guest_number = value;
    if (debug) console.info('guest_number', get_guest_number('guest_number'));
}

function get_guest_number() {
    return parseInt(store.guest_number);
}

function set_score(value) {
    store.score = value;
    label_score.innerText = `Score: ${value}`;
    if (debug) console.info('score: ', value);
}

function get_score() {
    return parseInt(store.score);
}

function decrease_score(value) {
    let score = get_score() - value;
    if (get_score() > 0) {
        set_score(score);
    } else {
        if (debug) console.info('decrease_score: unable to decrease, score is ', score);
    }
    if (debug) console.info('score: ', score);
}

function set_highscore(value) {
    store.highscore = value;
    label_highscore.innerText = `Highscore: ${value}`;
    if (debug) console.info('highscore: ', value);
}

function get_highscore() {
    return parseInt(store.highscore);
}

function random(min, max) {
    return Math.floor(Math.random() * max) + min;
}

function change_body_background_color(status) {
    // status in ['success', 'failed']

    if(status === 'failed') var targetColor = '#f44336'; // Red
    if(status === 'success') var targetColor = '#4caf50'; // Green
  
    var current_color = document.body.style.backgroundColor; // #222

    document.body.style.backgroundColor = targetColor;

    document.body.style.transition = 'background-color 2s';
  
    // fade back to the initial color
    setTimeout(function() {
        document.body.style.backgroundColor = current_color;
    }, 2000);
}












