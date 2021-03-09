function first() {
    // Some actions
    setTimeout( function(){
        console.log(1, "1.");

    }, 500 );
}

function second(){
    console.log("4.");
}

first();
second();

function learnJS(lang, callback) {
    console.log("3. i just finished 2.13 lesson1 " + lang);
    callback();
}

function done() {
    console.log("2. i just finished lesseon2.13")
}

learnJS("Abracadabra", done);
