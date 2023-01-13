module.exports = {

    get: (req, res) => {
        res.status(200).send("buscando favoritos");

    },

    post: (req, res) => {
        res.status(200).send("Criando favoritos");

    }, 
    
    put: (req, res) => {
        res.status(200).send("Editando favoritos");

    },
    delete: (req, res) => {
        res.status(200).send("deletando favoritos");

    }
    
}