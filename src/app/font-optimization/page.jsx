import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: "900",
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
});
const FontOptimization = () => {
  return (
    <div>
      {/* <h1 style={{ fontFamily: "Bitcount Prop Double Ink" }}> */}
      <h1 className={roboto.className}>
        This Page Is For The Font Optimization{" "}
      </h1>
    </div>
  );
};

export default FontOptimization;
