# Как запустить
Для запуска понадобится установленная база данных PostgreSQL, NodeJS.

1. Скачать ветку [development](https://github.com/IvanovVlad/epam_web_task/tree/development)
2. Открыть ее в редакторе VS Code далее открыть терминал или открыть папку с проектом используя консоль node
3. Если запуск происходит впервые, то установите зависимости при помощи команды: npm install
4. Запустите проект командой: npm run start:dev
5. В случае ошибки авторизации измените логин\пароль в файле typeorm.config.ts, например на postgres - postgres
6. Скачать дамп базы данных: [sql](https://1drv.ms/u/s!ApMs21XKWuZBgoJk09aU5ddgebkHwg?e=SdD8z1) - [backup](https://1drv.ms/u/s!ApMs21XKWuZBgoJl8SxxO8qZbuY8gA?e=jmaTrK)
7. Теперь, когда таблицы созданы можно развернуть дамп
8. Front En часть доступна по [ссылке](https://inspiring-carson-851983.netlify.app/src/)
...
