import {cart} from '../data/cart.js';
let productsHTML='';
products.forEach((product)=>{
const html=`<div class="product-container">
<div class="product-image-container">
  <img class="product-image"
    src=${product.image}>
</div>

<div class="product-name limit-text-to-2-lines">
  ${product.name}
</div>

<div class="product-rating-container">
  <img class="product-rating-stars"
    src="images/ratings/rating-${10*product.rating.stars}.png">
  <div class="product-rating-count link-primary">
    ${product.rating.count}
  </div>
</div>

<div class="product-price">
  ${(product.priceCents/100).toFixed(2)}
</div>

<div class="product-quantity-container">
  <select class='qselect'>
    <option selected value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
    <option value="4">4</option>
    <option value="5">5</option>
    <option value="6">6</option>
    <option value="7">7</option>
    <option value="8">8</option>
    <option value="9">9</option>
    <option value="10">10</option>
  </select>
</div>

<div class="product-spacer"></div>

<div class="added-to-cart">
  <img src="images/icons/checkmark.png">
  Added
</div>

<button class="add-to-cart-button button-primary js-add-to-cart"
data-product-id='${product.id}'>
  Add to Cart
</button>
</div>`;
productsHTML+=html;
})
document.querySelector('.products-grid').innerHTML=productsHTML;
document.querySelector('.cart-quantity').innerHTML='';
document.querySelectorAll('.js-add-to-cart').forEach((button)=>{
  button.addEventListener('click',()=>{
    const productId=button.dataset.productId;
    let matchingitem;
    cart.forEach((item)=>{
      if(productId==item.productId){
        matchingitem=item;
      }
    })
    const quantityselected=document.querySelector('.qselect').value;
    if(matchingitem){
      matchingitem.quantity+=parseInt(quantityselected);
    }
    else{
    cart.push({
      productId:productId,
      quantity:parseInt(quantityselected)
    });
    ;}
    let cartquantity=0;
    cart.forEach((item)=>{
      cartquantity+=item.quantity;
    })
    document.querySelector('.cart-quantity').innerHTML=cartquantity;
  })
})
