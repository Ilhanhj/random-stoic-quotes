var quotes = [
  "The best answer to anger is silence. <br><br>- Marcus Aurelius",
  "The more we value things outside our control, the less control we have.<br><br> - Marcus Aurelius",
  "The best revenge is not be like your enemy. <br><br> - Marcus Aurelius",
  "We suffer more often in imagination than in reality. <br><br> - Seneca",
  "Difficulty comes from our lack of confidence. <br><br> - Seneca",
  "Wealth is the slave of a wise man and the master of a fool. <br><br> - Seneca",
  "No great things id created suddenly.  <br><br> - Epictetus",
  "We have two ears and one mouth so that we can listen twice as much as we speak. <br><br> - Epictetus",
  "Since every man dies, it is better to die with distinction than to live long. <br><br> - Musonius Rufus",
  "Waste no more time arguing what a good man should be. Be One. <br><br> - Marcus Aurelius",
  "Curb your desire—dont set your heart on so many things and you will get what you need. <br><br> - Epictetus",
  "He who fears death will never do anything worth of a man who is alive. <br><br> - Seneca",
  "Life is very short and anxious for those who forget the past, neglect the present, and fear the future. <br><br> - Seneca",
  "We should always be asking ourselves: Is this something that is, or is not, in my control ?. <br><br> - Epictetus",
  "Just keep in mind: the more we value things outside our control, the less control we have. <br><br> - Epictetus",
  "Be tolerant with others and strict with yourself. <br><br> - Marcus Aurelius",
];

function newQuote() {
  var randomNumber = Math.floor(Math.random() * quotes.length);
  document.querySelector(".quotes").innerHTML = quotes[randomNumber];
}

const darkmode = document.querySelector(".darkmode");
darkmode.addEventListener("click", function () {
  var darkmode = document.body;
  darkmode.classList.toggle("bg");
  darkmode.classList.toggle("dark-mode");
});
