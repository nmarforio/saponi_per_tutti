import useBasketStore from "@/states/basketStore";

export default function Basket() {
  const content = useBasketStore((state) => state.content);
  console.log(content);
  return (
    <>
      <p>stst{content}</p>
    </>
  );
}
