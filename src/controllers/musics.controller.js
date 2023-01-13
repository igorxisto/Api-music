module.exports = {

    get: (req, res) => {
        res.status(200).send("buscando músicas");

    },

    post: (req, res) => {
        res.status(200).send("Criando músicas");

    }, 
    
    put: (req, res) => {
        res.status(200).send("Editando músicas");

    }
}