import React, { useEffect, useRef } from 'react';
import Products from '../components/Products';

const ProductsPage = () => {
  const sectionRef = useRef();
  useEffect(() => {
    if (sectionRef.current) sectionRef.current.classList.add('visible');
  }, []);
  return <div ref={sectionRef}><Products /></div>;
};

export default ProductsPage;
