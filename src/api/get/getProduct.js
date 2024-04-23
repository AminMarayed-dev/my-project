import axios from "axios";
import { BASE_URL, END_POINTS } from "../config/Config";

export async function getProducts() {
    try {
        const {data} = await axios.get(`${BASE_URL}/${END_POINTS.products}`);
        return data;
    } catch (error) {
        console.log(error);
    }
}

