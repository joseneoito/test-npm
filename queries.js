const { Query } = require('./db.js')


class Database {
    async getUserByUsername(username) {
        console.log("env", process.env)
        let query = {
            text: "SELECT * FROM users WHERE id = (SELECT user_id FROM user_settings WHERE username = $1 LIMIT 1) AND verified_on IS NOT NULL LIMIT 1",
            values: [username]
        };
        const user = await Query(query);
        if (user.rowCount > 0) {
            return user.rows[0];
        } else {
            return null;
        }
    }
}

module.exports = Database;
