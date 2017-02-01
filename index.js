// private

const makeDataObject = (image, text) => {
    return {
        image: image,
        text: text
    }
};

const setInnerHtml = (element, html) => {
    element.innerHTML = html;
};

const shuffleArray = (array) => {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
};

const makeGreatData = (data, america) => {
    let newData = [];
    shuffleArray(data)
        .map((peep, index) => {
            if (index % 3 === 0 && index !== 0) {
                newData.push(america)
            }
            newData.push(peep)
        });
    return newData
};

//end private

const data = [
    makeDataObject("<img class='picture' src='./images/people-05.svg'>", "Yo"),
    makeDataObject("<img class='picture' src='./images/people-06.svg'>", "Hi"),
    makeDataObject("<img class='picture' src='./images/cat.jpg'>", "cats!"),
    makeDataObject("<img class='picture' src='./images/cat.jpg'>", "1"),
    makeDataObject("<img class='picture' src='./images/cat.jpg'>", "2"),
    makeDataObject("<img class='picture' src='./images/cat.jpg'>", "3"),
];

const america = makeDataObject("<img class='picture' src='./images/elliot.jpg'>", "<span class='america'>AMERICA!</span>");

const peeps$ = () => {
    return Rx.Observable.from(makeGreatData(data, america));
};

const updateThatDom = (peep) => {
    setInnerHtml(document.getElementsByClassName("picture")[0], peep.image);
    setInnerHtml(document.getElementsByClassName("text")[0], peep.text);
};

const time$ = Rx.Observable.interval(1000);

const pictureTimeStream = () => {
    return time$
        .zip(peeps$(), (time, peep) => peep)
        .startWith(america)
};

pictureTimeStream()
    .subscribe(
        (peep) => updateThatDom(peep),
        () => {
        },
        (() => pictureTimeStream$.subscribe(
            (peep) => updateThatDom(peep)
        )));