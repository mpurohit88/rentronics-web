import React from "react";
import SEO from "../components/seo";
import ProductCard from '../components/ui/card'
import ProductFilter from '../components/productComponents/productFilter.js'

function productPage() {
    return (
        <div class="container flex">
            <div class="md:w-1/4">
                <ProductFilter />
            </div>
             <div class="md:w-3/4">
                <ProductCard />
            </div>
        </div>
    )
}

export default productPage;
