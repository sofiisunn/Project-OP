const resultsText = localStorage.getItem("results");

let results;
if (resultsText !== null) {
    results = JSON.parse(resultsText);
} else {
    results = [];
};

const box = document.getElementById("results_list");

if (results.length === 0) {
    box.textContent = "Немає збережених результатів.";
}

for (let i = 0; i < results.length; i++) {
    const div = document.createElement("div");
    div.textContent = "Тест № " + results[i].testId + " — Балів: " + results[i].score;
    box.appendChild(div);
}
