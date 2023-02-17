const typing_ground = document.querySelector('#textarea');
const btn = document.querySelector('#btn');
const score = document.querySelector('#score');
const show_sentence = document.querySelector('#showSentence');

let startTime, endTime, totalTimeTaken;


const sentences = ['The quick brown fox jumps over the lazy dog 4',
'The five boxing wizards jump quickly',
'How vexingly quick daft zebras jump',
'Sphinx of black quartz, judge my vow',
'Pack my box with five dozen liquor jugs',
'Jackdaws love my big sphinx of quartz',
'Quick zephyrs blow, vexing daft Jim',
'Waltz, bad nymph, for quick jigs vex',
'The jay, pig, fox, zebra and my wolves quack',
'Amazingly few discotheques provide jukeboxes',
'Just keep examining every low bid quoted for zinc etchings',
'The quick onyx goblin jumps over the lazy dwarf',
'The public was amazed to view the quickness and dexterity of the juggler',
'The job requires extra pluck and zeal from every young wage earner',
'The explorer was frozen in his big kayak just after making queer discoveries',
]

const calculateTypingSpeed = (time_taken) => {
    let  totalWords = typing_ground.value.trim();
    let actualWords = totalWords === '' ? 0 : totalWords.split(" ").length;

    if(actualWords !== 0) {
        let typing_speed  =  (actualWords / time_taken) * 60;
        typing_speed = Math.round(typing_speed);
        score.innerHTML = `Your typing speed is ${typing_speed} words per minutes & you wrote ${actualWords} words & time taken ${time_taken} sec`;
    }else{
        score.innerHTML = `Your typing speed is 0 words per minutes & time taken ${time_taken} sec`;
    }
}
const endTypingTest = () => {
    btn.innerText = "Start";

    let date = new Date();
    endTime = date.getTime();

    totalTimeTaken = (endTime -startTime) / 1000;

    calculateTypingSpeed(totalTimeTaken);

    show_sentence.innerHTML = "";
    typing_ground.value = "";
}

const startTyping = () => {
    let randomNumber = Math.floor(Math.random() * sentences.length);
   
    show_sentence.innerHTML = sentences[randomNumber];

    let date = new Date();
    startTime = date.getTime();

    btn.innerText = "Done";
}





btn.addEventListener('click', () => {
    switch (btn.innerText.toLowerCase()) {
        case "start":
            typing_ground.removeAttribute('disabled');
            startTyping();
            break;

        case "done":
            typing_ground.setAttribute('disabled' , 'true');
            endTypingTest();
            break;
    }
})
