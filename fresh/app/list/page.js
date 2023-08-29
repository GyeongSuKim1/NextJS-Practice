// import Image from "next/image"
// import food from '@/public/food0.png'

let product = ['Tomatoes', 'Pasta', 'Coconut']

export default function List() {
    return (
        <div>
            <h4 className="title">List</h4>
            <FoodList />
        </div>
    )
}

function FoodList() {
    return (
        product.map((product, i) => {
            return (
                <div className="food" key={i}>
                    <img src={`/food${i}.png`} className="food-img"></img>
                    <h4>{product} ${i * 10}</h4>
                </div>
            )
        })
    )
}