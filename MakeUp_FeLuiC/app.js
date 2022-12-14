const main_market = document.getElementById('main-market');
const tableCarts = document.getElementById('table-carts');
const tBody = document.getElementById('tBody');


function createCard(id, name, price, img) {

  const card = document.createElement('div');
  const header_card = document.createElement('div');
  const title_card = document.createElement('div');
  const p_title = document.createElement('p');
  const img_card = document.createElement('img');
  const footer_card = document.createElement('div');
  const p_price = document.createElement('p');
  const button_card = document.createElement('button');

  card.classList.add('card');
  card.setAttribute('id', id);

  header_card.classList.add('header_card');

  title_card.classList.add('title_card');

  p_title.textContent = name;
  p_title.setAttribute('id', 'p-title');

  img_card.setAttribute('src', img);
  img_card.setAttribute('alt', name);
  img_card.setAttribute('id', 'img-card');

  footer_card.classList.add('footer-card');

  p_price.textContent = price;
  p_price.setAttribute('id', 'p-price');
  
  button_card.textContent = 'Agregar al carrito';
  button_card.setAttribute('id', 'btnadd');


  title_card.appendChild(p_title);
  footer_card.appendChild(p_price);
  footer_card.appendChild(button_card);

  card.appendChild(header_card);
  card.appendChild(title_card);
  card.appendChild(img_card);
  card.appendChild(footer_card);


  main_market.appendChild(card);    
  
}
function renderCards() {
  products.forEach(product => {
      createCard(product.id, product.name, product.price, product.img);
  });
}

renderCards();
