import React, { useState } from "react";
import { FaStar, FaRegStar } from "react-icons/fa";

import "../../assets/css/elements/product.css";
import products from "../data/product-data";

const Products = () => {
  const [visibleCount, setVisibleCount] = useState(6);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 3);
  };

  const handleWhatsApp = (product) => {
    const phoneNumber = "+919486544451";

    const message = `Hello,

I am interested in ${product.name}.

Category: ${product.category}
Price: ${product.price}

Please send me more details about this product.

Thank you.`;

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message,
    )}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <section id="products" className="products">
      <div className="products-header">
        <h2>Our Products</h2>

        <p>
          Premium RCC pipes and precast concrete products manufactured to the
          highest quality standards.
        </p>
      </div>

      <div className="products-grid">
        {products.slice(0, visibleCount).map((product) => (
          <div className="product-card" key={product.id}>
            <div className="product-image-box">
              <img src={product.image} alt={product.name} />
            </div>

            <div className="product-content">
              <span className="product-category">{product.category}</span>

              <h3 className="product-name">{product.name}</h3>

              <div className="product-rating">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaRegStar />

                <span>
                  {product.rating} ({product.reviews} Reviews)
                </span>
              </div>

              <p>{product.description}</p>

              <div className="product-footer">
                <div className="product-price">{product.price}</div>

                <button
                  className="product-btn"
                  onClick={() => handleWhatsApp(product)}
                >
                  Get Order
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {visibleCount < products.length && (
        <div className="load-more-wrapper">
          <button className="load-more-btn" onClick={handleLoadMore}>
            More Products
          </button>
        </div>
      )}
    </section>
  );
};

export default Products;
