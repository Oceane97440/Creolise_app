import * as SQLite from "expo-sqlite";
const db = SQLite.openDatabase('creoliseApp.db')

const initSqlite = () => {

    const initPromise = new Promise((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql("create table if not exists favoris (id integer primary key not null, id_item init ,is_favorie boolean value false);",
                [],
                () => {

                    resolve()
                },
                (_, error) => {

                    reject(error)

                }
            )
        })
    })

    return initPromise
}

export default initSqlite