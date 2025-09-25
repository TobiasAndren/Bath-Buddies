import Hero from "@/components/layout/Hero";
import ProductDescription from "@/components/layout/ProductDescription";
import Gallery from "@/components/layout/Gallery";

export default function Home() {
  return (
    <>
      <Hero className="mt-11 mb-11" />
      <ProductDescription className="mb-11" />
      <Gallery className="mb-11" />
    </>
  );
}
