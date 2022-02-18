# Unit-2-GA-project

Products database:

Categories -- 
    -Drinkware
        -Coupe
        -Martini
        -Rocks
        -Highball
        -Hurricane
        -Tiki mug
    -Bar essentials: 
        -Bar spoons
        -Jiggers
        -Mixers
        -Strainers
    -Ice stuff
        -Stamp
        -Molds
        -Something cool
    -Accessories
        -Peeler
        -Juicer
        -Roll-up kit
    -Books
    -Bitters


Store names:
Life behind bars

USER STORY: 

User creates account 
    Database for users:
        -Name
        -Email
        -Cart items - (these will get added to this database based on what the user adds to their cart when browsing)
User is signed into the account
User adds item(s) to cart
User goes to cart page which displays:
    -Name of each item added
    -Price of each item added
    -Quantity of each item added
    -Ability to remove items from their cart (NOTE: How do I remove one item only? ex. if the user has three of one item but wants to change to one. Would this require a separate edit route? How would this tie into the quantity and database? I'm really confused)
    -Total price of order (adding every item price together)
User clicks 'checkout' button
New page displaying a form for:
    -Full name
    -Address
    -CC info?
    -Submit order


<div class="container">
        <div class="card row" id="card-hover" style="width: 24rem">
            <div class="col">
               <a href="/essentials">
                    <img src="/Japanese-jigger.jpeg" class="card-img-top">
                    <div class="card-body">
                        <p class="card-text">Bar Essentials</p>
                    </div>
                </a> 
            </div>
        </div> 
        
        <div class="card row" id="card-hover" style="width: 24rem">
            <div class="col">
                <a href="/glassware">
                    <img src="/highball.jpeg" class="card-img-top">
                    <div class="card-body">
                        <p class="card-text">Glassware</p>
                    </div>
                </a>  
            </div>  
        </div> 

        <div class="card row" id="card-hover" style="width: 24rem">
            <div class="col">
                <a href="/accessories">
                    <img src="/roll-up-kit-2.jpeg" class="card-img-top">
                    <div class="card-body">
                        <p class="card-text">Accessories</p>
                    </div>
                </a>   
            </div>   
        </div> 

        <div class="card row" id="card-hover" style="width: 24rem">
            <div class="col">
                <a href="/ice">
                    <img src="/ice-stamp-glass.jpg" class="card-img-top">
                    <div class="card-body">
                        <p class="card-text">Ice Tools</p>
                    </div>
                </a>  
            </div>   
        </div> 
    </div>


    <% for (let i = 0; i < products.length; i++) { %>
        <% if (products[i].category === 'Essentials') { %>
            <a href="/<%= products[i].id %>">
                <%= products[i].name %>
            </a>
        <% } %>
    <% } %> 