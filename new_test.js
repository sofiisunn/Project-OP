let tests = JSON.parse(localStorage.getItem("tests")) || [];
let questions = [];

document.getElementById("add_question").addEventListener("click", () => {
    const qText = prompt("Введіть питання:");
    if (!qText) return;

    const a1 = prompt("Відповідь 1:");
    const a2 = prompt("Відповідь 2:");
    const a3 = prompt("Відповідь 3:");
    const a4 = prompt("Відповідь 4:");
    const correct = prompt("Номер правильної відповіді (1-4):");

    questions.push({
        question: qText,
        answers: [
            { answer: a1, correct: correct == 1 },
            { answer: a2, correct: correct == 2 },
            { answer: a3, correct: correct == 3 },
            { answer: a4, correct: correct == 4 }
        ]
    });

    document.getElementById("questions_block").innerHTML += `<p>Питання: ${qText}</p>`;
});

document.getElementById("save_test").addEventListener("click", () => {
    const title = document.getElementById("test_title").value.trim();
    if (!title || questions.length === 0) {
        alert("Введіть назву тесту та хоча б одне питання!");
        return;
    }

    const newId = tests.length ? Math.max(...tests.map(t => t.id)) + 1 : 1;

    tests.push({
        id: newId,
        title: title,
        description: "Користувацький тест",
        questions: questions
    });

    localStorage.setItem("tests", JSON.stringify(tests));
    alert("Тест збережено!");
    location.href = "index.html";
});