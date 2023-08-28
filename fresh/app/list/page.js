// import Image from "next/image"
// import food from '@/public/food0.png'

export default function list() {

    let product = ['Tomatoes', 'Pasta', 'Coconut']

    return (
        <div>
            <h4 className="title">List</h4>

            {product.map((product, i) => {
                return (
                <div className="food" key={i}>
                    {/* <Image src={food} className="food-img"></Image> */}
                    <img src={`/food${i}.png`} className="food-img"></img>
                    <h4>{product} ${i * 10}</h4>
                </div>
                )
            })}
        </div>
    )
}