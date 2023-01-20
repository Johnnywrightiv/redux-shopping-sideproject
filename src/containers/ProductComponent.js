import React from 'react';
import { useSelector } from 'react-redux';

const ProductComponent = () => {
  
  // products is the result of using the useSelector method to get state and return the nested array
  const products = useSelector((state) => state.allProducts.products);
  
  // using destructuring on the object at products[0] to make the props {id, title} available directly
  const {id, title} = products[0];

  return (
    <div className="four column wide">
      <div className="ui link cards">
        <div className="card">
          <div className="image">
            <img src="" alt="" />
            <div className="content">
              {/* title is a prop from state that we are rendering to the view */}
              <div className="header">{title}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default ProductComponent