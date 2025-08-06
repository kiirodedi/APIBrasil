export default function buscarCEPCallBack(cep, callback) {
    let urlAPI = `https://brasilapi.com.br/api/cep/v1/${cep}`;

    fetch(urlAPI,
        { method: 'GET' })
        .then(resposta => {
            if(!resposta.ok) {
                throw new Error("Falha no fetch");
            }
            return resposta.json();
        })
        .then(resposta => callback(resposta))
        .catch(error => {console.error("Erro:", error)});
}