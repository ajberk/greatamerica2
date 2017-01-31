
const makeDataObject = (image, text) => {
    return {
        image: image,
        text: text
    }
};

const setInnerHtml = (element, html) => {
    element.innerHTML = html;
};


const peeps$ = Rx.Observable
    .from([
        makeDataObject("<img class='picture' src='./images/people-05.svg'>", "Yo"),
        makeDataObject("<img class='picture' src='./images/people-06.svg'>", "Hi")
    ])
    .startWith(makeDataObject("IMAGE", "GREETING"));

const time$ = Rx.Observable.interval(1000);
time$.zip(peeps$).repeat().subscribe(([time, peep]) =>  {
    setInnerHtml(document.getElementsByClassName("picture")[0], peep.image);
    setInnerHtml(document.getElementsByClassName("text")[0], peep.text);
});