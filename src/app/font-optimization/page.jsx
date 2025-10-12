import { Roboto } from "next/font/google";
import { Sarina } from "next/font/google";
import { Abril_Fatface } from "next/font/google";
const roboto = Abril_Fatface({
  weight: "400",
  subsets: ["latin"],
  // style: ["normal", "italic"],  // always remember all the things can and can not be availabe for all the fonts
  display: "swap",
});
console.log(process.env.NODE_ENV);
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
