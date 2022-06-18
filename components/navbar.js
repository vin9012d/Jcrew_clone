function navbar () {
    return `
    
    <div id ="options">
            <img id = "logo" src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5KK9ADgSi2BO9dOLPH3epWfEeLe4m-RzqYPb7YLcjW7MArQu19_sXSS3jhXy807JJOg&usqp=CAU">
            <div>New</div>
            <div><a href = "womenData.html">Women</a></div>
            <div><a href = "menData.html">Men</a></div>
            <div><a href = "kids.html">Kids</a></div>
            <div>Swim</div>
            <div>Cashmare</div>
            <div>Home</div>
            <div>Stories</div>
            <div ><a href = "sale.html" style="color : #da2a2a;">Sale</a></div>
        </div>   
        
        <div id ="search">
            <input type = "text" placeholder ="Search j.crew">
            <i class="fa-light fa-magnifying-glass"></i>
            <div id = "LoginSignUp">Sign In</div>
            <div><a href = "wishlist.html"><i class="fa-light fa-heart"></i></a>
                <div id = "wishlist_count"></div>
            </div>
            <div><a href = "cart.html"><i class="fa-light fa-bag-shopping"></i></a>
                <div id = "cartlist_count"></div>
            </div>

        </div>  `
}


function sidebar(){
    return `
    <button onclick="myFunction()" class="dropbtn">☰</button>
    <div id="myDropdown" class="dropdown-content">
      <div><a href = "#">New</a></div>
      <div><a href = "womenData.html">Women</a></div>
      <div><a href = "menData.html">Men</a></div>
      <div><a href = "kids.html">Kids</a></div>
      <div><a href = "#">Swim</a></div>
      <div><a href = "#">Cashmare</a></div>
      <div><a href = "#">Home</a></div>
      <div><a href = "#">Stories</a></div>
      <div><a href = "sale.html">Sale</a></div>
    </div>
    `;
}

export {navbar,sidebar}