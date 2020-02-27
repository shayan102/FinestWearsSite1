let carts = document.querySelectorAll('.add-cart');

let products = [
    {
        name: "Men open bottom trouser",
        tag: "openbottomtrouser",
        price: 799,
        inCart: 0
    },
    {
        name: "Men side strip trouser",
        tag: "sidestriptrouser",
        price: 799,
        inCart: 0
    },
    {
        name: "Men plain trouser",
        tag: "plaintrouser",
        price: 799,
        inCart: 0
    },
    {
        name: "Men narrow bottom trouser",
        tag: "narrowbottomtrouser",
        price: 899,
        inCart: 0
    },
    {
        name: "Men fit exercise trouser",
        tag: "fitexercisetrouser",
        price: 1099,
        inCart: 0
    },
    {
        name: "Men slm fit trouser",
        tag: "slimfittrouser",
        price: 899,
        inCart: 0
    },
    {
        name: "Men VQ exercise trouser",
        tag: "VQtrouser",
        price: 1199,
        inCart: 0
    },
    {
        name: "Men VQ slim fit trouser",
        tag: "VQslimfittrouser",
        price: 1299,
        inCart: 0
    },
    {
        name: "Men addidas loose trouser",
        tag: "addidasloosetrouser",
        price: 1499,
        inCart: 0
    },
    {
        name: "Men jeans casual short",
        tag: "bluecasualshorts",
        price: 699,
        inCart: 0
    },
    {
        name: "Men casual short",
        tag: "casualshorts",
        price: 699,
        inCart: 0
    },
    {
        name: "Men Nike exercise shorts",
        tag: "nikeexerciseshort",
        price: 699,
        inCart: 0
    },
    {
        name: "Men cargo casual shorts",
        tag: "cargocasualshort",
        price: 699,
        inCart: 0
    },
    {
        name: "Men Mp casual shorts",
        tag: "mpcasualshort",
        price: 699,
        inCart: 0
    },
    {
        name: "Men jeans damaged shorts",
        tag: "jeansshorts",
        price: 699,
        inCart: 0
    },
    {
        name: "Men jeans casual shorts",
        tag: "jeanscasualshorts",
        price: 699,
        inCart: 0
    },
    {
        name: "Men narrow casual shorts",
        tag: "narrowcasualshorts",
        price: 699,
        inCart: 0
    },
    {
        name: "Men Hawai shorts",
        tag: "hawaishort",
        price: 699,
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