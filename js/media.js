// Realiza a requisição HTTP para obter os dados da notícia
fetch('url_da_noticia.json')
  .then(response => response.json())
  .then(data => {
    // Atualiza os elementos HTML com os dados da notícia
    document.getElementById('noticia-imagem').src = data.imagem;
    document.getElementById('noticia-titulo').textContent = data.titulo;
    document.getElementById('noticia-descricao').textContent = data.descricao;
    document.getElementById('noticia-data').textContent = `Data: ${data.data}`;
    document.getElementById('noticia-link').href = data.url;
  })
  .catch(error => {
    console.error('Ocorreu um erro ao obter os dados da notícia:', error);
  });