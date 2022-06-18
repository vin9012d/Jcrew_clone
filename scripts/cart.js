var subTotal = 0;

let wishData = JSON.parse(localStorage.getItem("favItem")) || [];

// Displaying total items quantity in cart
let itemsCount = (data, totalItems) => {
    let count = 0;

    data.forEach(el => {
        count += Number(el.quantity);
    });

    totalItems.innerText = count > 1 ? `${count} Items` : totalItems.innerText = `${count} Item`;
}

// Removing product from cart
let removeCartProduct = (data, i) => {
    data.splice(i, 1);
    localStorage.setItem("cartData", JSON.stringify(data));
    window.location.reload();
}

// Removing saved product from cart
let removeSavedProduct = (data, i) => {
    data.splice(i, 1);
    localStorage.setItem("savedProduct", JSON.stringify(data));
    window.location.reload();
}

// Saving Item for later use
let saveProduct = (data, i) => {
    let arr = JSON.parse(localStorage.getItem("savedProduct")) || [];
    arr.push(data[i]);

    data.splice(i, 1);

    localStorage.setItem("savedProduct", JSON.stringify(arr));
    localStorage.setItem("cartData", JSON.stringify(data));
    window.location.reload();
}

// Adding product to bag
let addToBag = (data, i) => {
    let arr = JSON.parse(localStorage.getItem("cartData")) || [];
    arr.push(data[i]);

    data.splice(i, 1);

    localStorage.setItem("cartData", JSON.stringify(arr));
    localStorage.setItem("savedProduct", JSON.stringify(data));
    window.location.reload();
}

// Updating Product quantity
let updateQty = (total, amount, qty, price, data, totalItems) => {
    total = amount * qty;
    total = new Intl.NumberFormat().format(total);
    total = total.includes(".") ? total : total + ".00";

    price.innerText = total;
    localStorage.setItem("cartData", JSON.stringify(data));

    itemsCount(data, totalItems);
}

// Removing product from wishlist
let removeWishProduct = (wishData, i) => {
    wishData.splice(i, 1);
    localStorage.setItem("favItem", JSON.stringify(wishData));
    window.location.reload();
    return false;
}

// Appending product to the shopping bag
let append_sb = (bag, data, totalItems, subTotal_1, subTotal_2) => {
    let div1 = document.createElement("div");
    div1.id = "product_heading";

    let div2 = document.createElement("div");

    let p1 = document.createElement("p");
    p1.innerText = "ITEM";

    let p2 = document.createElement("p");
    p2.innerText = "PRICE";

    let p3 = document.createElement("p");
    p3.innerText = "QTY";

    div2.append(p2, p3);

    div1.append(p1, div2);

    bag.append(div1);

    data.forEach((el, i) => {
        let div = document.createElement("div");
        div.id = "cart_product";

        let div3 = document.createElement("div");
        let div4 = document.createElement("div");

        let div5 = document.createElement("div");
        div5.id = "sb_options";

        let div6 = document.createElement("div");
        let div7 = document.createElement("div");

        let image = document.createElement("img");
        image.id = "cart_product_img";
        image.src = el.imgUrl;

        let wishIcon = document.createElement("i");
        wishIcon.id = "wish_icon";
        wishIcon.setAttribute("class", "fa-regular fa-heart fa-xl");

        wishData.forEach((element) => {
            if (element.name == el.name && element.color == el.color && element.size == el.size) {
                wishIcon.setAttribute("class", "fa-solid fa-heart fa-xl");
            }
        });

        // Adding or removing wishlist products
        wishIcon.onclick = () => {
            let flag = true;
            wishData.forEach((element, index) => {
                if (element.name == el.name && element.color == el.color && element.size == el.size) {
                    wishIcon.setAttribute("class", "fa-regular fa-heart fa-xl");
                    flag = removeWishProduct(wishData, index);
                }
            });

            if (flag) {
                wishIcon.setAttribute("class", "fa-solid fa-heart fa-xl");
                wishData.push(el);
                localStorage.setItem("favItem", JSON.stringify(wishData));
            }
        }

        let div9 = document.createElement("div");
        div9.append(image, wishIcon);

        let name = document.createElement("p");
        name.innerText = el.name;

        // let item = document.createElement("p");
        // item.innerText = "Item " + el.item;

        let size = document.createElement("p");
        size.innerText = "Size: " + el.size;

        let color = document.createElement("p");
        color.innerText = "Color: " + el.color;

        let currency = document.createElement("p");
        currency.innerText = "INR";

        let price = document.createElement("p");
        let amount = +el.strikePrice.replace(/,/g, "");
        let total = amount * Number(data[i].quantity);

        subTotal += total;

        total = new Intl.NumberFormat().format(total);
        total = total.includes(".") ? total : total + ".00";
        price.innerText = total;

        var temp = new Intl.NumberFormat().format(subTotal);
        temp = temp.includes(".") ? temp : temp + ".00";
        subTotal_1.innerText = "INR " + temp;
        subTotal_2.innerText = "INR " + temp;

        // Decrementing quantity of the product
        let dec = document.createElement("p");
        dec.id = "dec";
        dec.innerText = "_";
        dec.onclick = () => {
            if (el.quantity == 1) {
                removeCartProduct(data, i);
            }
            else {
                Number(data[i].quantity--);

                subTotal -= amount;
                temp = new Intl.NumberFormat().format(subTotal);
                temp = temp.includes(".") ? temp : temp + ".00";
                subTotal_1.innerText = "INR " + temp;
                subTotal_2.innerText = "INR " + temp;
                console.log(temp)

                updateQty(total, amount, Number(data[i].quantity), price, data, totalItems);
            }
        }

        // Incrementing quantity of the product
        let inc = document.createElement("p");
        inc.id = "inc";
        inc.innerText = "+";
        inc.onclick = () => {
            Number(data[i].quantity++);

            subTotal += amount;
            temp = new Intl.NumberFormat().format(subTotal);
            temp = temp.includes(".") ? temp : temp + ".00";
            subTotal_1.innerText = "INR " + temp;
            subTotal_2.innerText = "INR " + temp;
            console.log(temp)

            updateQty(total, amount, Number(data[i].quantity), price, data, totalItems);
        }

        let div8 = document.createElement("div");
        div8.id = "counter";

        // Getting increment and decrement options
        div8.onclick = () => {
            div8.innerHTML = "";
            div8.style.margin = "0 0 93px -15px";
            div8.append(dec, Number(el.quantity), inc)
        }

        let p4 = document.createElement("p")
        p4.innerText = "Remove";
        p4.style.cursor = "pointer";

        // Removing Product
        p4.addEventListener("click", function () {
            removeCartProduct(data, i);
        });

        let p5 = document.createElement("p")
        p5.innerText = "Save for Later";
        p5.style.cursor = "pointer";

        // Saving Product
        p5.addEventListener("click", function () {
            saveProduct(data, i);
        });

        // let p6 = document.createElement("p")
        // p6.innerText = "Edit";
        // p6.style.cursor = "pointer";

        let hr = document.createElement("hr");

        div8.append(el.quantity);

        div7.append(currency, price);

        div6.append(div7, div8);

        div5.append(p4, p5);

        div4.append(name, size, color, div5);

        div3.append(div9, div4);

        div.append(div3, div6);

        bag.append(hr, div);

        itemsCount(data, totalItems);
    });
};

// Appending product to saved for later bag
let append_sl = (bag, data, totalProducts) => {
    data.forEach((el, i) => {
        let div = document.createElement("div");
        div.id = "saved_product";

        let div1 = document.createElement("div");
        let div2 = document.createElement("div");

        let div3 = document.createElement("div");
        div3.id = "sl_options";

        let div4 = document.createElement("div");

        let image = document.createElement("img");
        image.id = "saved_product_img";
        image.src = el.imgUrl;

        let wishIcon = document.createElement("i");
        wishIcon.id = "wish_icon";
        wishIcon.setAttribute("class", "fa-regular fa-heart fa-xl");

        wishData.forEach((element) => {
            if (element.name == el.name && element.color == el.color && element.size == el.size) {
                wishIcon.setAttribute("class", "fa-solid fa-heart fa-xl");
            }
        });

        // Adding or removing wishlist products
        wishIcon.onclick = () => {
            let flag = true;
            wishData.forEach((element, index) => {
                if (element.name == el.name && element.color == el.color && element.size == el.size) {
                    wishIcon.setAttribute("class", "fa-regular fa-heart fa-xl");
                    flag = removeWishProduct(wishData, index);
                }
            });

            if (flag) {
                wishIcon.setAttribute("class", "fa-solid fa-heart fa-xl");
                wishData.push(el);
                localStorage.setItem("favItem", JSON.stringify(wishData));
            }
        }

        let div5 = document.createElement("div");
        div5.append(image, wishIcon);

        let name = document.createElement("p");
        name.innerText = el.name;

        // let item = document.createElement("p");
        // item.innerText = "Item " + el.item;

        let size = document.createElement("p");
        size.innerText = "Size: " + el.size;

        let color = document.createElement("p");
        color.innerText = "Color: " + el.color;

        let currency = document.createElement("p");
        currency.innerText = "INR";

        let price = document.createElement("p");
        price.innerText = el.strikePrice;

        let p1 = document.createElement("p")
        p1.innerText = "Remove";
        p1.style.cursor = "pointer";

        // Removing Product
        p1.addEventListener("click", function () {
            removeSavedProduct(data, i);
        });

        let p2 = document.createElement("p");
        p2.innerText = "Add to Bag";
        p2.style.cursor = "pointer";
        p2.style.padding = "7px";
        p2.style.margin = "-2px 0 0 8px";

        // Adding product to bag
        p2.addEventListener("click", function () {
            addToBag(data, i);
        });

        div4.append(currency, price);

        div3.append(p1, p2);

        div2.append(name, size, color, div3);

        div1.append(div5, div2);

        div.append(div1, div4);

        bag.append(div);

        // Displaying number of products in bag
        if (data.length > 1) {
            totalProducts.innerText = `${data.length} of ${data.length} Items`;
        }
        else {
            totalProducts.innerText = `${data.length} of ${data.length} Item`;
        }
    });
};

export { append_sb, append_sl };