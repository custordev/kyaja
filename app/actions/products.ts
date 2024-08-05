"use server";
export async function fetchProducts() {
  const API = "https://dummyjson.com/products";
  try {
    const response = await fetch(API);
    const products = await response.json();
    // console.log(products);
  } catch (error) {
    console.log(error);
  }
}
