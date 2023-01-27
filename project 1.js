let btn = document.querySelector("#new-quote");
let quote = document.querySelector(".text-area");
let person = document.querySelector(".person");
const quotes = [
    {
        quote: '"The greatest glory in living lies not in never falling, but in rising every time we fall."',
        person: " Nelson Mandela ",
    },
    {
        quote: '"The way to get started is to quit talking and begin doing."',
        person: " Walt Disney ",
    },
    {
        quote: "\"Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma which is living with the results of other people's thinking.\"",
        person: " Steve Jobs ",
    },
    {
        quote: '"If life were predictable it would cease to be life, and be without flavor."',
        person: " Eleanor Roosevelt ",
    },
    {
        quote: "\"If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.\"",
        person: " Oprah Winfrey ",
    },
];

let previousRandom;
btn.addEventListener("click", function () {
    let random = Math.floor(Math.random() * quotes.length);

    while (previousRandom === random) {
        random = Math.floor(Math.random() * quotes.length);
    }
    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;
    previousRandom = random;
});
