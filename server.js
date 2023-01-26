const express = require('express');
const database = require('./database');
const config = require('./config');
const path = require('path');
const klawSync = require('klaw-sync');

const controllers = klawSync(`${__dirname}/controllers`, {nodir: true});

const app = express();

controllers.forEach((file) => {
    if (path.basename(file.path)[0] === '_' || path.basename(file.path)[0] === '.') return;
    app.use('/', require(file.path));
});

app.use(express.urlencoded({extended: true}));
app.use(express.json());

const start = async () => {
    try {
        await database();
        app.listen(config.port, () => console.log(`Server is running on PORT ${config.port}`));
    } catch (e) {
        console.log(e);
    }
}

start();