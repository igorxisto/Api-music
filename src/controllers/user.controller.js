module.exports = {

    get: (req, res) => {
        res.status(200).send("Autenticando usuários");

    },

    post: (req, res) => {
        res.status(200).send("Criando usuários");

    }, 
    
    put: (req, res) => {
        res.status(200).send("Editando usuários");

    }
}