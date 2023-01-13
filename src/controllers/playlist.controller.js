module.exports = {

    get: (req, res) => {
        res.status(200).send("buscando playlist");

    },

    post: (req, res) => {
        res.status(200).send("Criando playlist");

    }, 
    
    put: (req, res) => {
        res.status(200).send("Editando playlist");

    },
    delete: (req, res) => {
        res.status(200).send("deletando playlist");

    }
    
}