import { El } from "../utils/El";
import { CardProducts } from "./CardProducts/CardProducts";

export function Home() {
    return El({
        element:'div',
        children:[CardProducts()]
    })
}