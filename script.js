var quotes = [
    "We don't read and write poetry because it's cute. We read and write poetry because we are members of the human race. And the human race is filled with passion. And medicine, law, business, engineering, these are noble pursuits and necessary to sustain life. But poetry, beauty, romance, love, these are what we stay alive for.",
    "To quote from Whitman, 'O me! O life!... of the questions of these recurring; of the endless trains of the faithless... of cities filled with the foolish; what good amid these, O me, O life?' Answer. That you are here — that life exists, and identity; that the powerful play goes on and you may contribute a verse. That the powerful play goes on and you may contribute a verse. What will your verse be?",
    "No matter what anybody tells you, words and ideas can change the world.",
    "There's a time for daring and there's a time for caution, and a wise man understands which is called for.",
    "Just when you think you know something, you have to look at in another way. Even though it may seem silly or wrong, you must try.",
    "But only in their dreams can man be truly free. 'Twas always thus, and always thus will be.",
    "When you read, don't just consider what the author thinks, consider what you think.",
    "Boys, you must strive to find your own voice. Because the longer you wait to begin, the less likely you are to find it at all. Thoreau said, 'Most men lead lives of quiet desperation.' Don't be resigned to that. Break out!",
    "'O Captain, my Captain.' Who knows where that comes from? Anybody? Not a clue? It's from a poem by Walt Whitman about Mr. Abraham Lincoln. Now in this class you can either call me Mr. Keating, or if you're slightly more daring, O Captain, my Captain.",
    "Carpe, carpe. Carpe diem. Seize the day, boys. Make your lives extraordinary."
    ]
    
    function showQuote() {
        var randomNumber = Math.floor(Math.random() * (quotes.length));
        console.log('randomNumber')
        document.getElementById('quote').innerHTML = quotes[randomNumber];
    }
    