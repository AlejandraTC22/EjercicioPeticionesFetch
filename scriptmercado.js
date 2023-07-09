
document.getElementById("MercadoLibre").onclick = function() {
  fetch('https://api.mercadolibre.com/sites/MLA/search?q=fundas')
  .then(response => response.json())
  .then(data => {
      const items = data.results;

      const lista = document.createElement('ul');
      items.forEach(item => {
          const li = document.createElement('li');
          li.textContent = item.title;
          lista.appendChild(li);
      });
      
      const resultado = document.getElementById('resultado');
      resultado.appendChild(lista);
  })
  .catch(error => console.error('Error:', error));
};


  



