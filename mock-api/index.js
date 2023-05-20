const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('data/db.json')
const middlewares = jsonServer.defaults() 

// Set default middlewares (logger, static, cors and no-cache)
server.use(middlewares)

// To handle Login POST
server.use(jsonServer.bodyParser)  

// Add custom routes before JSON Server router
server.use(jsonServer.rewriter({ 
    '/app/data*': '/app',
    '/budget/data*': '/budget$1',
    '/calendar/data*': '/calendar$1',
    '/dashboard/data*': '/dashboard$1',
    '/goal/data*': '/goal$1',
    '/income/data*': '/income$1', 
    '/setAlert/data*': '/setAlert$1',
    '/setGoal/data*': '/setGoal$1',
    '/spend/data*': '/spend$1',
    '/transactions/data*': '/transactions$1', 
}))


// Update endpointStatus from array to object
router.render = (req, res) => {
    const data = res.locals.data 
    if (data.length === 1) {
        res.jsonp(data[0])
    } else {
        res.jsonp(data)
    }
}

server.use(router)

const port = process.env.PORT || 3000

server.listen(port, () => {
    console.log(`JSON Server is running on port: ${port}`)
})
