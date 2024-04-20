# Gulp сборка ZhuklerAppLayout

## Должен быть установлен (глобально) Node.js, Gulp v4.0, Bower.

 ## Если у вас не установлены вышеперечисленные компоненты. Пропишите в терминале:
 
  ```
  npm install gulp-cli bower -g
  ```
## Инициализация сборки:
  ```
  npm install gulp
  ```
##  Cкачка всех библеотек для проекта:
  ```
  bower update
  ```
## Запуск и использование задач:

  ### Запуск проекта
  ```
  gulp
  ```
  ### Просмотр всех задач сборки:
  ``` 
  gulp --tasks
  ```
  ### Очистка папки сборки "dist":
  ```
  gulp cleanDist
  ```
  ### Создание архива проекта:
  ```
  gulp zip
  ```

#### Подробнее о пакетах можно прочитать:

[Gulp](https://gulpjs.com/)
[Bower](https://bower.io/)
[Sass](https://sass-scss.ru/)


#### Требования к оформлению CSS и Вёрстке:
1. Не дублировать селекторы
2. Писать автора стилей
3. Использовать переменные
4. Писать стили в порядке:
    + Позиционирование
    +  Блочная модель
    +  Типографика
    +  Оформление
    +  Анимация
    +  Разное

    ```
    .declaration-order 
          /* Позиционирование */
          position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          z-index: 100;
        
          /* Блочная модель */
          display: block;
          float: right;
          width: 100px;
          height: 100px;
          margin: 10px;
          padding: 10px;
        
          /* Типографика */
          font: normal 13px/1.5 "Arial", sans-serif;
          font-style: normal;
          font-size: 13px;
          line-height: 1.5;
          font-family: "Arial", sans-serif;
          text-align: center;
          color: #333333;
        
          /* Оформление */
          background-color: #f5f5f5;
          border: 1px solid #e5e5e5;
          border-radius: 3px;
          opacity: 1;
        
          /* Анимация */
          transition: color 1s;
        
          /* Разное */
          will-change: auto;

    ```
    
2. Классы:
    + Имена классов пишутся строчными буквами, используется дефис (но не знаки нижнего подчёркивания или camelCase). Дефисы служат разделителями во взаимосвязанных классах (например, ```.button``` и ```.button-danger```).
    + Имена классов должны быть такими, чтобы по ним можно было быстро понять какому элементу страницы задан класс: избегайте сокращений (единственное исключение — ```.btn``` для кнопок), но не делайте их слишком длинными (более трёх слов).
    + Для написания классов используются английские слова и термины. Транслитом названия классов и атрибутов не пишутся.
3. Шрифты:
    + Использовать шрифты с не только с рашрением .ttf или .otf, а ещё и woff,svg
    + Всегда писать после нестандартного шрифта, безопасный: ```font-family: "OpenSans", sans-serif``` (Можно задать сразу в переменной)
2. Цвета писать:
    + Только в нижнем регистре
    + Код цвета писать в шестизначном значении
    + Не писать в символичном названии: gray и.т.д
3. Пробелы после комбинирования селекторов: ```a + b```
4. Ковычки для значений атрибутов: ```[target="_blank"] {}```
5. Не писать ноль в дробных значениях: ```opacity: .5```
6. Числовое обозначение толщины шрифта: ```font-weight: 500```
7. Вёрстка
    + В вёрстке всегда первым писать атрибут ```class=""``` . Единообразное написание помогает легче считывать код и быстрее разбираться в назначении блоков по их классам. Остальные атрибуты могут быть расставлены в любом порядке, но тоже единообразно для одинаковых элементов.
    + Всегда писать атрибут ```alt``` в теге ```<img src="URL" alt="name">```
    + Теги и их атрибуты пишутся строчными буквами. Для значений атрибутов всегда используются двойные кавычки.
