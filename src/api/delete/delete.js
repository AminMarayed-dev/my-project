import axios from "axios";
import { BASE_URL, END_POINTS } from "../config/Config";

export async function deleteProduct(id) {
  const response = await axios.delete(
    `${BASE_URL}/${END_POINTS.products}/${id}`
  );
  return response.data;
}
