import { deleteProduct } from "../../api/delete/delete";
import { postProducts } from "../../api/post/postProduct";
import { El } from "../../utils/El";
import { ButtonCard } from "../button-card/ButtonCard";

export function Card(product) {
  const { name, price, imageURL, id } = product;
  const element = El({
    element: "div",
    className: "flex flex-col",
    children: [
      El({ element: "img", src: imageURL }), // src-image
      El({ element: "p", innerText: name }), // name
      El({ element: "p", innerText: price }), // price
      ButtonCard({
        text: "Add to cart",
        eventListener: [
          {
            event: "click",
            callback: async () => {
              const cart = {
                id: Date.now(),
                userId: 1,
                name,
                price,
                color: "white",
                size: 41,
                productId: 7,
                imageURL,
                quantity: 1,
              };

              await postProducts(cart);
            },
          },
        ],
      }),
      ButtonCard({
        text: "Delete Product",
        eventListener: [
          {
            event: "click",
            callback: async () => {
              await deleteProduct(id);
              location.reload();
            },
          },
        ],
      }),
    ],
  });
  return element;
}
