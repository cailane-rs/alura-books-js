const consultaCEP = fetch(`https://viacep.com.br/ws/89000/json/`)
    .then(resposta => {
        return resposta.json()
    })
    .then(dado => {
        if(dado.erro) {
            throw Error(404);
        }
        else 
        console.log(dado);
    })
    .catch(erro => {
        erro = erro.toString().replace('Error: ', '');
        switch(erro) {
            case "404":
                console.log('Formato certo, porém CEP inexistente.');
            default:
                console.log('CEP inválido.');
        }
    })