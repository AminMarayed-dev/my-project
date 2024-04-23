import { El } from "../../utils/El";



export function Card(product) {
    const {name, price, imageURL} = product;
    const element =  El({
        element:'div',
        className:'flex flex-col',
        children:[
            El({element:'img', src:imageURL}),// src-image
            El({element:'p', innerText:name}), // name
            El({element:'p', innerText:price}), // price
        ]
    })
    return element;
}