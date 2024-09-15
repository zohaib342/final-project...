
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Baner from '../assets/baner.png';

export default function Product2() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.log("error", error));
  }, []);


  return (
    <>
    <main>
      <div>
        <img src={Baner} className='my-9 w-10/12 m-auto' />
      </div>

      <div className='flex items-center justify-around mt-14y' >
        <p className="font-semibold ... text-2xl text-orange-400">Showing 23 out of 23 products</p>

        <button type="button" className="text-orange-400 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 p-10">Short by </button>
      </div>
      <section className="text-gray-600 body-font overflow-hidden ">
        <div className="container px-5 mx-auto rounded-lg	">
          <div className="flex flex-wrap py-10	">
            {products.map(product => (
              <div key={product.id} className="w-full md:w-1/2 xl:w-1/3 p-4  transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 ...">
                <div className="bg-white rounded shadow-md h-full flex flex-col">
                  <img
                    src={product.image}
                    alt="product image"
                    className="w-full h-48 object-cover object-center rounded-t"
                  />
                  <div className="p-4 flex-grow">
                    <h1 className=" text-1xl font-medium mb-1 text-gray-700">
                      {product.title}
                    </h1>
                    <p className="text-gray-700 text-sm">Category: {product.category}</p>
                    <p className="text-gray-900 font-bold">Price: ${product.price}</p>
                    <Link to={`/products/${product.id}`}>
                      <button
                        className="flex ml-auto text-white bg-orange-400 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded"
                      >
                        View Details
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
     </main>
    </>
  );
}