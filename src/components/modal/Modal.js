import { El } from "../../utils/El";
import { ButtonCard } from "../button-card/ButtonCard";

export function Modal() {
  return El({
    element: "div",
    id: "modal",
    className:
      "bg-gray-300 p-[30px] w-[75%] flex flex-col gap-[30px] items-center fixed top-[50%] left-[15%]",
    children: [
      El({
        element: "input",
        placeholder: "enter name",
        id: "name",
        className: "border-2 p-2",
      }),
      El({
        element: "input",
        placeholder: "enter price",
        id: "price",
        className: "border-2 p-2",
      }),
      ButtonCard({ text: "apply" }),
      El({
        element: "i",
        className: "fa-solid fa-xmark",
        eventListener: [
          {
            event: "click",
            callback: (e) => {
              const modalContainer = e.target.parentElement;
              modalContainer.classList.add("hidden");
            },
          },
        ],
      }),
    ],
  });
}
