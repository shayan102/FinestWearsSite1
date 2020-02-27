let carts = document.querySelectorAll('.add-cart');

let products = [
    {
        name: 'Men printed dress pant',
        tag: 'greydresspant',
        price: 899,
        inCart: 0
    },
    {
        name: "Men narrow dress jeans",
        tag: "navybluejeans",
        price: 899,
        inCart: 0
    },
    {
        name: "Men office dress pant",
        tag: "camelbrowndress",
        price: 999,
        inCart: 0
    },
    {
        name: "Men cargo jeans",
        tag: "seagreenjeans",
        price: 1199,
        inCart: 0
    },
    {
        name: "Men office dress pant",
        tag: "bluedresspant",
        price: 999,
        inCart: 0
    },
    {
        name: "Men office dress pant",
        tag: "greyofficepant",
        price: 1099,
        inCart: 0
    },
    {
        name: "Men printed dress pant",
        tag: "greyprintedpant",
        price: 1199,
        inCart: 0
    },
    {
        name: "Men plain dress jeans",
        tag: "cameldressjeans",
        price: 799,
        inCart: 0
    },
    {
        name: "Men cotton jeans",
        tag: "bluecottonjeans",
        price: 899,
        inCart: 0
    },
    {
        name: "Men plain dress jeans",
        tag: "whitedressjeans",
        price: 799,
        inCart: 0
    },
    {
        name: "Men jeans",
        tag: "bluejeans",
        price: 999,
        inCart: 0
    },
    {
        name: "Men hard jeans",
        tag: "bluehardjeans",
        price: 799,
        inCart: 0 
    },
    
    {
        name: "Men office shirt",
        tag: "blueofficeshirt",
        price: 1299,
        inCart: 0
    },
    {
        name: "Men Office Shirt",
        tag: "coffeeofficeshirt",
        price: 1299,
        inCart: 0
    },
    {
        name: "Men office shirt",
        tag: "redofficeshirt",
        price: 1299,
        inCart: 0
    },
    {
        name: "Men polka dot shirt",
        tag: "bluepolkashirt",
        price: 1099,
        inCart: 0
    },
    {
        name: "Men printed office shirt",
        tag: "blueprintedshirt",
        price: 1199,
        inCart: 0
    },
    {
        name: "Men printed casual shirt",
        tag: "whitecasualshirt",
        price: 1099,
        inCart: 0
    },
    {
        name: "Men lined shirt",
        tag: "greylinedshirt",
        price: 1199,
        inCart: 0
    },
    {
        name: "Men polka dot shirt",
        tag: "blackpolkashirt",
        price: 1199,
        inCart: 0
    },
    {
        name: "Men printed casual shirt",
        tag: "bluecasualshirt",
        price: 1099,
        inCart: 0
    },
    {
        name: "Men plain suit",
        tag: "blueplainsuit",
        price: 8799,
        inCart: 0
    },
    {
        name: "Men printed suit",
        tag: "greyprintedsuit",
        price: 8599,
        inCart: 0
    },
    {
        name: "Men lined suit",
        tag: "greylinedsuit",
        price: 8999,
        inCart: 0
    },
    {
        name: "Men plain suit",
        tag: "greysuit",
        price: 9099,
        inCart: 0
    },
    {
        name: "Men plain suit",
        tag: "blackplainsuit",
        price: 8499,
        inCart: 0
    },
    {
        name: "Men texture suit",
        tag: "greyishsuit",
        price: 8199,
        inCart: 0
    },
    {
        name: "Men plain suit",
        tag: "lightbluesuit",
        price: 8599,
        inCart: 0
    },
    {
        name: "Men plain suit",
        tag: "goldensuit",
        price: 8999,
        inCart: 0
    },
    {
        name: "Men plain suit",
        tag: "purplesuit",
        price: 9299,
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