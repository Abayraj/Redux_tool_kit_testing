import React from "react";
import ProductData from "../data";

export const Section = () => {
    return (
        <section className="bg-slate-400 w-[100%] h-[100vh] flex justify-between p-10">
            {ProductData?.map((product) => (
                <div className=" border h-auto  ">
                    <div className="p-20">
                        <h1>{product.name}</h1>
                        <img
                            src={product.image}
                            alt="product-img"
                            className="w-[90%] h-40vh]"
                        />
                        <h5>{product.color}</h5>
                        <h5>{product.price}</h5>
                        <h5>storage: {product.storage}</h5>
                        <h5>RAM: {product.RAM}</h5>
                        <h5>RAM: {product.display}</h5>
                        <h5>{product.camera}</h5>
                        <h5>{product.availability}</h5>
                        <div className="flex gap-10">
                            <button className="p-4  rounded-lg bg-slate-500">
                                +
                            </button>

                            <button className="p-4 rounded-lg bg-slate-500">
                                -
                            </button>
                        </div>
                        <button className="pt-2 text-center mt-4 bg-black text-white font-medium">ADD TO CART</button>
                    </div>
                </div>
            ))}
        </section>
    );
};
