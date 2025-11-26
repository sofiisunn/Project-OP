const defaultTests = [
    { id: 1, title: "Тест з Української мови", description: "Дізнайся свій рівень знань з української мови" },
    { id: 2, title: "Тест з Історії України", description: "Дізнайся свій рівень знань з історії України" },
    { id: 3, title: "Тест з Української літератури", description: "Дізнайся свій рівень знань з української літератури" }
];

let tests = JSON.parse(localStorage.getItem("tests")) || [];

defaultTests.forEach(dt => {
    if (!tests.some(t => t.id === dt.id)) {
        tests.push(dt);
    }
});

localStorage.setItem("tests", JSON.stringify(tests));

const list = document.getElementById("test_list");

tests.forEach(test => {
    const div = document.createElement("div");

    const title = document.createElement("h2");
    title.textContent = test.title;
    div.appendChild(title);

    const description = document.createElement("p");
    description.textContent = test.description;
    div.appendChild(description);

    const button = document.createElement("button");
    button.textContent = "Розпочати тестування";
    button.addEventListener("click", () => {
        localStorage.setItem("selectedTest", test.id);
        window.location.href = "test.html";
    });

    div.appendChild(button);
    list.appendChild(div);
});