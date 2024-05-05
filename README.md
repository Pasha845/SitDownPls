# Создание интернет-магазина для компании "SitDownPls"

![Баннер](https://github.com/Pasha845/SitDownPls/assets/106194295/517f5d3d-0991-4f54-8278-b47887407bfb)

## В проекте использовались следующие библеотеки и плагины:
- Choices.js - создание селекта,
- Swiper.js - создание слайдеров,
- Tippy.js - создание тултипа,
- Just-validate - валидация полей формы,
- Inputmask - создание маски для телефона

С работой можно ознакомиться по ссылке: http://sitdownpls.com.swtest.ru/

## Проект состоит из 4 страниц:
- главная страница,
- каталог,
- карточка товара,
- сотрудничество

## Разделы "Header" и "Footer" на всех странцах одинаковые:

### 1. Header:
- селект с выбором городов,
- телефон (при клике пользователю предлагают позвонить по этому телефону),
- дополнительное меню,
- логотип (некликабелен),
- основное меню - при клике на пункт "Каталог" происходит переход на эту страницу,
- форма поиска с кнопкой (без функционала),
- выпадающий список с выбором категории поиска,
- личный кабинет (без функционала),
- корзина (без функционала)

### 2. Footer:
- лого (некликабелен),
- ссылки - "Facebook", "Вконтакте" и "Instagram" (без перехода),
- блоки с подменю, при клике на пункт "Сотрудничество" происходит переход на эту страницу, 
- копирайт

## Главная страница состоит из:

### 1. Hero:
- слайдер с 3 слайдами,
- заголовок,
- кнопка "Получить" (без функционала),
- пагинация

### 2. Специальные предложения:
- заголовок,
- кнопки слайдера,
- слайдер с 6 слайдами - скидка, картинка, название, цена, новая и старая цены и кнопкой "Купить"

### 3. Высокий рейтинг:
- заголовок,
- карточки товаров - рейтинг, картинка, название, цена и кнопка "Купить",
- кнопка "Смотреть больше товаров", при нажатии открывает еще 4 карточки

### 4. Блок с баннером:
- заголовок,
- описание,
- кнопка "Ознакомиться" (без функционала)

### 5. Топ категории:
- заголовок,
- 5 карточек - ссылки на подкатегории, заголовок, картинка и ссылкой "В каталог" (без функционала)

### 6. Полезно:
- заголовок,
- слайдер с 5 слайдами - картина, описание и ссылка "Читать" (без функционала)

### 7. Мы всегда вам рады:
- заголовок,
- описание с тултипом,
- поле "Как вас зовут?", "Ваш телефон" (с маской), "Ваш e-mail" и кнопка "Отправить":
  - если поля заполнены не верно, то бордер становится красным и выводится сообщение "Недопустимый формат",
  - если поля заполнены верно, то цвет бордера меняется на зеленый,
  - после правильного заполнения полей и нажатии на кнопку появляется pop-up с заголовком "Спасибо мы вам перезвоним" и кнопкой закрытия,
- чекбокс "Принимаю пользовательское соглашение" (без функционала)

## Страница "Каталог" состоит из:

### 1. Хлебные крошки:
- ссылка "Главная" - при происходит переход на эту страницу,
- ссылка "Каталог" - при происходит переход на эту страницу,
- ссылка "Диваны" (без функционала),
- ссылка "Прямые диваны" (без функционала)

### 2. Фильтр каталога:
- чекбоксы для фильтрации категории (без функционала),
- поля ввода цены и ползунок с ценой - смена цены происходит с помощью ползунка или полей ввода,
- чекбоксы для выбора скидки (без функционала),
- чекбоксы для выбора цвета (без фильтрации),
- блок с карточкой - картинка, заголовок, описание и ссылка "В каталог" (без функционала)

### 3. Каталог:
- заголовок,
- слайдер с карточками товара - рейтинг, картинка, название, цена и кнопка "Купить",
- кнопки переключения слайдов,
- при нажатии на кнопку "Купить" в карточке с заголовком "Диван тканевый D-31" происходит переход на страницу "Карточка товара"

## Страница "Каталог" состоит из:

### 1. Хлебные крошки:
- ссылка "Главная" - при происходит переход на эту страницу,
- ссылка "Каталог" - при происходит переход на эту страницу,
- ссылка "Диваны" (без функционала),
- ссылка "Прямые диваны" (без функционала),
- ссылка "D-31" (без функционала)

### 2. Карточка товара:
- изображения товара - при нажатии на большое изображение открывается модальное окно с изображениями товара,
- описание товара,
- изображения товара,
- название товара,
- рейтинг,
- описание,
- цена,
- кнопка "Купить в один клик" - при нажатии открывается модальное окно c формой, отправка этой формы открывает окно "Спасибо мы вам перезвоним",
- кнопка "Добавить в корзину",
- характеристики товара

### 3. Похожие товары:
- заголовок,
- кнопки преключения слайдера,
- слайдер с 4 карточками товара - рейтинг, картинка, название, цена и кнопка "Купить"

## Страница "Сотрудничество" состоит из:

### 1. Хлебные крошки:
- ссылка "Главная" - при происходит переход на эту страницу,
- ссылка "Сотрудничество" (без функционала)

### 2. Сотрудничество:
- заголовок,
- подзаголовок с описанием,
- подзаголовок со списком - 3 подраздела с иконками,
- 2 подзаголовока и описания к ним,
- подзаголовок со списком - 3 подраздела с цветными цифрами,
- картинка c описанием
