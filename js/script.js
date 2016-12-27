"use strict";

var object = {

    heading: "Тест по программированию",

    questions: [

        {
            title: "Вопрос 1",
            answers: {
                1: "Вариант ответа 1",
                2: "Вариант ответа 2",
                3: "Вариант ответа 3"}
        },

        {
            title: "Вопрос 2",
            answers: {
                4: "Вариант ответа 1",
                5: "Вариант ответа 2",
                6: "Вариант ответа 3"}
        },

        {
            title: "Вопрос 3",
            answers: {
                7: "Вариант ответа 1",
                8: "Вариант ответа 2",
                9: "Вариант ответа 3"}
        }
    ],

    check: [2, 4, 8, 9],

    submit: "Проверить мои результаты"
}

localStorage.setItem("test", JSON.stringify(object));
var data = JSON.parse(localStorage.getItem("test"));

// On document load
document.addEventListener("DOMContentLoaded", function() {

    // Render test via template
    var template = _.template(lodash_tmpl.innerHTML);
    document.forms[0].innerHTML = template({data});

    // On submit, analyze results
    document.querySelector("form").addEventListener("submit", function(event) {
        event.preventDefault();
        var answers = document.querySelectorAll("input:checked");
        var total = answers.length;
        var pass = false;
        if (total == data.check.length) {
            pass = true;
            for (var i = 0; i < total; i++) {
                if (data.check.indexOf(+answers[i].name) == -1) {
                    pass = false;
                    break;
                }
            }
        }
        var feedback = pass ? { message: "Correct!", className: "success" }
                            : { message: "Inorrect!", className:"warning" };

        // Display feedback in modal window
        var modal = document.createElement("div");
        document.body.modal;
        var overlay = document.createElement("div");
        overlay.className = "overlay";
        document.body.appendChild(overlay);
        var win = document.createElement("div");
        win.className = "modal_message";
        win.innerHTML = feedback.message;
        win.classList.add(feedback.className);
        win.classList.add("button-success");
        document.body.appendChild(win);

        var close = document.createElement("span");
        close.innerHTML = "Закрыть";
        close.className = "pure-button pure-button-primary close_button";
        win.appendChild(close);

        close.addEventListener("click", function() {
            win.removeChild(close);
            document.body.removeChild(win);
            document.body.removeChild(overlay);
            close = null; // clean up eventlistener
            document.forms[0].reset();
        });
    });

});
