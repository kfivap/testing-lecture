const app = require('express')()

app.get('/', (req, res) => {
    if (req.headers.token === 'my-secret-token') {
        return res.json({ data: [{ id: 1, title: 'foo' }, { id: 2, title: 'bar' }], meta: { page: 1, totalPages: 1 } })
    }
    return res.status(401).json({ data: null, error: 'no token or bad token' })
})

if(process.env.NODE_ENV !== 'test'){
    app.listen(3000, ()=>{console.log('listen on 3000')})
}

module.exports = app