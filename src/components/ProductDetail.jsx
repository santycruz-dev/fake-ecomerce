import { useContext, useState, useEffect } from 'react';
import { MdOutlineShoppingCart } from 'react-icons/md';
import { useParams } from 'react-router-dom';
import ProductContext from '../context/productContext';

const ProductDetail = () => {
  const { data } = useContext(ProductContext);
  const { id } = useParams();
  const [showDetail, setShowDetail] = useState(null);

  useEffect(() => {
    if (data) {
      const foundData = data.find((item) => item.id == id);
      setShowDetail(foundData);
    }
  }, [data, id]);


  return (
    <div className='max-w-screen-md mx-auto product-detail py-4'>
      <h2 className='text-2xl text-center my-8'>PRODUCT DETAIL</h2>
      <div className="flex gap-8">
        {showDetail && (
          <>
            <figure className="w-48">
              <img className="w-full h-auto object-cover" src={showDetail.image} alt="" />
            </figure>
            <div className="w-full h-auto" >
              <h2 className="text-xl mb-4">{showDetail.title}</h2>
              <h3 className="text-lg mb-4">{showDetail.description}</h3>
              <span className="text-md">${showDetail.price}</span>
              <button className="flex items-center justify-center bg-black text-white py-1 px-4 rounded-md my-4  " >Add to Cart   <MdOutlineShoppingCart /> </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;