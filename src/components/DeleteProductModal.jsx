export default function DeleteProductMoal({ isOpen, onClose, onConfirm }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-opacity-40 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white border border-gray-600 p-6 rounded-xl w-96 shadow-lg relative">
        <button
          onClick={onClose}
          className="absolute hover:cursor-pointer top-4 right-4 text-gray-800 hover:text-black"
        >
          ✕
        </button>
        <h3 className="text-lg font-semibold mb-4">Delete this product?</h3>
        <p className="text-sm text-gray-600 mb-6">
          Are you sure you want to delete this product? This action cannot be
          undone.
        </p>
        <div className="flex justify-end gap-2">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-200 rounded hover:cursor-pointer  hover:bg-gray-300"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="px-4 py-2 bg-red-600 text-white rounded hover:cursor-pointer hover:bg-red-700"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
