const quotes = [
    {
        quote: "수고했어, 오늘도",
        author: "-옥상달빛-",
    },
    {
        quote: "나만 아니면 돼~~~~",
        author: "-강호동-",
    },
    {
        quote: "바위처럼 단단하게",
        author: "-말파이트-",
    },
    {
        quote: "변화란 좋은거야",
        author: "-카직스-",
    },
    {
        quote: "그림자 군도의 위력을 똑똑히 봐라",
        author: "-헤카림-",
    },
    {
        quote: "신나게 놀아볼까?",
        author: "-징크스-",
    },
    {
        quote: "미안하다.. 이거 보여주려고",
        author: "-어그로-",
    },
    {
        quote: "선 넘네",
        author: "-둘리-",
    },
    {
        quote: "호잇 호잇",
        author: "-둘리-",
    },
    {
        quote: "난 해적왕이 될거야",
        author: "-루피-",
    },
]

const quote = document.querySelector("#quote div:first-child");
const author = document.querySelector("#quote div:last-child");

const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;