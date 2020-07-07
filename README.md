# Как запустить
Для запуска понадобится установленная база данных PostgreSQL, NodeJS.

1. Скачать дамп базы данных: [ссылка](https://1drv.ms/u/s!ApMs21XKWuZBgoJk09aU5ddgebkHwg?e=SdD8z1)
2. Развернуть его
3. Скачать ветку [development](https://github.com/IvanovVlad/epam_web_task/tree/development)
4. Открыть ее в редакторе VS Code далее открыть терминал или, используя консоль node открыть папку с проектом
5. Если запуск происходит впервые, то установите зависимости при помощи команды: npm install
6. Запустите проект командой: npm run start:dev
7. В случае ошибки авторизации измените логин\пароль в файле typeorm.config.ts, например на postgres - postgres
8. Front En часть доступна по [ссылке](https://inspiring-carson-851983.netlify.app/src/)
...
