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
        tag: "brownformalboot2",
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
    {
        name: "Women white-red lawn suit",
        tag: "whiteredlawn",
        price: 2099,
        inCart: 0
    },
    {
        name: "Women white-grey lawn suit",
        tag: "whitegreylawn",
        price: 2099,
        inCart: 0
    },
    {
        name: "Women sea-green lawn suit",
        tag: "seagreenlawn",
        price: 2099,
        inCart: 0
    },
    {
        name: "Women white lawn suit",
        tag: "whitelawn",
        price: 2299,
        inCart: 0
    },
    {
        name: "Women cream lawn suit",
        tag: "creamlawn",
        price: 2199,
        inCart: 0
    },
    {
        name: "Women blue lawn suit",
        tag: "bluelawn",
        price: 2099,
        inCart: 0
    },
    {
        name: "Women black lawn suit",
        tag: "blacklawn",
        price: 2099,
        inCart: 0
    },
    {
        name: "Women sky-blue lawn suit",
        tag: "skybluelawn",
        price: 2099,
        inCart: 0
    },
    {
        name: "Women pink-blue lawn suit ",
        tag: "pinkbluelawn",
        price: 2099,
        inCart: 0
    },
    {
        name: "Women purple lawn suit",
        tag: "purplelawn",
        price: 2099,
        inCart: 0
    },
    {
        name: "Women printed black suit",
        tag: "blackprintedlawn",
        price: 2099,
        inCart: 0
    },
    {
        name: "Women party dress",
        tag: "goldenpartydress",
        price: 4399,
        inCart: 0
    },
    {
        name: "Women net party dress",
        tag: "greennetdress",
        price: 6399,
        inCart: 0
    },
    {
        name: "Women net party dress",
        tag: "skybluenetdress",
        price: 5299,
        inCart: 0
    },
    {
        name: "Women party maxi",
        tag: "greenpartymaxi",
        price: 5999,
        inCart: 0
    },
    {
        name: "Women party sharara",
        tag: "silversharara",
        price: 7099,
        inCart: 0
    },
    {
        name: "Women party dress",
        tag: "blackpartydress",
        price: 3099,
        inCart: 0
    },
    {
        name: "Women party dress",
        tag: "greenpartydress",
        price: 3099,
        inCart: 0
    },
    {
        name: "Women fancy party dress",
        tag: "goldenpartydress2",
        price: 5099,
        inCart: 0
    },
    {
        name: "Women fancy party dress",
        tag: "pinkgreendress",
        price: 4699,
        inCart: 0
    },
    {
        name: "Women fancy party dress",
        tag: "blackfancyparty",
        price: 3999,
        inCart: 0
    },
    {
        name: "Women net party maxi",
        tag: "greybrownmaxi",
        price: 5999,
        inCart: 0
    },
    {
        name: "Women traditional sandal",
        tag: "redsandal",
        price: 1299,
        inCart: 0
    },
    {
        name: "Women casual sandal",
        tag: "redcasual",
        price: 1099,
        inCart: 0
    },
    {
        name: "Women party heels",
        tag: "redheels",
        price: 2999,
        inCart: 0
    },
    {
        name: "Women party heels",
        tag: "silverheels",
        price: 3299,
        inCart: 0
    },
    {
        name: "Women party heels",
        tag: "goldenheels",
        price: 3199,
        inCart: 0
    },
    {
        name: "Women casual slippers",
        tag: "blackslippers",
        price: 1499,
        inCart: 0
    },
    {
        name: "Women tradditional shoes",
        tag: "redtraditional",
        price: 1299,
        inCart: 0
    },
    {
        name: "Women traditional slippers",
        tag: "brownslipper",
        price: 1799,
        inCart: 0
    },
    {
        name: "Women office shoes",
        tag: "yellowofficeshoes",
        price: 1599,
        inCart: 0
    },
    {
        name: "Women party sandal",
        tag: "goldenparty",
        price: 1899,
        inCart: 0
    },
    {
        name: "Women traditional slippers",
        tag: "blueslippers",
        price: 1599,
        inCart: 0
    },
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
        tag: "boywhitesuit2",
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
        tag: "boysilversuit2",
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
        console.log("no of loos ", products[i]);
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

    if (cartCost != null || cartCost == "0") {
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
    let productNumbers = localStorage.getItem('cartNumbers');

    console.log(cartItems);

    if (cartItems && productContainer && productNumbers != 0) {
        productContainer.innerHTML = '';
        Object.values(cartItems).map(item => {
            productContainer.innerHTML += `
            <div class = "col-3 col-sm-5 col-lg-5 product">  
            <span><img src="images/${item.tag}.jpg" width="50px" height="50px"></span> &nbsp   
            <span>${item.name}</span>
            </div>

            <div class = "col-2 col-sm-2 col-lg-2 price" > ${item.price}.00Rs
        </div>

        <div class = "col-4 col-sm-3 col-lg-3 quantity" >
         <span>${item.inCart}</span>
      </div>
            <div class="col-2 col-sm-2 col-lg-2 total"> ${item.inCart * item.price}.00Rs </div>

            `
        });

        productContainer.innerHTML += `
        
        <div class ="col-6 offset-6 col-sm-5 col-lg-5  basketCostContainer">
        <h4 class = "basketTotalTitle">
          Basket Total Cost: </h4>
          <h4 class = "basketTotal" >
            ${cartCost}.00Rs
          </h4>
          </div> 
          ` ;
    }

    productContainer.innerHTML += `

          <div class="container">
          <div class="row row-content">
              <div class="col-12 col-sm-7 col-lg-7">
              </div>

              <div class="col-12 col-sm-5 col-lg-5 cart-buttons">
                  <button type="button" class="btn btn-warning btn-lg clear-cart-btn">
                      Clear Cart
                  </button>
                  <button type="submit" class="btn btn-warning btn-lg submit-cart-btn">
                      Submit Order
                  </button>

              </div>
          </div>
      </div>
        ` ;

    var submitButton = document.getElementsByClassName("submit-cart-btn");
    for (let i = 0; i < submitButton.length; i++) {
        submitButton[i].addEventListener('click' , submitCartItem)
    };

    function submitCartItem(event){
        let buttonClicked = event.target ;
        let productsInCart =localStorage.getItem('productsInCart');

        if(productsInCart){
            for (var i = 0; i < submitButton.length; i++) {
                buttonClicked.parentElement.parentElement.parentElement.parentElement.remove();
            }
            localStorage.setItem('cartNumbers', 0);
            localStorage.setItem('totalCost', 0);
            localStorage.setItem('productsInCart', JSON.stringify(''))
            let productNumbers = localStorage.getItem('cartNumbers');

            if (productNumbers) {
                document.querySelector('.cart span').textContent = productNumbers;
            }

            alert("Your Order has Successfully Submitted. \n Thanks For Shopping with us!")

        }

        else if (productsInCart ===  null){
            alert("Your Cart is Empty");
        }
    }


    var removeButton = document.getElementsByClassName("clear-cart-btn");
    for (let i = 0; i < removeButton.length; i++) {
        removeButton[i].addEventListener('click', removeCartItem)
    };

    function removeCartItem(event) {
        var buttonClicked = event.target;
        var productsInCart = localStorage.getItem('productsInCart');
        if (productsInCart) {
            for (var i = 0; i < removeButton.length; i++) {
                buttonClicked.parentElement.parentElement.parentElement.parentElement.remove();
            }
            localStorage.setItem('cartNumbers', 0);
            localStorage.setItem('totalCost', 0);
            localStorage.setItem('productsInCart', JSON.stringify(''))
            let productNumbers = localStorage.getItem('cartNumbers');

            if (productNumbers) {
                document.querySelector('.cart span').textContent = productNumbers;
            }
        }
    };
};

onLoadCartNumber();
displayCart();