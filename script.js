const [...inp] = document.querySelectorAll('input');
const outPassword = document.querySelector('.outPassword');
const generator = document.querySelector('.generator');
const valueRangeOut = document.querySelector('.valueRangeOut');
const valueRange = document.querySelector('.valueRange');
const copyText = document.querySelector('.copyText');

const russianAlphabet = [
    'а', 'б', 'в', 'г', 'д', 'е', 'ё', 'ж', 'з', 'и', 'й', 'к', 'л', 'м', 'н', 'о', 'п', 'р', 'с', 'т', 'у', 'ф', 'х', 'ц', 'ч', 'ш', 'щ', 'ъ', 'ы', 'ь', 'э', 'ю', 'я'
];

const wordsValueEnglish = [
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
];

const symbolRandom = [
    '!', '@', '#', '$', '%', '&', '*'
]

// -----------------------------------------------
// Перебираем все наши input и смотрим какие из них выбраны. Если выбраны, тогда добавляем в них новый класс для дальнейшей работы только с теми input которые имеют этот класс
inp.map(function (elem) {
    console.log(elem)
    elem.addEventListener('click', function () {
        if (elem.classList.contains('numberValue')) {
            elem.classList.toggle('checked')
        } else if (elem.classList.contains('wordsValueRussian')) {
            elem.classList.toggle('checked')
        } else if (elem.classList.contains('wordsValueEnglish')) {
            elem.classList.toggle('checked')
        } else if (elem.classList.contains('symbol')) {
            elem.classList.toggle('checked')
        }
    })
})

// ----------------------------------------------------------------
// Выводим значение (value) на экран
valueRange.addEventListener('input', function () {
    valueRangeOut.innerHTML = valueRange.value;
})

//--------------------------------------------------------------------
//  Добавляем случайные значения в массив
generator.addEventListener('click', function () {
    outPassword.innerHTML = ''; //обнуляем  экран 
    let inputLength = []; // массив для передачи в него случайных значений

    for (let i = 0; i < valueRange.value; i++) {
        inp.map(function (elem) {

            if (elem.classList.contains('numberValue') && elem.classList.contains('checked')) {
                let randomNumber = Math.floor(Math.random() * 10);
                elem.setAttribute('value', `${randomNumber}`)
                inputLength.push(elem.value)

            } else if (elem.classList.contains('checked') && elem.classList.contains('wordsValueRussian')) {
                let randomWord = Math.floor(Math.random() * russianAlphabet.length);
                elem.setAttribute('value', `${russianAlphabet[randomWord]}`)
                inputLength.push(elem.value)
            } else if (elem.classList.contains('checked') && elem.classList.contains('wordsValueEnglish')) {
                let wordsEnglish = Math.floor(Math.random() * wordsValueEnglish.length);
                elem.setAttribute('value', `${wordsValueEnglish[wordsEnglish]}`)
                inputLength.push(elem.value)

            } else if (elem.classList.contains('checked') && elem.classList.contains('symbol')) {
                let symbolRan = Math.floor(Math.random() * symbolRandom.length);
                elem.setAttribute('value', `${symbolRandom[symbolRan]}`)
                inputLength.push(elem.value)
            }
        })

        //  перемешиваем массив с добавленными туда знаками для того, чтоб на экран выводились в случайном порядке символы, цифры и т.д. (если этого не сделать, тогда будет строго по порядку (числа, русские буквы, английский буквы, символы))
        let x = Math.floor(Math.random() * inputLength.length); // переменная для создания случайного числа в зависимости от выбранной длины пароля
        outPassword.innerHTML += inputLength[x]; // выводим на экран случайное значение из массива inputLength с нашими случайными значениями
    }

})

copyText.addEventListener('click', function () {
    outPassword.select(); // Метод выбирает весь текст в виде <textarea> элемента или в качестве <input>элемента , который включает в себя текстовое поле. С тегом div не работает
    document.execCommand('copy')
})