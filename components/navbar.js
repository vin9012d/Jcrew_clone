function navbar () {
    return `
    <div id ="options">
            <img id = "logo" src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5KK9ADgSi2BO9dOLPH3epWfEeLe4m-RzqYPb7YLcjW7MArQu19_sXSS3jhXy807JJOg&usqp=CAU">
            <div><a href = "https://www.google.com/">New</a></div>
            <div>Women</div>
            <div>Men</div>
            <div><a href = "kids.html">Kids</a></div>
            <div>Swim</div>
            <div>Cashmare</div>
            <div>Home</div>
            <div>Stories</div>
            <div>Sale</div>
        </div>   
        
        <div id ="search">
            <input type = "text" placeholder ="Search j.crew">
            <i class="fa-light fa-magnifying-glass"></i>
            <div id = "LoginSignUp">Sign In</div>
            <div><a href = "wishlist.html"><i class="fa-light fa-heart"></i></a></div>
            <div><a href = "cart.html"><i class="fa-light fa-bag-shopping"></i></a></div>

        </div>  `
}

export default navbar