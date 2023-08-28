import Product from '@/app/list/page.js'

let product = ['Tomatoes', 'Pasta', 'Coconut']


export default function Cart() {
    return (
        <div>
            <h4 className="title">Cart</h4>
            <CartItem />
        </div>
    )
}

function CartItem() {
    return (
        product.map((product, i) => {
            return (
                <div className="cart-item">
                    <p>{product}</p>
                    <p>${i + Math.floor(Math.random() * 1000 + 1)}</p>
                    <p>{i + Math.floor(Math.random() * 10 + 1)}</p>
                </div>
            )
        })

    )
}