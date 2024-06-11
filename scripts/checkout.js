import {cart} from '../data/cart.js';
import {products} from '../data/products.js';
 
let cartSummaryHtml='';
cart.forEach((cartItem)=>{
  const productId=cartItem.id;
  let matchingproduct;
  products.forEach((product)=>{
    if (productId===product.id){
      matchingproduct=product;
    }
  })
  const prodhtml=`
  <div class="cart-item-details-grid">
  <img class="product-image"
    src="${matchingproduct.image}">

  <div class="cart-item-details">
    <div class="product-name">
      ${matchingproduct.name}
    </div>
    <div class="product-price">
      ${matchingproduct.priceCents}
    </div>
    <div class="product-quantity">
      <span>
        Quantity: <span class="quantity-label">${cartItem.quantity}</span>
      </span>
      <span class="update-quantity-link link-primary">
        Update
      </span>
      <span class="delete-quantity-link link-primary">
        Delete
      </span>
    </div>
  </div>`
  cartSummaryHtml+=prodhtml;
  console.log(cartSummaryHtml);
}) 
document.querySelector('.order-summary').innerHTML=cartSummaryHtml;