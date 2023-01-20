import React from 'react';
import { useSelector } from 'react-redux';

const ProductComponent = () => {
  
  // products is the result of using the useSelector method to get state and return the nested array
  const products = useSelector((state) => state.allProducts.products);
  
  const renderList = products.map((product) => {
    const {id, title, image, price, category} = product;
    return (
      <div className="four wide column" key={id}>
        <div className="ui cards link">
          <div className="card">
            <div className="image">
              <img src={image} alt={title} />
              <div className="content">
                <div className="header">{title}</div>
                <div className="meta price">$ {price}</div>
                <div className="meta">{category}</div>
              </div>
            </div>
          </div>
        </div>
    </div>
    );
  })

  return (
    <>{renderList}</>
  )
};

export default ProductComponent