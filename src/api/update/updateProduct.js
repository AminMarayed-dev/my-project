import axios from "axios";
import { BASE_URL, END_POINTS } from "../config/Config";

export async function updateProduct(id, product) {
  const response = await axios.patch(
    `${BASE_URL}/${END_POINTS.products}/${id}`,
    product
  );
  return response.data;
}
