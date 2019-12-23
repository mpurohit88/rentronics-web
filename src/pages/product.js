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
                <div class="md:w-1/4 p-8">
                    <div class="flex row justify-between ">
                        <div class="text-gray-900 text-xl ml-10 mb-2 text-uppercase">Refine</div>
                        <div class="text-gray-900 text-xl mb-2 text-uppercase text-right">Reset</div>
                    </div>
                    <div class="flex row justify-between ">
                        <ProductFilter />
                    </div>
                </div>
                <div class="md:w-3/4 p-8">
                    <div class="flex row justify-between ">
                        <div class="text-gray-900 text-xl ml-24 mb-2 text-uppercase">Appliances</div>
                        <div class="text-gray-900 text-xl mb-2 text-uppercase">Sort By</div>
                    </div>
                    <ProductCard />
                </div>
            </div>
        </Layout>
    )
}

export default productPage;
