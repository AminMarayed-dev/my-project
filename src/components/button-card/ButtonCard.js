import { El } from "../../utils/El";

export function ButtonCard({ text, ...rest }) {
  return El({
    element: "button",
    className: `w-fit p-2 rounded-lg text-white bg-red-600`,
    innerText: text,
    ...rest,
  });
}
