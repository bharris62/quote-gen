var quotes = [{
  'author': 'Alice Roosevelt Longworth',
  'quote': "If you haven't got anything nice to say about anybody, come sit next to me."
}, {
  'author': 'Dr. Seus',
  'quote': "Don't cry because it's over, smile  because it happened."
}, {
  'author': 'Oscar Wilde',
  'quote': "Be yourself; everyone else is already  taken."
}, {
  'author': "Marcus Tullius Cicero",
  'quote': "A room without books is like a body without a soul."
}, {
  'author': "Mark Twain",
  'quote': "If you tell the truth, you don't have to remember anything."
}, {
  'author': "Ralph Waldo Emerson",
  'quote': "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment."
}, {
  'author': "Allen Saunders",
  'quote': "Life is what happens to you while you're busy making other plans."
}, {
  'author': "Bill Keane",
  'quote': "Yesterday is history, tomorrow is a mystery, today is a gift of God, which is why we call it the present."
}, {
  'author': "Bridger Winegar",
  "quote": "If people say they just love the smell of books, I always want to pull them aside and ask, To be clear, do you know how reading works?"
}, {
  'author': "Demetri Martin",
  "quote": 'I\’m writing my book in fifth person, so every sentence starts out with: “I heard from this guy who told somebody …”'
}, {
  'author': "Jay Leno",
  "quote": "A Canadian psychologist is selling a video that teaches you how to test your dog\’s IQ. Here\’s how it works: If you spend $12.99 for the video, your dog is smarter than you."
}, {
  'author': "Rita Rudner",
  "quote": "We’ve begun to long for the pitter-patter of little feet, so we bought a dog. It’s cheaper, and you get more feet."
}, {
  'author': "Adam Gropman",
  "quote": "Here\’s some advice: At a job interview, tell them you’re willing to give 110 percent. Unless the job is a statistician."
}, {
  'author': "Anon",
  "quote": "Nature abhors a vacuum, but not as much as a cat does."
}, {
  'author': "Neil DeGrasse Tyson",
  "quote": "Does it disturb anyone else that “The Los Angeles Angels” baseball team translates directly to “The The Angels Angels”?"
}, {
  'author': "Jerry Seinfeld",
  "quote": "My parents didn’t want to move to Florida, but they turned 60 and that’s the law."
}, ]

document.getElementById("myquote").innerHTML = "Click 'New Quote' To get A Quote!";

function newQuote() {
  var randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  var q = randomQuote.quote;
  var a = randomQuote.author;

  document.getElementById("myquote").innerHTML = q;
  document.getElementById("myauthor").innerHTML = '-' + a;

}
