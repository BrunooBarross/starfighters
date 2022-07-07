import connection from "../db.js"

async function selectUserByName(user: String){
    return connection.query(`
        SELECT * FROM fighters WHERE "username" = $1;
    `, [user])
}

async function insertUser(user: String){
    return connection.query(`
        INSERT INTO fighters("username", "wins", "losses", "draws")
        VALUES ($1, $2, $3, $4)
    `, [user, 0, 0, 0])
}

const userRepository = {
    selectUserByName,
    insertUser
}

export default userRepository;