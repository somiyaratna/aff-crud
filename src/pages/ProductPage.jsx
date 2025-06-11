import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [status, setStatus] = useState("loading");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProduct = async () => {
      setStatus("loading");
      try {
        const res = await axios.get(`https://dummyjson.com/products/${id}`);
        setProduct(res.data);
        setStatus("succeeded");
      } catch (err) {
        console.error(err);
        setError("Failed to load product");
        setStatus("failed");
      }
    };

    fetchProduct();
  }, [id]);

  if (status === "failed")
    return <div className="p-6 text-red-500 text-center">{error}</div>;

  const {
    title,
    description,
    brand,
    category,
    price,
    discountPercentage,
    rating,
    stock,
    availabilityStatus,
    shippingInformation,
    returnPolicy,
    warrantyInformation,
    minimumOrderQuantity,
    sku,
    weight,
    dimensions,
    tags,
    images,
    meta,
  } = product;

  const discountedPrice = (price - price * (discountPercentage / 100)).toFixed(
    2
  );

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="hover:cursor-pointer" onClick={() => navigate(-1)}>
        <p className="underline">&larr; Back to products</p>
      </div>
      <div className="flex flex-col md:flex-row gap-8 min-h-[80vh] items-center">
        {/* Image Section */}
        <div className="md:w-1/2">
          <img
            src={images[0]}
            alt={title}
            className="rounded-lg w-full border object-contain"
          />
        </div>

        {/* Info Section */}
        <div className="md:w-1/2 space-y-4">
          <h1 className="text-2xl font-bold">{title}</h1>

          <p className="text-sm text-gray-500">
            {brand} &middot; Category: {category}
          </p>
          <div className="flex gap-2 flex-wrap">
            {tags.map((tag, i) => (
              <span
                key={i}
                className="text-xs bg-gray-100 px-2 rounded text-gray-700"
              >
                #{tag}
              </span>
            ))}
          </div>
          <p className="text-gray-700">{description}</p>

          <div className="flex items-center gap-3 text-lg">
            <span className="text-green-600 font-bold">${discountedPrice}</span>
            {discountPercentage > 0 && (
              <>
                <span className="line-through text-gray-400 text-sm">
                  ${price}
                </span>
                <span className="text-sm text-red-500">
                  -{discountPercentage}%
                </span>
              </>
            )}
          </div>

          <p className="text-sm text-yellow-600">
            Rating: {rating.toFixed(1)} / 5
          </p>
          <p className="text-sm text-blue-600">
            {availabilityStatus} &middot; Stock: {stock}
          </p>

          {/* Additional Info */}
          <div className="text-sm text-gray-600 mt-4 space-y-1">
            <p>SKU: {sku}</p>
            <p>Weight: {weight}g</p>
            <p>
              Dimensions: {dimensions.width} x {dimensions.height} x{" "}
              {dimensions.depth} mm
            </p>
            <p>Minimum Order Quantity: {minimumOrderQuantity}</p>
            <p>Shipping: {shippingInformation}</p>
            <p>Return Policy: {returnPolicy}</p>
            <p>Warranty: {warrantyInformation}</p>
            <p>Barcode: {meta.barcode}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
