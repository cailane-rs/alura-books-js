const consultaCEP = fetch(`https://viacep.com.br/ws/89026789/json/`)
    .then(resposta => {
        return resposta.json()
    })
    .then(dado => {
        if(dado.erro) {
            throw Error("Esse CEP não existe.");
        }
        else 
        console.log(dado);
    })
    .catch(erro => console.log(erro))
    .finally(mensagem => console.log('Processamento concluído'));

console.log(consultaCEP)