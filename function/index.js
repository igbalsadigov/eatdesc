const div = document.querySelector('.offerProduct');
const count = document.querySelector('.alo');

let db;

function getAllData() {
    axios.get('https://fakestoreapi.com/products').then(res => {
        db = res.data;
        db.forEach(item => {
            let box = document.createElement("div");

            box.className = "product";
            box.innerHTML = `
                <div class="proImg">
                    <img src="${item.image}" alt="">
                </div>
                <div class="proDesc">
                    <h5>${item.title}</h5>
                    <p>${item.category}</p>
                    <h4>$${item.price}</h4>
                    <button onclick="addToCart(${item.id})">Order Now!</button>
                </div>
            `;
            div.appendChild(box);
        });
    });
}


getAllData();



function addToCart(id) {
    let cart = JSON.parse(localStorage.getItem('cart')) || []
    cart.push(db.find(item => item.id == id))
    localStorage.setItem('cart', JSON.stringify(cart))
}

getAllData();
