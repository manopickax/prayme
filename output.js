document.getElementById("backButton").addEventListener("click", function() {
    redirectToIndexPage();
});

function redirectToIndexPage() {
    window.location.href = "index.html";
}

document.getElementById("backButton").addEventListener("click", function() {
    redirectToIndexPage();
});

function redirectToIndexPage() {
    window.location.href = "index.html";
}

document.addEventListener("DOMContentLoaded", function() {
    displayPrayerCount();
    displayRandomMessage();
});

function displayPrayerCount() {
    let prayerCount = localStorage.getItem("prayerCount") || 0;
    document.getElementById("prayerCount").textContent = prayerCount;
}

function displayRandomMessage() {
    const messages = [
        "신의 가호가 함께 하기를",
        "평안과 기쁨이 당신과 함께 하길",
        "건강과 행복이 당신을 감싸길",
        "사랑과 이해가 너를 둘러싸기를"
    ];

    const randomIndex = Math.floor(Math.random() * messages.length);
    const randomMessage = messages[randomIndex];

    const messageElement = document.createElement("p");
    messageElement.textContent = randomMessage;
    messageElement.classList.add("random-message");

    const centerContainer = document.querySelector(".center-container");
    centerContainer.insertBefore(messageElement, centerContainer.firstChild);
}
