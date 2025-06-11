import { useState, useEffect } from "react";

export default function EditProductModal({ product, isOpen, onClose, onSave }) {
  const [formData, setFormData] = useState(product || {});

  useEffect(() => {
    if (product) setFormData(product);
  }, [product]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <div className="fixed inset-0 bg-opacity-40 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white border border-gray-600 p-6 rounded-xl w-96 shadow-lg relative">
        <button
          className="absolute top-4 right-4 font-semibold text-gray-800 hover:cursor-pointer"
          onClick={onClose}
        >
          ✕
        </button>
        <h2 className="text-xl mb-4 font-bold">Edit Product</h2>
        <form onSubmit={handleSubmit} className="space-y-3">
          <label htmlFor="title" className="font-semibold">
            Title:
          </label>
          <input
            name="title"
            value={formData.title || ""}
            onChange={handleChange}
            placeholder="Title"
            className="w-full border rounded p-2"
          />
          <label htmlFor="brand" className="font-semibold">
            Brand:
          </label>
          <input
            name="brand"
            value={formData.brand || ""}
            onChange={handleChange}
            placeholder="Brand"
            className="w-full border rounded p-2"
          />
          <label htmlFor="price" className="font-semibold">
            Price:
          </label>
          <input
            name="price"
            value={formData.price || ""}
            onChange={handleChange}
            placeholder="Price"
            className="w-full border rounded p-2"
            type="number"
          />
          <label htmlFor="discount-percentage" className="font-semibold">
            Discount(%):
          </label>
          <input
            name="discountPercentage"
            value={formData.discountPercentage || ""}
            onChange={handleChange}
            placeholder="Discount %"
            className="w-full border rounded p-2"
            type="number"
          />
          <label htmlFor="description" className="font-semibold">
            Description:
          </label>
          <input
            name="description"
            value={formData.description || ""}
            onChange={handleChange}
            placeholder="Description"
            className="w-full border rounded p-2"
          />
          <div className="flex justify-end gap-2">
            <button
              onClick={onClose}
              className="px-4 py-2 bg-gray-200 rounded hover:cursor-pointer  hover:bg-gray-300"
            >
              Cancel
            </button>
            <button
              onClick={handleSubmit}
              className="px-4 py-2 bg-blue-600 text-white rounded hover:cursor-pointer hover:bg-blue-700"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
