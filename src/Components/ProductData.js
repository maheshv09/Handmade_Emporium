import React, { useState } from 'react';
import Ash from './Ash';
import Abha from './Abha';
import Misty from './Misty';
import Monty from './Monty';
import Jay from './Jay';
import Alice from './Alice';
import Axar from './Axar';
import ProductCard from './ProductCard';
import Filter from './Filter';
import ProductMenu from './ProductMenu';

const ProductData = ({ username ,handleAddToCart}) => {
  let products;

  switch (username) {
    case 'Ash':
      products = Ash;
      break;
    case 'Abha':
      products = Abha;
      break;
    case 'Misty':
      products = Misty;
      break;
    case 'Monty':
      products = Monty;
      break;
    case 'Jay':
      products = Jay;
      break;
    case 'Alice':
      products = Alice;
      break;
    case 'Axar':
      products = Axar;
      break;
    default:
      products = [];
      break;
  }

  const uniqueList = [
    ...new Set(
      products.map((curElem)=>{
        return curElem.category
      })
    ),
    "All",
  ]

  const [productdata, setProductData] = useState(products);
  const [productList, setProductList] = useState(uniqueList);

  const filterItem = (category) => {
    if (category === 'All') {
      setProductData(products);
      return;
    }
    const updateList = products.filter((curElem) => {
      return curElem.category === category;
    });

    setProductData(updateList);
  };

  return (
    <>
      <ProductMenu filterItem={filterItem} productList={productList} />
      <ProductCard productdata={productdata} handleAddToCart={handleAddToCart}/>
    </>
  );
};

export default ProductData;
