import React, { useState } from 'react';
import catAndHumanIllustration from "../../images/hero.png";
import { Divider, GridList, Grid} from '@material-ui/core'

function ProductCard() {
    const [productList, setProductList] = useState([
        { id: 1, name: "Whirlpool Wash...", imageSrc: catAndHumanIllustration, price: "4500.99" },
        { id: 2, name: "Whirlpool Fridge", imageSrc: catAndHumanIllustration, price: "2500.99" },
        { id: 3, name: "Whirlpool T.V", imageSrc: catAndHumanIllustration, price: "3500.99" },
        { id: 4, name: "Whirlpool T.V", imageSrc: catAndHumanIllustration, price: "3500.99" },
    ])

    const productArray = productList.map(e => {
        return (
            <div class="max-w-sm rounded overflow-hidden shadow-lg sm:w-1/4 ml-10 mt-4 mb-8">
                <img class="w-full" src={e.imageSrc} alt="Sunset in the mountains" ></img>
                <div class="text-gray-800 text-xl ml-2 mb-2">{e.name}</div>
                <div className="m-2">
                    <Divider />
                </div>
                <div class="flex row">
                    <div class="text-gray-700 text-md ml-2 mb-2 sm:w-1/3 md:w-1/4">${e.price}</div>
                    <div class="text-gray-700 text-md ml-2 mb-2 sm:w-1/3 ml-auto">Buy</div>
                </div>
            </div>
        )
    })

    return (
        <Grid container cols={3} className="ml-16">
            {productArray}
        </Grid >
    )
}

export default ProductCard;