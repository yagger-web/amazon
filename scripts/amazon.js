// 1. Save the data - data structure

const products = [
  {
    id: "1",
    image: "images/products/black-slot-toaster.jpg",
    name: "Toaster - Black",
    rating: {
      stars: 5,
      count: 2107
    },
    priceCents: 1999
  },
  {
    id: "2",
    image: "images/products/6-piece-dinner-plate-set.jpg",
    name: "6 Piece  Dinner  Set",
    rating: {
      stars: 4,
      count: 37
    },
    priceCents: 2917
  },
  {
    id: "3",
    image: "images/products/tower-set.jpg",
    name: "Towel Set - Graphite Gray",
    rating: {
      stars: 4.5,
      count: 144
    },
    priceCents: 3199
  },
  {
    id: "4",
    image: "images/products/liquid-laundry-detergent.jpg",
    name: "Liquid Laundry Detergent",
    rating: {
      stars: 4.5,
      count: 305
    },
    priceCents: 2299
  },
  {
    id: "5",
    image: "images/products/coffeemaker-black.jpg",
    name: "Coffeemaker with Glass Carafe and Reusable Filter",
    rating: {
      stars: 4.5,
      count: 1211
    },
    priceCents: 2252
  },
  {
    id: "6",
    image: "images/products/dual-band.webp",
    name: "Dual-band - Accsoon CineView SE RX",
    rating: {
      stars: 5,
      count: 5507
    },
    priceCents: 31999
  },
  {
    id: "7",
    image: "images/products/Phone-Tripod-Selfie.webp",
    name: "Phone-Tripod-Selfie",
    rating: {
      stars: 4,
      count: 55
    },
    priceCents: 1599
  },
  {
    id: "8",
    image: "images/products/USB C Charger.webp",
    name: "USB C Charger",
    rating: {
      stars: 4.5,
      count: 344
    },
    priceCents: 6977
  },
  {
    id: "9",
    image: "images/products/Ailun-2-Pack-Screen-Protector-for-iPhone-13.webp",
    name: "Ailun 2 Pack Screen Protector for iPhone 13",
    rating: {
      stars: 4.5,
      count: 305
    },
    priceCents: 899
  }
];
 
// 2.Generate HTML
		// combine this HTML together into one String
		
		let productsHTML = '';
	
		
products.forEach(function(product){
	
	productsHTML = productsHTML + 
	//const html = 
	`
		<div class="product-container 
		js-product-container-${product.id}">
          <div class="product-image-container">
            <img class="product-image"
              src="${product.image}">
          </div>

          <div class="product-name limit-text-to-2-lines">
            ${product.name}
          </div>

          <div class="product-rating-container">
            <img class="product-rating-stars"
              src="images/ratings/rating-${product.rating.stars *10}.png">
            <div class="product-rating-count link-primary">
              ${product.rating.count}
            </div>
          </div>

          <div class="product-price">
		  
            $${(product.priceCents/100).toFixed(2)}
			
			<!--.toFixed(2) to Fixed - second dec.place-->
			
          </div>

          <div class="product-spacer"></div>


          <button class="add-to-cart-button button-primary js-add-to-cart" 
		  data-product-id="${product.id}">
            Add to Cart
          </button>
		  
		  <span class="remove-from-cart-link link-primary link-primary:hover js-delete-link"
		  data-product-id="${product.id}">
             Remove from Page
          </span>
		  
        </div>`;
		
});

// DOM

	document.querySelector('.js-products-grid')
		.innerHTML = productsHTML;

//3 Make it interactive

		function addToCart(productId){
			
			let matchingItem;
				 
				cart.forEach(function(item){
					if(item.productId === productId){
					 matchingItem = item;
					}
				});
				if(matchingItem){
					matchingItem.quantity = matchingItem.quantity + 1;
				}
				else{
				cart.push({
					productId: productId,
					quantity: 1
				});	
				}
		}
		
		function upDataCartQuantity(){
			
			let cartQuantity = 0;
				
				cart.forEach(function(item){
					cartQuantity = cartQuantity + item.quantity;
				});
				
				document.querySelector('.js-cart-quantity')
					.innerHTML = cartQuantity;
}
		document.querySelectorAll('.js-add-to-cart')
			.forEach(function(button){
				button.addEventListener('click', function(){
				
				const productId = button.dataset.productId;
					
				// we are running code that adds the product to the cart
				addToCart(productId);
				
				// we are running code that calculates the quantity and updata page		
				upDataCartQuantity();
			
			});
			
		});
		
		// Remove button DOM
		
		document.querySelectorAll('.js-delete-link')
			.forEach(function(link){
				link.addEventListener('click',function(){	
				
				const productId = link.dataset.productId;
				removeFromCart(productId);
				/*
					DOM
					1. Use the DOM to get the element to remove
					2. Use . remove() method
				*/		
			const container = document.querySelector
			(`.js-product-container-${productId}`
			);
			// template string S{}
			container.remove();
			
				});
					
			});
	
		
		/*	Steps Remove from Cart
			1.Create a new Array
			2.Loop throught the Cart
			3.Add each product to the new array, except for this productId
		*/
			
			function removeFromCart(productId){
				const newCart = [];
				
				cart.forEach(function(cartItem){
					if(cartItem.productId !== productId){
						newCart.push(cartItem);
					}
				});
				cart = newCart;
			}
			
	