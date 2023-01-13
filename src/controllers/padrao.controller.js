module.exports = {

    get : (req, res ) => {

        res.status(200).send({
            "author": "Xisto",
            "description": "Api feita para simular um serviço como spotify",
            "Github": "https://github.com/igorxisto",
            "Linkedin" : "https://www.linkedin.com/in/igor-xisto-809a93175/"
        });
    }
}