const axios = require('axios');
let partido = `https://dadosabertos.camara.leg.br/api/v2/partidos`;

axios.get(partido).then(response => {
    let partido = response.data;
    const str1 = JSON.stringify(partido);
    partido = JSON.parse(str1);
    partido = partido.dados;
    console.log(partido);
    var id = partido.map(element => {
        return element.id;
    });
    for(i of id){
        let membros =  `https://dadosabertos.camara.leg.br/api/v2/partidos/${i}/membros`
        axios.get(membros).then(resp => {
            let deputado = resp.data;
            const str2 = JSON.stringify(deputado);
            deputado = JSON.parse(str2);
            deputado = deputado.dados;
            console.log(deputado);
        })
    }
})

