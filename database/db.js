import * as SQLite from "expo-sqlite";
const db = SQLite.openDatabase('creoliseApp.db')

export const initSqlite = () => {

    const initPromise = new Promise((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql("create table if not exists favoris (id integer primary key  not null, item_id int ,item_name text,item_photos text,item_price num,item_categorie text,is_favorie boolean value false,item_description text);",
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

export const addItem = (id,name,photos,price,categorie,statut,description) => {


    const insertFavoris = new Promise((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql("INSERT INTO favoris (item_id,item_name,item_photos,item_price,item_categorie,is_favorie,item_description) VALUES(?,?,?,?,?,?,?);",
                [id,name,photos,price,categorie,statut,description],
                (_, result) => {

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

//findAll favorie true
export const selectAllItem = () => {


    const findAllFavoris = new Promise((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql("SELECT * from favoris WHERE is_favorie=1",
                [],
                (_, result) => {
                    resolve(result)
                },
                (_, error) => {

                    reject(error)

                }
            )
        })
    })

    return  findAllFavoris
}

//findOne
export const selectOneItem = (item_id) => {


    const findOneFavoris = new Promise((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql("SELECT * from favoris WHERE item_id=?",
                [item_id],
                (_, result) => {
                    resolve(result)
                },
                (_, error) => {

                    reject(error)

                }
            )
        })
    })

    return  findOneFavoris
}


//findAll favorie true
export const deleteItem = (item_id) => {


    const deleteFavoris = new Promise((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql("DELETE FROM favoris WHERE item_id=?",
                [item_id],
                (_, result) => {
                    resolve(result)
                },
                (_, error) => {

                    reject(error)

                }
            )
        })
    })

    return  deleteFavoris
}