import React, { useState } from 'react';
import { ReactDOM } from 'react';

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<Product />);
 
function Product() {
  const [productId, setProductId] = useState('');
  const [productName, setProductName] = useState('');
  const [productCost, setProductCost] = useState(''); 
  const [isOnline, setIsOnline] = useState(false);
  const [productCategory, setProductCategory] = useState('');
  const [storeAvailability, setStoreAvailability] = useState([]);
 
  const handleProductIdChange = (event) => {
    setProductId(event.target.value);
  };
 
  const handleProductNameChange = (event) => {
    setProductName(event.target.value);
  };
 
  const handleProductCostChange = (event) => {
    setProductCost(event.target.value);
  };
 
  const handleIsOnlineChange = (event) => {
    setIsOnline(event.target.checked);
  };
 
  const handleProductCategoryChange = (event) => {
    setProductCategory(event.target.value);
  };
 
  const handleStoreAvailabilityChange = (event) => {
    const { target: { checked, value } } = event;
    const currentStores = storeAvailability.slice();
    if (checked) {
      currentStores.push(value);
    } else {
      const index = currentStores.indexOf(value);
      currentStores.splice(index, 1);
    }
    setStoreAvailability(currentStores);
  };
 
  const handleSubmit = (event) => {
    event.preventDefault();
 
    if (!productId || !productName || !productCost || !productCategory || !storeAvailability.length) {
      alert('Please fill in all mandatory fields');
      return;
    }
 
    const product = {
      productId,
      productName,
      productCost,
      isOnline,
      productCategory,
      storeAvailability,
    };
 
    console.log('Product registration successful:', product);
 
    // Reset the form
    setProductId('');
    setProductName('');
    setProductCost('');
    setIsOnline(false);
    setProductCategory('');
    setStoreAvailability([]);
  };
 
  return (
    <div className="product-registration-form">
      <h2>Product Registration</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="productId">Product ID</label>
          <input
            type="text"
            id="productId"
            value={productId}
            onChange={handleProductIdChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="productName">Product Name</label>
          <input
            type="text"
            id="productName"
            value={productName}
            onChange={handleProductNameChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="productCost">Product Cost</label>
          <input
            type="number"
            id="productCost"
            value={productCost}
            onChange={handleProductCostChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="isOnline">Product Online</label>
          <input
            type="checkbox"
            id="isOnline"
            checked={isOnline}
            onChange={handleIsOnlineChange}
          />
          <label htmlFor="isOnline">Yes</label>
        </div>
        <div className="form-group">
          <label htmlFor="productCategory">Product Category</label>
          <select id="productCategory" value={productCategory} onChange={handleProductCategoryChange} required>
            <option value="">Select a category</option>
            <option value="grocery">Grocery</option>
            <option value="mobile">Mobile</option>
            <option value="electronics">Electronics</option>
            <option value="cloths">Cloths</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="storeAvailability">Available in Store</label>
          <div className="checkbox-group">
            <label>
              <input
                type="checkbox"
                id="bigBazar"
                value="Big Bazar"
                checked={storeAvailability.includes('Big Bazar')}
                onChange={handleStoreAvailabilityChange}
              />Big Bazar
              </label>
              <br/>
              <label>
              <input
                type="checkbox"
                id="dmart"
                value="DMart"
                checked={storeAvailability.includes('DMart')}
                onChange={handleStoreAvailabilityChange}
                />DMart
                </label>

                <label>
              <input
                type="checkbox"
                id="reliance"
                value="Reliance"
                checked={storeAvailability.includes('Reliance')}
                onChange={handleStoreAvailabilityChange}
                />Reliance
                </label>
                <br/>
                <label>
              <input
                type="checkbox"
                id="reliance"
                value="Reliance"
                checked={storeAvailability.includes('Reliance')}
                onChange={handleStoreAvailabilityChange}
                />Reliance
                </label>
                <br/>
                <label>
              <input
                type="checkbox"
                id="Megastore"
                value="Mega Store"
                checked={storeAvailability.includes('Mega Store')}
                onChange={handleStoreAvailabilityChange}
                />Mega Store
                </label>
          </div>
         </div>
         </form>
         </div>
);
}
export default Product();

              
            