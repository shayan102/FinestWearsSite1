let carts = document.querySelectorAll('.add-cart');

let products = [
     
    {
        name: "Girl party dress",
        tag: "girlgoldendress",
        price: 3299,
        inCart: 0
    },
    {
        name: "Girl party frock",
        tag: "pinkgirlfrock",
        price: 3699,
        inCart: 0
    },
    {
        name: "Girl casual upper",
        tag: "girlgreyupper",
        price: 2099,
        inCart: 0
    },
    {
        name: "Girl casual suit",
        tag: "girlgreensuit",
        price: 2299,
        inCart: 0
    },
    {
        name: "Girl casual suit",
        tag: "girlbluesuit",
        price: 2799,
        inCart: 0
    },
    {
        name: "Girl casual suit",
        tag: "girlgreencasual",
        price: 2099,
        inCart: 0
    },
    {
        name: "girl casual dress",
        tag: "girlyellowsuit",
        price: 1699,
        inCart: 0
    },
    {
        name: "Girl party sharara",
        tag: "girlblacksharara",
        price: 3199,
        inCart: 0
    },
    {
        name: "Boy suit",
        tag: "boywhitesuit",
        price: 2499,
        inCart: 0
    },
    {
        name: "Boy shalwar kameez",
        tag: "boyredsuit",
        price: 2099,
        inCart: 0
    },
    {
        name: "Boy shalwar kameez",
        tag: "boywhitesuit",
        price: 1999,
        inCart: 0
    },
    {
        name: "Boy tshirt",
        tag: "boygreytshirt",
        price: 1099,
        inCart: 0
    },
    {
        name: "Boy kameez pajama",
        tag: "boysilversuit",
        price: 1899,
        inCart: 0
    },
    {
        name: "Boy waistcoat",
        tag: "boygoldencoat",
        price: 1099,
        inCart: 0
    },
    {
        name: "Boy casual dress",
        tag: "boybluecasual",
        price: 1999,
        inCart: 0
    },
    {
        name: "Boy shalwar kameez",
        tag: "boygreensuit",
        price: 1899,
        inCart: 0
    }
];



for (let i = 0; i < carts.length; i++) {
    carts[i].addEventListener('click', () => {
        console.log("no of loos " , products[i]);
        cartNumbers(products[i]);
        totalCost(products[i]);
    })
}


function onLoadCartNumber() {
    let productNumbers = localStorage.getItem('cartNumbers');

    if (productNumbers) {
        document.querySelector('.cart span').textContent = productNumbers;
    }
}

function cartNumbers(product) {
    let productNumbers = localStorage.getItem('cartNumbers');

    productNumbers = parseInt(productNumbers);

    if (productNumbers) {
        localStorage.setItem('cartNumbers', productNumbers + 1);
        document.querySelector('.cart span').textContent = productNumbers + 1;

    } else {
        localStorage.setItem('cartNumbers', 1);
        document.querySelector('.cart span').textContent = 1;
    }
    setItems(product);
}

function setItems(product) {
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);

    if (cartItems != null) {

        if (cartItems[product.tag] == undefined) {
            cartItems = {
                ...cartItems,
                [product.tag]: product
            }
        }
        cartItems[product.tag].inCart += 1;
    } else {
        product.inCart = 1;
        cartItems = {
            [product.tag]: product
        }
    }
    localStorage.setItem('productsInCart', JSON.stringify(cartItems));
}

function totalCost(product) {
    let cartCost = localStorage.getItem('totalCost');

    if (cartCost != null) {
        cartCost = parseInt(cartCost);
        localStorage.setItem('totalCost', cartCost + product.price);
    } else {
        localStorage.setItem('totalCost', product.price);
    }
}

function displayCart() {
    let cartItems = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems);
    let productContainer = document.querySelector(".products");
    let cartCost = localStorage.getItem('totalCost');

    console.log(cartItems);

    if (cartItems && productContainer) {
        productContainer.innerHTML = '';
        Object.values(cartItems).map(item => {
            productContainer.innerHTML += `
            <div class = "col-3 col-sm-5 col-lg-5 product"> 
            <ion-icon name="close-circle-outline"></ion-icon> 
            <span>${item.name}</span>
            </div>

            <div class = "col-2 col-sm-2 col-lg-2 price" > ${item.price}.00Rs
        </div>

        <div class = "col-4 col-sm-3 col-lg-3 quantity" >
        <ion-icon class= "decrease"
         name="arrow-back-circle-outline"></ion-icon>
         <span>${item.inCart}</span>
         <ion-icon class="increase"
          name="arrow-forward-circle-outline"></ion-icon>
      </div>
            <div class="col-2 col-sm-2 col-lg-2 total"> ${item.inCart * item.price}.00Rs </div>
            `
        });

        productContainer.innerHTML += `
        
        <div class ="offset-6 col-6 offset-7 col-sm-5 col-lg-5  basketCostContainer">
        <h4 class = "basketTotalTitle">
          Basket Total Cost: </h4>
          <h4 class = "basketTotal" >
            ${cartCost}.00Rs
          </h4>
          </div>
        ` ;
    }
}

onLoadCartNumber();
displayCart();