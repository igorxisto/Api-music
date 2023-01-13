const express = require('express'); //puxando o xpress
const app = express(); //setando o express
const port = 3000; //setando a porta

const padraoRouter = require('./routers/padrao.route.js'); // puxando o router
const usersRouter = require('./routers/users.router');
const musicsRouter = require('./routers/musics.router');
const playlistRouter = require('./routers/playlist.router');
const favoritesRouter = require('./routers/favorites.router');

app.use(express.json()); //setando a possibilidade de usar json

app.use(padraoRouter);
app.use(usersRouter);
app.use(musicsRouter);
app.use(playlistRouter);
app.use(favoritesRouter);


app.listen(port); //colocar o servidor no ar