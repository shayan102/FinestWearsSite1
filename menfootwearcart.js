let carts = document.querySelectorAll('.add-cart');

let products = [
    {
        name: "Men cut shoes",
        tag: "browncutshoes",
        price: 1599,
        inCart: 0
    },
    {
        name: "Men formal boots",
        tag: "brownformalboot",
        price: 1999,
        inCart: 0
    },
    {
        name: "Men cut shoes",
        tag: "cutshoes",
        price: 1699,
        inCart: 0
    },
    {
        name: "Men cut shoes",
        tag: "bluecutshoes",
        price: 1699,
        inCart: 0
    },
    {
        name: "Men formal boot",
        tag: "brownformalboot",
        price: 1899,
        inCart: 0
    },
    {
        name: "Men Black sandal",
        tag: "blacksandal",
        price: 1299,
        inCart: 0
    },
    {
        name: "Men formal laofer",
        tag: "blackformalloafer",
        price: 1899,
        inCart: 0
    },
    {
        name: "Men Nike casual slippers",
        tag: "casualslippers",
        price: 1099,
        inCart: 0
    },
    {
        name: "Men printed sandal",
        tag: "brownprintedsandal",
        price: 1499,
        inCart: 0
    },
    {
        name: "Men formal loafer",
        tag: "formalloafer",
        price: 2099,
        inCart: 0
    },
    {
        name: "Men jogging shoes",
        tag: "bluejoggingshoes",
        price: 2999,
        inCart: 0
    },
    {
        name: "Men party shoes",
        tag: "bluepartyshoes",
        price: 1899,
        inCart: 0
    },
    {
        name: "Men party shoes",
        tag: "blackpartyshoes",
        price: 1899,
        inCart: 0
    },
    {
        name: "Men jogging shoes",
        tag: "jogginshoes",
        price: 3099,
        inCart: 0
    },
    {
        name: "Men party shoes",
        tag: "partyshoes",
        price: 1999,
        inCart: 0
    },
    {
        name: "Men party shoes",
        tag: "lightblueshoes",
        price: 2099,
        inCart: 0
    },
    {
        name: "Men velvet sandal",
        tag: "velvetsandal",
        price: 1699,
        inCart: 0
    },
    {
        name: "Men closed sandal",
        tag: "brownclosedsandal",
        price: 2399,
        inCart: 0
    },
    {
        name: "Men formal boots",
        tag: "blackboot",
        price: 2599,
        inCart: 0
    },
    {
        name: "Men printed boot",
        tag: "brownprintedboot",
        price: 2699,
        inCart: 0
    },
    {
        name: "Men cut shoes",
        tag: "camelbrownshoes",
        price: 2099,
        inCart: 0
    },

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