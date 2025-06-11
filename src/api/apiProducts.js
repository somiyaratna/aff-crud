export async function getProducts() {
  const response = await fetch("https://dummyjson.com/products");
  const result = await response.json();
  return result.products;
}

export async function getProduct(id) {
  const response = await fetch(`https://dummyjson.com/products/${id}`);
  const result = await response.json();
  return result;
}
