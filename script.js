// ==============================================
//     -  Створити функцію конструктор для об'єкту який описує теги
// Властивості
// -назва тегу
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту
// інформацію брати з htmlbook.ru
//
// Таким чином описати теги
// -a
// -div
// -h1
// -span
// -input
// -form
// -option
// -select

//FOR ATRIBUT <A>
// const arrAtr = [
//     {atrTitle:'accesskey', atrAction: 'Активация ссылки с помощью комбинации клавиш.'},
//     {atrTitle: 'hreflang', atrAction: 'Идентифицирует язык текста по ссылке.'},
//     {atrTitle: 'rel', atrAction: 'Отношения между ссылаемым и текущим документами.'}
// ];
// const arrAtr2 = [
//     {atrTitle:'accesskey', atrAction:'Позволяет получить доступ к элементу с помощью заданного сочетания клавиш.'},
//     {atrTitle:'class', atrAction:'Определяет имя класса, которое позволяет связать тег со стилевым оформлением.'},
//     {atrTitle:'contextmenu', atrAction:'Устанавливает контекстное меню для элемента.'}
// ];
//
// function TagConstr(titleOfTag, action, attrs) {
//     this.titleOfTag = titleOfTag || 'No Tag';
//     this.action = action || 'No Action';
//     this.attrs = arrAtr2.map(function (arrItem) {
//         return arrItem;
//     })
// }
// let tag = new TagConstr('<div>','Create block element',[]);
// console.log(tag);

///////////////////////////////////////////////////////////////////
// function TagConstr(titleOfTag, action, attrs) {
//     this.titleOfTag = titleOfTag || 'No Tag';
//     this.action = action || 'No Action';
//     this.attrs = attrs || [];
// }
// let tittle = "<a>";
// let act = "Тег <a> является одним из важных элементов HTML и предназначен для создания ссылок. В зависимости от присутствия атрибутов name или href тег <a> устанавливает ссылку или якорь. Якорем называется закладка внутри страницы, которую можно указать в качестве цели ссылки. При использовании ссылки, которая указывает на якорь, происходит переход к закладке внутри веб-страницы.";
// let arrAttr = [
//     {name:"download",acting:"Предлагает скачать указанный по ссылке файл."},
//     {name:"name",acting:"Устанавливает имя якоря внутри документа."},
//     {name:"rel",acting:"Отношения между ссылаемым и текущим документами."}
// ];
// let tag = new TagConstr(tittle,act,arrAttr);
// console.log(tag);

// ==============================================
//
//
// ==============================================
//     -  Створити класс  для об'єкту який описує теги
// Властивості
// -назва тегу
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту
// інформацію брати з htmlbook.ru
//
// Таким чином описати теги
// -a
// -div
// -h1
// -span
// -input
// -form
// -option
// -select
// Приклад результату
// const arrAtr = [
//     {atrTitle:'accesskey', atrAction: 'Активация ссылки с помощью комбинации клавиш.'},
//     {atrTitle: 'hreflang', atrAction: 'Идентифицирует язык текста по ссылке.'},
//     {atrTitle: 'rel', atrAction: 'Отношения между ссылаемым и текущим документами.'}
// ];
// class Tag {
//     constructor(titleOfTag,action,attrs) {
//         this.titleOfTag = titleOfTag;
//         this.action = action;
//         this.attrs = arrAtr.map(function (classItem) {
//             return classItem;
//         })
//     }
// }
// let tag = new Tag ('<a>','create Link',[]);
// console.log(tag);
// ==============================================
//
//
//
// ==============================================
//     - Створити об'єкт car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// ==============================================
// let car = {
//    model:'6',
//     company:'Mazda Motors',
//     year: 2002,
//     maxSpeed: 240,
//     engine: 2.0,
//     driverMan:'empty car',
//
//     drive: function() {
//        console.log(`Driving with ${car.maxSpeed} per hour`)
//     },
//     info: function() {
//         console.log(
//             `model = ${this.model},
//             company = ${this.company},
//             year = ${this.year},
//             maxSpeed = ${this.maxSpeed},
//             engine = ${this.engine}
//             driverMan = ${this.driverMan}`
//         );
//     },
//     increaseMaxSpeed: function(newSpeed) {
//        this.maxSpeed += newSpeed;
//     },
//     changeYear: function (newValue) {
//        this.year = newValue;
//     },
//     addDriver: function (driver) {
//         this.driverMan = driver;
//     }
// }
// car.changeYear(2015);
// let driver = 'Serghei Zarovnii';
// car.increaseMaxSpeed(100);
// car.addDriver(driver);
// car.info();
// ==============================================
//     - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
function CarCreate (model,
                    company,
                    year,
                    maxSpeed,
                    engine,) {
    this.model = model || '6';
    this.company = company || 'Mazda';
    this.year = year || 2002;
    this.maxSpeed = maxSpeed || 260;
    this.engine = engine || 2.0;
    this.mrDriver = 'driver';

    this.drive = function () {
        console.log(`Driving with ${maxSpeed} km per hour`)
    };

    this.info = function () {
        console.log(
            `model = ${this.model}
        company = ${this.company}
        year = ${this.year}
        maxSpeed = ${this.maxSpeed}
         engine = ${this.engine}
         mrDriver = ${this.mrDriver}`
        )
    };

    this.increaseMaxSpeed = function (newSpeed) {
        this.maxSpeed += newSpeed
    };

    this.changeYear = function (newValue) {
        this.year = newValue
    };

    this.addDriver = function (driver) {
        this.mrDriver = driver
    }
}
let driverr = 'Ivan Skripnik';
let car = new CarCreate('X6','BMW',2020,350,3.5);
let car2 = new CarCreate();
car2.info();
car.addDriver(driverr);
car.info();


// ==============================================
//
// ==============================================
//     - Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// ==============================================
//
//
// ==============================================
//     -створити класс попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// -- за допоиоги циклу знайти яка попелюшка повинна бути з принцом
// ==============================================
//
//
//
// ==============================================
//     -створити функцію конструктор попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт типу "принц" за допомоги функції конструктора з полями ім'я, вік, туфелька яку він знайшов, та функцію "пошук попелюшки"
// -- функція повинна приймати масив попелюшок, та шукає ту котра йому підходить
// ==============================================