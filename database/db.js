import * as SQLite from "expo-sqlite";
const db = SQLite.openDatabase('creoliseApp.db')

export const initSqlite = () => {

    const initPromise = new Promise((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql("create table if not exists favoris (id integer primary key  not null, id_item init ,is_favorie boolean value false);",
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

//insert item dans table des favorie

export const addItem = (id_item,is_favorie) => {

    console.log('db data',id_item,is_favorie)

    const insertFavoris = new Promise((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql("INSERT INTO favoris (id_item,is_favorie) VALUES(?,?);",
                [id_item,is_favorie],
                (_,result) => {

                    resolve(result)
                },
                (_, error) => {

                    reject(error)

                }
            )
        })
    })

    return insertFavoris
}

