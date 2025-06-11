import { useEffect, useState } from "react";

const initialState = {
  title: "",
  brand: "",
  price: 0,
  discountPercentage: 0,
  rating: 0,
  description: "",
};
export default function AddProductModal({ isOpen, onClose, onAdd }) {
  const [formData, setFormData] = useState(initialState);

  useEffect(() => {
    if (isOpen) setFormData(initialState);
  }, [isOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]:
        name === "price" || name === "discountPercentage" || name === "rating"
          ? parseFloat(value)
          : value,
    }));
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-opacity-40 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white border border-gray-600 p-6 rounded-xl w-96 shadow-lg relative">
        <button
          className="absolute top-4 right-4 font-semibold text-gray-800 hover:cursor-pointer"
          onClick={onClose}
        >
          ✕
        </button>
        <h2 className="text-xl mb-4 font-bold">Add Product</h2>
        <form onSubmit={handleSubmit} className="space-y-3">
          {/* Input fields same as before */}
          <label className="font-semibold">Title:</label>
          <input
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full border rounded p-2"
          />
          <label className="font-semibold">Brand:</label>
          <input
            name="brand"
            value={formData.brand}
            onChange={handleChange}
            className="w-full border rounded p-2"
          />
          <label className="font-semibold">Price:</label>
          <input
            name="price"
            value={formData.price}
            onChange={handleChange}
            type="number"
            className="w-full border rounded p-2"
          />
          <label className="font-semibold">Discount(%):</label>
          <input
            name="discountPercentage"
            value={formData.discountPercentage}
            onChange={handleChange}
            type="number"
            className="w-full border rounded p-2"
          />
          <label className="font-semibold">Rating:</label>
          <input
            name="rating"
            value={formData.rating}
            onChange={handleChange}
            type="number"
            className="w-full border rounded p-2"
          />
          <label className="font-semibold">Description:</label>
          <input
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full border rounded p-2"
          />
          <div className="flex justify-end gap-2 pt-2">
            <button
              onClick={onClose}
              type="button"
              className="px-4 py-2 hover:cursor-pointer bg-gray-200 rounded hover:bg-gray-300"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 hover:cursor-pointer bg-green-600 text-white rounded hover:bg-green-700"
            >
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
