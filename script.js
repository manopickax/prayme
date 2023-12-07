document.getElementById("prayButton").addEventListener("click", function() {
    incrementPrayerCount();
    redirectToOutputPage();
});

function redirectToOutputPage() {
    window.location.href = "output.html";
}

function incrementPrayerCount() {
    let prayerCount = localStorage.getItem("prayerCount") || 0;
    prayerCount++;
    localStorage.setItem("prayerCount", prayerCount);
}

