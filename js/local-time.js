function updateLocalTime() {

    const time = new Intl.DateTimeFormat("en-IN", {

        timeZone: "Asia/Kolkata",

        hour: "2-digit",

        minute: "2-digit",

        second: "2-digit",

        hour12: true

    }).format(new Date());

    document.getElementById("local-time").textContent =
        `Ahmedabad • ${time} IST`;

}

updateLocalTime();

setInterval(updateLocalTime, 1000);

document.getElementById("current-year").textContent =
    new Date().getFullYear();