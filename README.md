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


<% for (let i = 0; i < products.length; i++) { %>
        <% if (products[i].category === 'Glassware') { %>
            <!-- <a href="/glassware/<%= products.id %>"> -->
                <%= products %>
            <!-- </a> -->
        <% } %>
    <% } %> 