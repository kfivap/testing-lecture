const { getUser } = require("./getUser")

exports.login = async function (login, password) {
    const userExist = await getUser(login)
    if (!userExist) return 404
    if (userExist.password !== password) return 401
    if (userExist.age < 18) return 409
    return 200
}