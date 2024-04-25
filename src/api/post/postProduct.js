import axios from "axios";
import { BASE_URL, END_POINTS } from "../config/Config";

export async function postProducts(product) {
  const response = await axios.post(`${BASE_URL}/${END_POINTS.cart}`, product);
  return response.data;
}
