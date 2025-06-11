import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../api/apiProducts";
import {
  addAllProducts,
  addProduct,
  deleteProduct,
  editProduct,
} from "../redux/slices/productSlice";
import ProductCard from "../components/ProductCard";
import EditProductModal from "../components/EditProductModal";
import DeleteProductModal from "../components/DeleteProductModal";
import AddProductModal from "../components/AddProductModal";

export default function Products() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  const [isLoading, setIsLoading] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);
  const [deletingProduct, setDeletingProduct] = useState(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  useEffect(() => {
    async function fetchProducts() {
      setIsLoading(true);
      try {
        if (products.length === 0) {
          const apiProducts = await getProducts();
          dispatch(addAllProducts(apiProducts));
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchProducts();
  }, [dispatch, products.length]);

  const handleEdit = (product) => {
    setEditingProduct(product);
    setShowEditModal(true);
  };

  const handleSaveEdit = (updatedProduct) => {
    dispatch(editProduct(updatedProduct));
    setShowEditModal(false);
  };

  const handleDeleteClick = (product) => {
    setDeletingProduct(product);
    setShowDeleteModal(true);
  };

  const confirmDelete = () => {
    dispatch(deleteProduct(deletingProduct.id));
    setShowDeleteModal(false);
  };

  const handleAddProduct = (product) => {
    const newProduct = {
      ...product,
      id: Date.now(),
      thumbnail: "",
    };
    dispatch(addProduct(newProduct));
    setShowAddModal(false);
  };

  return (
    <div className="p-6">
      <div className="flex gap-4 items-center mb-10">
        <h2 className="text-4xl font-semibold mb-4">Products</h2>
        {isLoading && <p>Loading...</p>}
        <button
          onClick={() => setShowAddModal(true)}
          className="bg-green-500 hover:bg-green-600 text-white py-1 px-2 max-h-fit rounded hover:cursor-pointer"
        >
          + Add a Product
        </button>
      </div>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onEdit={handleEdit}
            onDelete={handleDeleteClick}
          />
        ))}
      </ul>

      <AddProductModal
        isOpen={showAddModal}
        onClose={() => setShowAddModal(false)}
        onAdd={handleAddProduct}
      />

      <EditProductModal
        product={editingProduct}
        isOpen={showEditModal}
        onClose={() => setShowEditModal(false)}
        onSave={handleSaveEdit}
      />

      <DeleteProductModal
        isOpen={showDeleteModal}
        onClose={() => setShowDeleteModal(false)}
        onConfirm={confirmDelete}
      />
    </div>
  );
}
