const anaDiv = document.querySelector('.offerProduct')
const count = document.querySelector('.alo');

function getCartData() {
    anaDiv.innerHTML = ``
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.forEach((item, index) => {
        let box = document.createElement("div");
        box.className = "product";
        box.innerHTML = `
        <div class="proImg">
         <img src="${item.image}" alt="">
        </div>
        <div class="proDesc">
        <h5>${item.category}</h5>
        <p>${item.title}</p>
        <h4>$${item.price}</h4>
        <button class="cartBtn" onclick="deleteItem(${index})">DELETEㅤ<i class="fa-solid fa-trash"></i></button>
        </div>
            `;
        anaDiv.appendChild(box);
    });
}


function deleteItem(index) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.splice(index, 1)
    localStorage.setItem('cart', JSON.stringify(cart))
    getCartData()
}

getCartData()



