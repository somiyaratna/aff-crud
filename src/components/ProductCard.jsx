import React, { useState } from "react";
import defaultProductImg from "../assets/default-product.png";

export default function ProductCard({ product, onEdit, onDelete }) {
  const {
    id,
    title,
    brand,
    price,
    discountPercentage,
    thumbnail,
    description,
    rating,
  } = product;

  const discountedPrice = (price - (price * discountPercentage) / 100).toFixed(
    2
  );
  const [showFullDesc, setShowFullDesc] = useState(false);

  return (
    <li className="border rounded-xl p-4 shadow bg-gray-50">
      <div className="flex">
        <img
          src={thumbnail || defaultProductImg}
          alt={title}
          className="h-40 w-40 object-contain mb-3"
        />
        <div className="ml-4 flex-1 flex flex-col justify-between">
          <div>
            <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
            <span className="text-sm text-gray-500">{brand}</span>
            <div className="flex items-center gap-2 mt-2">
              <span className="text-green-600 font-bold text-lg">
                ${discountedPrice}
              </span>
              {discountPercentage > 0 && (
                <span className="text-sm line-through text-gray-400">
                  ${price}
                </span>
              )}
              <span className="text-sm text-red-500">
                -{discountPercentage}%
              </span>
            </div>
            <div className="text-sm text-gray-600 mt-1">
              <span className="text-yellow-500">★</span> {rating.toFixed(1)} / 5
            </div>
            <div className="max-w-[180px] mt-2">
              <p
                className={`text-sm text-gray-700 ${
                  !showFullDesc && "truncate"
                }`}
              >
                {description}
              </p>
              <span
                onClick={() => setShowFullDesc(!showFullDesc)}
                className="text-xs text-blue-500 hover:cursor-pointer hover:underline"
              >
                {showFullDesc ? "show less" : "show more"} &darr;
              </span>
            </div>
          </div>
          <div className="flex gap-2 mt-4 justify-end">
            <button
              onClick={() => onEdit(product)}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:cursor-pointer text-sm"
            >
              Edit
            </button>
            <button
              onClick={() => onDelete(product)}
              className="bg-red-600 text-white px-4 py-2 rounded hover:cursor-pointer text-sm"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </li>
  );
}
