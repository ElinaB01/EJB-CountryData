const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const app = express();

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));

app.set('view engine', ejs);

app.get('/data', (req, res) => {
    /*let name, topLevelDomain, callingCode, capital, region, subregion,
        population, timezone, language, currency, flag;
    let countryData = { name: {name},
                        topLevelDomain = {topLevelDomain},
                        callingCode = {callingCode},
                        capital = {capital},
                        region = {region},
                        subregion = {subregion},
                        population: {population},
                        timezone: {timezone},
                        language = {language},
                        currency = {currency},
                        flag: {flag}
                        };
    res.render('index.ejs', { country: countryData });*/
    res.send("test");
});

app.post();


app.listen(3000, () => {
    console.log('Server is running on port 3000.');
});