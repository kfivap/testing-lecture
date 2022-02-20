exports.sum = function (a, b) {
    if(isNaN(parseInt(a)) || isNaN(parseInt(a))) throw new Error('bad args')
    return a + b
}