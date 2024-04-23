import { getProducts } from "../../api/get/getProduct";
import { El } from "../../utils/El";
import { Card } from "../Card/Card";


const products = await getProducts();

export function CardProducts() {
    return El({
        element:'div',
        children:products.map(product => Card(product))
    })
}
