export default function buscarFeriadoCallBack(ano, callback) {
    let urlAPI = `https://brasilapi.com.br/api/feriados/v1/${ano}`;

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