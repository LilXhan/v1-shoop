
const carrito = document.querySelector('#carrito');
const itemCarrito = document.querySelector('#listCarrito');
const fragment = document.createDocumentFragment();
const btns = document.querySelectorAll('.btn');

const clickFunction = (en) => {
  const fruta = {
    titulo: en.target.dataset.fruta,
    id: en.target.dataset.fruta,
    cantidad: 1
  };
  obj[fruta.titulo] = fruta;
  pintarLista(fruta);
};

const obj = {

};

const pintarLista = (fruta) => {
  Object.values(obj).forEach(frutilla => {
    const clone = itemCarrito.content.firstElementChild.cloneNode(true);
    clone.querySelector('#fruitCarrito').textContent = frutilla.titulo;
    clone.querySelector('#num').textContent = frutilla.cantidad;
    fragment.appendChild(clone);
  });

  carrito.appendChild(fragment);
};

btns.forEach(btn => btn.addEventListener('click', clickFunction));
