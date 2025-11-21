const tests = [
    {
    id: 1,
    title: "Тест з Української мови",
    questions: [
    {
    question: "Чергування голосних відбувається в усiх наведених випадках, ОКРIМ",
    answers: [
      { answer: "лід - л..ду", correct: false },
      { answer: "слово - сл..вце", correct: false },
      { answer: "пір’я - п..ро", correct: false },
      { answer: "мішок - м..шечок", correct: true },
      ]
    }, 
    {
    question: "Подвоєння букв є в усіх словах рядка",
    answers: [
      { answer: "заздріст..ю, нездолан…ий, зіл...я", correct: false },
      { answer: "жовч…ю, зван…я, довгождан...ий", correct: false },
      { answer: "громад…я, велич...ю, старан...ість", correct: true },
      { answer: "спотворен...ий, забут…я, суд...ею", correct: false },
      ]
    },
    {
    question: "М’який знак на місці пропуску треба писати в усіх словах рядка",
    answers: [
      { answer: "перелаз..те, стежин..ці, памороз..", correct: false },
      { answer: "уман..ський, люд..ми, пісен..ці", correct: false },
      { answer: "л..лється, поглян..те, гір..кий", correct: false },
      { answer: "волос..кий, брун..ці, різ..блення", correct: true },
      ]
    },
    {
    question: "Апостроф на місці пропуску треба писати в усіх словах рядка",
    answers: [
      { answer: "черв..ячок, в..юнкий, р..юмсати", correct: false },
      { answer: "без..іменний, п..єса, з..єднаний", correct: false },
      { answer: "пір..їнка, трав..янистий, зів..яти", correct: true },
      { answer: "міл..ярд, жнив..яний, пред..явник", correct: false },
      ]
    },
    {
    question: "Букву і треба писати на місці обох пропусків у рядку",
    answers: [
      { answer: "невідомий інду..зм, переможний ф..ніш", correct: false },
      { answer: "великий еліпсо..д, беззаперечний тр..умф", correct: false },
      { answer: "надміцний т..тан, радіоактивний цез..й", correct: false },
      { answer: "неповторна грац..я, визнаний пр..оритет", correct: true },
      ]
    }
    ]
    },

    {
    id: 2,
    title: "Тест з Історії України",
    questions: [
    {
    question: "Освоєння нового матеріалу для виготовлення знарядь праці — міді, утвердження відтворюючих форм господарювання — це характерні риси розвитку людського суспільства в епоху",
    answers: [
      { answer: "палеоліту", correct: false },
      { answer: "мезоліту", correct: false },
      { answer: "неоліту", correct: false },
      { answer: "енеоліту", correct: true },
      ]
    }, 
    {
    question: "Поштовхом до розгортання в XVI ст. братського руху на українських землях було",
    answers: [
      { answer: "закріпачення українського селянства", correct: false },
      { answer: "поширення ідей Реформації та Контрреформації", correct: true },
      { answer: "виникнення українського козацтва та Запорозької Січі", correct: false },
      { answer: "реоформування православної церкви митрополитом П. Могилою", correct: false },
      ]
    },
    {
    question: "У результаті Кримської війни (1853–1856 рр.) Російська імперія втратила",
    answers: [
      { answer: "Брацлавщину", correct: false },
      { answer: "Західне Поділля", correct: false },
      { answer: "Східну Київщину", correct: false },
      { answer: "Південну Бессарабію", correct: true },
      ]
    },
    {
    question: "Первісна людина з’явилася на території сучасної України близько",
    answers: [
      { answer: "2 млн років тому", correct: false },
      { answer: "1 млн років тому", correct: true },
      { answer: "500 тис. років тому", correct: false },
      { answer: "250 тис. років тому", correct: false },
      ]
    },
    {
    question: "Розвиток якої галузі промисловості Української РСР у 1950—1980-х рр. пов’язаний з іменем конструктора О. К. Антонова?",
    answers: [
      { answer: "автомобілебудівної", correct: false },
      { answer: "верстатобудівної", correct: false },
      { answer: "суднобудівної", correct: false },
      { answer: "авіабудівної", correct: true },
      ]
    }
    ]
    },

    {
    id: 3,
    title: "Тест з Української літератури",
    questions: [
    {
    question: "Рядки «Ой біжить мала дівчина, / А за нею русалочка: / «Та послухай мене, красна панночко, / Загадаю тобі три загадочки…», - є в",
    answers: [
      { answer: "календарно-обрядовій пісні", correct: true },
      { answer: "соціально-побутовій пісні", correct: false },
      { answer: "історичній пісні", correct: false },
      { answer: "баладі", correct: false },
      ]
    }, 
    {
    question: "«Мутен сон бачив у Києві на горах» герой «Слова про Ігорів похід»",
    answers: [
      { answer: "Володимир", correct: false },
      { answer: "Святослав", correct: true },
      { answer: "Всеволод", correct: false },
      { answer: "Олег", correct: false },
      ]
    },
    {
    question: "Рядками «У всякого своя доля, і свій шлях широкий» починається твір",
    answers: [
      { answer: "Івана Котляревського", correct: false },
      { answer: "Тараса Шевченка", correct: true },
      { answer: "Пантелеймона Куліша", correct: false },
      { answer: "Івана Франка", correct: false },
      ]
    },
    {
    question: "Щезник, мольфар, Чугайстир є персонажами твору",
    answers: [
      { answer: "«Повість минулих літ»", correct: false },
      { answer: "«Камінний хрест»", correct: false },
      { answer: "«Тіні забутих предків»", correct: true },
      { answer: "«Лісова пісня»", correct: false },
      ]
    },
    {
    question: "Осмислення історичної долі України, утвердження ідеї державного суверенітету – провідний мотив твору",
    answers: [
      { answer: "«Господи, гніву пречистого...»", correct: false },
      { answer: "«Два кольори»", correct: false },
      { answer: "«De libertate»", correct: false },
      { answer: "«Уривок з поеми»", correct: true },
      ]
    }
    ]
    },
];

const selectedTestId = localStorage.getItem("selectedTest");
const questions = document.getElementById("questions");

const currentTest = tests.find(function(test){
    return test.id == selectedTestId;
});

currentTest.questions.forEach(function(quest, index){
    const div =  document.createElement("div");

    const questionTitle = document.createElement("h3");
    questionTitle.textContent = quest.question;
    div.appendChild(questionTitle);

    quest.answers.forEach(function(ans, i){
        const label = document.createElement("label");
        const radio = document.createElement("input");
        radio.type = "radio";
        radio.name = "quest" + index;
        radio.value = i;

        label.appendChild(radio);
        label.appendChild(document.createTextNode(ans.answer));
        div.appendChild(label);
        div.appendChild(document.createElement("br"));
    });
    questions.appendChild(div);
});

const submitButton = document.getElementById("submit");
submitButton.addEventListener("click", function(){
    let score = 0;
    currentTest.questions.forEach(function(q, ind){
        const radios = document.getElementsByName("quest" + ind);
        radios.forEach(function(r){
            if (r.checked && q.answers[r.value].correct){
                score++;
            }
        });
    });

let resultsFromStorage = localStorage.getItem("results");

let results;
if (resultsFromStorage === null) {
  results = [];
} else {
  results = JSON.parse(resultsFromStorage);
}

results.push({
  testId: currentTest.id,
  score: score
});

localStorage.setItem("results", JSON.stringify(results));

window.location.href = "results.html";
});
