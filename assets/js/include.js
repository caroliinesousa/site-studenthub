/**
 * Função que carrega conteúdo externo (header ou footer) via fetch
 * @param {string} selector - ID do elemento onde o conteúdo será inserido (ex: #header)
 * @param {string} file - Caminho do arquivo HTML a ser carregado
 */
function includeHTML(selector, file, callback) {
    fetch(file) // faz requisição do arquivo
      .then(res => res.text()) // transforma a resposta em texto HTML
      .then(data => {
        document.querySelector(selector).innerHTML = data; // insere no DOM
      if (callback) callback();
      });
  }
  
  // Ao carregar a página
  window.addEventListener("DOMContentLoaded", () => {
    // Insere o conteúdo do header no elemento com id="header"
    includeHTML("#header", "./components/header.html", () => {
    initMenu();
    destacarPaginaAtual() 
  });
    
    // Insere o conteúdo do footer no elemento com id="footer"
    includeHTML("#footer", "./components/footer.html");
  });

  includeHTML("#header", "./components/header.html", () => {
  initMenu(); // se já estiver funcionando
  destacarPaginaAtual(); // chama logo após o header carregar
});
