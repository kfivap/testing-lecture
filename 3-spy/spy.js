
exports.createOrder = async function(userId, items, totalPrice) {
    await exports.saveOrder(userId, items)
    await exports.addBonuses(userId, totalPrice)
    await exports.updateStocks(items)
}

exports.saveOrder = async function (userId, items) {
    // await Order.insert({userId, items})
}

exports.addBonuses = async function (userId, totalPrice) {
    // await Balance.update({where: {userId}}, {bonuses: totalPrice*0.1})
}

exports.updateStocks = async function (items) {
    // some logic
}