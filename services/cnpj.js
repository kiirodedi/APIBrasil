export default function buscarCNPJCallBack(cnpj, callback) {
    let urlAPI = `https://brasilapi.com.br/api/cnpj/v1/${cnpj}`;

    fetch (urlAPI,
        { method: 'GET'})
        .then(resposta => {
            if(!resposta.ok) {
                throw new Error("Falha no fetch");
            }
            return resposta.json();
        })
        .then(resposta => callback(resposta))
        .catch(error => {console.error("Erro:", error)});
}