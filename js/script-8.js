/*
 * План занятия
 *
 * Ключевое слово this или конспект исполнения (this)
 */

// У всех функций есть внтри это ключевое слово this
// Мы пока что использовали его в методах обьекта для обращения к свойсвам этого обьекта внутри этих методов.
// На самом деле ключовое слово this к обьектам никак не относится оно находиться внутри функции
// и нам нужно научиться определять на глаз какое там будет значение у этого this
// Правило есть только одно. Но перед этим функция это обьект ссылочный тип (сложный тип)
// Когда мы сравниваем два массива разные ячейки памяти происходит сравнивание по адресу орни не равны
// Обьекты они не равны разные ячейки памяти
// Когда мы сравниваем функции - это обьект и она передаеться по ссылке и когда мы сравниваем две функции то они не равны
// хотя могут быть одинаковые значения
// Обьекты равны друг другу когда в одной и во второй переменных лежат ссылки на один и тот же обьект
// Запомните. Когда функцию вы куда-то передаете то вы передаете не копиию а ссылку.

/*
 * Как вычеслить ключевое слово this ?
 */
// Правило
// - Где и как была обьявлена функция НЕ ИМЕЕТ НИКАКОГО ВЛИЯНИЯ на контекст
// - Контекст определяеться в МОМЕНТ ВЫЗОВА ФУНКЦИИ если он не привязан явно.
// Значение ключевого слов this записывается именно во время вызова функции

// Когда у нас функция это метод обьекта. Пример

/*
 * Как метод обьекта. В контексте обьекта.
 */

// const user = {
//   tag: "Mango",
//   showTag() {
// showTag это не функция а метод обьекта
//     console.log("showTag => this", this);
// тут быдет какой-то this значение которго никто не знает
//   },
// };
// это вызов в контексте обьекта
// user.showTag();
// в момент вызова ткт присваивыаеться значение для this

// тут смотришь что слева от имени функции
// если там обьект точка что-то то this ссылается на этот обьект

// Если мы будем вызывать функцию без какого-то обьекта

/*
 * Вызов без контекста
 */

// - В строгом режиме = undefined
// - Не встрогом режиме = window
const foo = function () {
  console.log("foo -> this", this);
};

foo();
// функция вызвана без обьекта

// итого 2 правала.
// Если функция вызывается как метод обьекта this всегда ссылается на этот обьект
// Если функция вызывается не как метод обьекта то this будет undefined или window

/*
 * Как метод обьекта но обьявлена как внешняя функция.
 */
// В контексте обьекта.
const showTag = function () {
  console.log("showTag -> this", this);
  console.log("showTag -> this.tag", this.tag);
};

const user = {
  tag: "Mango",
};

user.showTag = showTag;
console.log("user", user);

user.showTag();

// this - это не метод это локальная переменная которая есть только внутри функции

// Если функция вызываеться без обьекта то будет undefined
// Если какой-то обьект вызвал эту функцию то там будет ссылка на этот обьект

// Метод - это просто функция помните об этом

/*
* Вызов обьекта без контекста не нужна вообще
/*


Это ошибки которые вы можете сделать.
Ты вроде как метод обьекта вызываешь а на самом деле там контекста нету
потому что скорее ты этот метод обьект азаписал в переменную и вызываешь не как метод обьекта а просто как вызов функции
стока 49 при таком вызове конечно будет андефаин потому что тут никакой обьект ее не вызывает

/*
* Контекст в callback-функциях
*/

// Функция всегда одна просто куча переменных которые на нее хранят ссылку
// и вы можете одну переменную вызвать так вторую так третью так
// и будет вызывватся одна и таже функция
// только один раз как метод обьекта другой раз как независимая функция и так далее.

// в 90% случаев у вас this будет ссылкаться на оригинальный обьект и вы не будете заморачиваться

// Правило. При передаче методов callback контекст не сохранаеться не привязывается
