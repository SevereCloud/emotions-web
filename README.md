# Карта эмоций

Карта эмоций работает на реальных данных, полученных из
[newsfeed.search](https://vk.com/dev/newsfeed.search).
В программе мы используем подгрузку реальных постов из Вконтакте с разными геопозициями с помощью VK API. Реализованы посты с следующим содержанием: текст, фотографии и галереи фотографий.

Мы доработали сценарий поведения пользователя, добавив создания поста, а также доработали выпадающее меню на странице карты.

Весь этот функционал работает и корректно отображается в Mini apps

## PS

newsfeed.search оказался с багом, иногда может закешироваться
на стороне ВК и присылать пустые посты, до того момент, пока
другой пользователь не сделает такой же запрос.
[ГИФка](https://vk.com/doc117253521_568151978?hash=13b7155d4817b7e9e4&dl=40d9855c935dfa4257)

---

Команда `Аминазин`

```sh
# установка зависимостей
yarn install

# Запускает live сервер
yarn run start

# Запускает vk туннель
yarn run tunnel

# Запускает форматирование
yarn run format

# Запускает линтер
yarn run linter

# Полностью собирает бандл для приложения
yarn run build
```
