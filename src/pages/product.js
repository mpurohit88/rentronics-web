import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import ProductCard from '../components/ui/card'
import ProductFilter from '../components/productComponents/productFilter.js'

function productPage() {
    return (
        <Layout>
            <SEO
                title="GatsbyJS Tailwind Starter"
                keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
            />
            <div class="container flex pt-24">
                <div class="md:w-1/4">
                    <ProductFilter />
                </div>
                <div class="md:w-3/4">
                    <ProductCard />
                </div>
            </div>
        </Layout>
        // <div class="container flex">
        //     <div class="md:w-1/4">
        //         <ProductFilter />
        //     </div>
        //      <div class="md:w-3/4">
        //         <ProductCard />
        //     </div>
        // </div>
    )
}

export default productPage;
