import Slider from "../components/Slider";
import { Slides } from "../types/types";

const getData = async () => {
  const res = await fetch("https://fakestoreapi.com/products");
  if (!res.ok) {
    throw new Error("Failed to fetch");
  }
  return res.json();
};

const HomePage = async () => {
  const data = await getData();

  return (
    <div className="">
      <Slider data={data} />
    </div>
  );
};

export default HomePage;
