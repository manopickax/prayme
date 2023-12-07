document.getElementById("backButton").addEventListener("click", function() {
    redirectToIndexPage();
});

function redirectToIndexPage() {
    window.location.href = "index.html";
}

document.addEventListener("DOMContentLoaded", function() {
    displayPrayerCount();
});

function displayPrayerCount() {
    let prayerCount = localStorage.getItem("prayerCount") || 0;
    document.getElementById("prayerCount").textContent = prayerCount;
}
