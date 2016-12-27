data = {
    heading: "Тест із програмування",

    questions: [

        {
            title: "Запитання 1",
            answers: {
                1: "Варіант відповіді 1",
                2: "Варіант відповіді 2",
                3: "Варіант відповіді 3"}
        },

        {
            title: "Запитання 2",
            answers: {
                4: "Варіант відповіді 1",
                5: "Варіант відповіді 2",
                6: "Варіант відповіді 3"}
        },

        {
            title: "Запитання 3",
            answers: {
                7: "Варіант відповіді 1",
                8: "Варіант відповіді 2",
                9: "Варіант відповіді 3"}
        }
    ],

    check: [2, 4, 8, 9],

    submit: "Перевірити мої результати"
}

document.addEventListener("DOMContentLoaded", function() {

    var template = _.template(lodash_tmpl.innerHTML);
    document.forms[0].innerHTML = template({data});
    // var template = lodash_tmpl.innerHTML;
    // var rendered = tmpl(template, data);
    // document.forms[0].innerHTML = rendered;
    localStorage.setItem("test", JSON.stringify(data));

    document.querySelector("form").addEventListener("submit", function(event) {
        event.preventDefault();
        var answers = document.querySelectorAll("input:checked");
        var total = answers.length;
        var pass = true;
        for (var i = 0; i < total; i++) {
            if (data.check.indexOf(+answers[i].name) == -1) {
                pass = false;
            }
        }
        var message = pass ? "correct" : "incorrect";
        console.log(message);
    });

});
