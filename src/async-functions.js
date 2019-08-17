const fetch = require('node-fetch');

function getTatooineResidents(){
    const promise = fetch("https://swapi.co/api/planets/1/");
    return promise
        .then(response => response.json())
        .then(json => json.residents)
        .catch(err => err);
};

function promiseMeAString(string){
    return new Promise((resolve, reject) => {
        if(string === null){
            reject("You have failed me!");
        } else {
            resolve("You kept the Promise!");
        };
    });
};

module.exports = {getTatooineResidents, promiseMeAString};