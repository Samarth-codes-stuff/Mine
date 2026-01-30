/* 💖 ROMANTIC QUOTES */
function loadQuotes() {
    const quotes = [
        "You are the prettiest, most beautiful soul I know.",
        "Everything feels softer when you’re around.",
        "Your smile is my favorite sight.",
        "You make my heart feel calm and full at the same time.",
        "If I had to choose a happy place, it would be right next to you.",
        "You don’t try to be special — you just are."
    ];

    let index = 0;
    const target = document.getElementById("quotes");

    function showQuote() {
        target.innerHTML = quotes[index];
        index = (index + 1) % quotes.length;
    }

    showQuote();
    setInterval(showQuote, 3000);
}

/* 🐱 CUTE CAT IMAGES */
function loadCats() {
    const gallery = document.getElementById("catGallery");

    for (let i = 0; i < 6; i++) {
        const img = document.createElement("img");
        img.src = "https://cataas.com/cat?width=300&height=300&random=" + i;
        img.alt = "Cute Cat 🐱";
        gallery.appendChild(img);
    }
}
/* ❤️🤗 FLOATING HEARTS & HUG EMOJIS */
function startFloatingEmojis() {
    const emojis = ["❤️", "💖", "💕", "🤗"];

    setInterval(() => {
        const emoji = document.createElement("div");
        emoji.className = "floating-emoji";
        emoji.innerText = emojis[Math.floor(Math.random() * emojis.length)];

        emoji.style.left = Math.random() * 100 + "vw";
        emoji.style.fontSize = (Math.random() * 25 + 20) + "px";
        emoji.style.animationDuration = (Math.random() * 3 + 6) + "s";

        document.body.appendChild(emoji);

        setTimeout(() => {
            emoji.remove();
        }, 9000);
    }, 500);
}

startFloatingEmojis();


