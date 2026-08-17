const letters = {

    1: {
        tag: "A LITTLE LETTER",
        title: "For You ❤️",

        content: `
            <p>
                Happy birthday! 🎂
            </p>

            <p>
                I know I could've just sent you a simple
                birthday greeting, but where's the fun in that?
            </p>

            <p>
                So I made this little corner of the internet
                just for you.
            </p>

            <p>
                I hope today gives you the same happiness
                you give to the people around you.
            </p>

            <p class="signature">
                — with love ♡
            </p>
        `
    },


    2: {
        tag: "THE IMPORTANT ONE",
        title: "A Special Message 💌",

        content: `
            <p>
                Happy birthday to someone
                who deserves all the good things.
            </p>

            <p>
                I hope this new chapter brings you
                countless reasons to laugh,
                unforgettable adventures,
                and moments you'll want to keep forever.
            </p>

            <p>
                And whenever things get a little difficult,
                I hope you remember that there are people
                cheering for you.
            </p>

            <p>
                Especially me. ❤️
            </p>

            <p class="signature">
                — always
            </p>
        `
    },


    3: {
        tag: "ONE MORE THING",
        title: "Before You Go ✨",

        content: `
            <p>
                Okay... one last thing.
            </p>

            <p>
                Thank you for being you.
            </p>

            <p>
                For the laughs, the random conversations,
                the memories, and all the little moments
                that somehow become the best ones.
            </p>

            <p>
                Here's to another year of adventures,
                happiness, and memories worth keeping.
            </p>

            <p>
                Happy birthday! 🎂❤️
            </p>

            <p class="signature">
                — yours truly
            </p>
        `
    }

};


/* =====================================
   OPEN GIFT
===================================== */

function openGift(number) {

    const modal =
        document.getElementById("modal");

    const content =
        document.getElementById("letterContent");

    const selected =
        letters[number];


    content.innerHTML = `

        <div class="letter-tag">
            ${selected.tag}
        </div>

        <h2>
            ${selected.title}
        </h2>

        ${selected.content}

    `;


    modal.classList.add("active");


    createConfetti(12);

}


/* =====================================
   CLOSE GIFT
===================================== */

function closeGift() {

    document
        .getElementById("modal")
        .classList.remove("active");

}


/* =====================================
   CLICK OUTSIDE LETTER
===================================== */

document
    .getElementById("modal")
    .addEventListener("click", function(event) {

        if (
            event.target.classList.contains("modal-backdrop")
        ) {

            closeGift();

        }

    });


/* =====================================
   ESCAPE KEY
===================================== */

document.addEventListener(
    "keydown",
    function(event) {

        if (event.key === "Escape") {

            closeGift();

        }

    }
);


/* =====================================
   CONFETTI
===================================== */

function createConfetti(amount = 30) {

    const container =
        document.getElementById("confetti");


    const colors = [
        "#ff6f91",
        "#ffb4c6",
        "#e7b86a",
        "#ffffff",
        "#a878ff"
    ];


    for (let i = 0; i < amount; i++) {

        const piece =
            document.createElement("div");


        piece.className =
            "confetti-piece";


        piece.style.left =
            Math.random() * 100 + "vw";


        piece.style.background =
            colors[
                Math.floor(
                    Math.random() * colors.length
                )
            ];


        piece.style.animationDuration =
            (2 + Math.random() * 3) + "s";


        piece.style.animationDelay =
            Math.random() * .5 + "s";


        piece.style.transform =
            `rotate(${Math.random() * 360}deg)`;


        container.appendChild(piece);


        setTimeout(() => {

            piece.remove();

        }, 5500);

    }

}