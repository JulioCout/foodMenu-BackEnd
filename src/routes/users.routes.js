const { Router } = require("express")
const usersRoutes = Router()

//Rotas de usuarios aqui ↓

usersRoutes.post("/", (request, response) => {
    const { name, email, senha } = request.body

    response.send(`${name}, ${email} e ${senha}.`)
})


module.exports = usersRoutes