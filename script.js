document.addEventListener("DOMContentLoaded", function () {
    const today = new Date();
    const valentineDays = [
        { id: "rose", date: "2025-02-07" },
        { id: "propose", date: "2025-02-08" },
        { id: "chocolate", date: "2025-02-09" },
        { id: "teddy", date: "2025-02-10" },
        { id: "promise", date: "2025-02-11" },
        { id: "hug", date: "2025-02-12" },
        { id: "kiss", date: "2025-02-13" },
        { id: "valentine", date: "2025-02-14" }
    ];

    valentineDays.forEach(day => {
        const link = document.getElementById(day.id);
        const unlockDate = new Date(day.date);

        if (today < unlockDate) {
            link.classList.add("locked");
            link.setAttribute("title", "This will unlock on " + day.date);
        }
    });

    // Floating heart animation
    function createHeart() {
        const heart = document.createElement("div");
        heart.className = "heart";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.animationDuration = Math.random() * 2 + 3 + "s";
        document.body.appendChild(heart);
        setTimeout(() => heart.remove(), 5000);
    }

    setInterval(createHeart, 500);
});
