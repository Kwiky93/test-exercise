# Nuxt 3 Minimal Starter

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install the dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm run dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm run build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm run preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.


Разработать приложение на Vue.js по заданию ниже, по возможности использовать VUE 3 версии.
Результат прислать в виде двух ссылок:
На репозиторий с кодом.
Ссылку c результатом на GitHub Pages или Firebase Hosting.
Дополнительно (если успеваете):
Добавить SSR.(Заливать результат в облако тогда не требуется).
--- ПРИЛОЖЕНИЕ ---
Разработать адаптивное приложение для десктоп и мобильных платформ, состоящие из: 
1) Хедера. В хедере добавить произвольный логотип и меню для двух страниц(Настройки / Order Book).
2) Области для отрисовки страниц. Страницы должны подгружаться динамически отдельными чанками по мере необходимости.
3) Бизнес логики, работы с api и данными, вынесенными в стор и разбитыми на модули.
4) В качестве ui библиотки желательно использовать vuetify, именование классов если потребуется реализовать по БЭМу.
--- ДАННЫЕ ---
В качестве источника данных необходимых для реализации страниц используем api Binance. А именно 2 метода: получить биржевой стакан по определенной валютной паре по REST и подписаться на обновления стакана по WS. (См. раздел Diff. Depth Stream в документации: https://github.com/binance/binance-spot-api-docs/blob/master/web-socket-streams.md). Обратить внимание на
https://github.com/binance/binance-spot-api-docs/blob/master/web-socket-streams.md#how-to-manage-a-local-order-book-correctly.
Цены должны последовательно в стакане находиться + консистентность соблюдать
--- СТРАНИЦЫ ---
1) Страница с настройкой валютной пары и лог изменений.
Реализовать селект с выбором валютной пары(Захардкодить список из BTCUSDT, BNBBTC, ETHBTC. По умолчанию выбрана BTCUSDT). При выборе обновляем данные в сторе(метод rest) и подключаемся по ws для обновления данных по валютной паре.
Блок с логом наших действий по изменение валютной пары. С какой на какую мы изменили и во сколько времени.
*Пример ордер бука и его правильной работы на https://www.binance.com/ru/trade/BTC_USDT
2) Страница с таблице(Order Book).
Выводим две таблицы рядом для двух массивов(Bids и Asks) с колонками: Price, Quantity, Total(Price * Quantity). В мобильной версии отображать только две колонки(Price, Total).
Селект с выбором кол-ва элементов в таблице(100, 500, 1000).
Требования к таблицам: на десктопе и на мобилке вместе две таблицы не должны превышать высоту экрана устройства (Скрол должен быть внутри таблиц. При скроле шапка с разбивкой по колонкам должна оставаться на месте).
С точки зрения стиля(цвета, скругления, отступы) всё на собственный взгляд, но что бы выглядело опрятно.

