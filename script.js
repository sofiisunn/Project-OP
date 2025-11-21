const tests = [
{
    id: 1, 
    title: "Тест з Української мови", 
    description: "Дізнайся свій рівень знань з української мови" 
},
{ 
    id: 2, 
    title: "Тест з Історії України", 
    description: "Дізнайся свій рівень знань з історії України" 
},
{
    id: 3,
    title: "Тест з Української літератури",
    description: "Дізнайся свій рівень знань з української літератури",
}
];

const list = document.getElementById("test_list");

for (let i = 0; i < tests.length; i++){
    const test = tests[i];
    const div = document.createElement("div");

    const title = document.createElement("h2");
    title.textContent = test.title;
    div.appendChild(title);

    const description = document.createElement("p");
    description.textContent = test.description;
    div.appendChild(description);

    const button = document.createElement("button");
    button.textContent = "Розпочати тестування";
    button.addEventListener("click", function() {
      startTest(test.id);
    });
    div.appendChild(button); 

    list.appendChild(div);

}

function startTest(id) {
      localStorage.setItem("selectedTest", id);
      window.location.href = "test.html";
    }