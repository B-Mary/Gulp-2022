import replace from "gulp-replace";
import plumber from "gulp-plumber";  //отработка ошибок
import notify from "gulp-notify";   //сообщения(подсказки)
import browsersync from "browser-sync";
import newer from "gulp-newer" //проверка обновлений
import ifPlugin from "gulp-if" //условное ответвление

export const plugins = {
    replace: replace,
    plumber: plumber,
    notify: notify,
    browsersync: browsersync,
    newer: newer,
    if: ifPlugin
}
