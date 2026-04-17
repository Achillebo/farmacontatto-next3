
import HomeHead from "@/components/HomeHead";
import HomeRg1  from "@/components/HomeRg1";
import HomeRg2  from "@/components/HomeRg2";

export const metadata = {
  title: "Farmacontatto | Compravendita e Intermediazione Farmacie",
  description:
    "Farmacontatto è l'agenzia specializzata nella compravendita e intermediazione di farmacie.",
  alternates: {
    canonical: "https://farmacontatto.it/",
  },
};

export default function Home() {
  return (
    <>
      <HomeHead />
      <HomeRg1 />
      <HomeRg2 />

                  <h2 className="mb-2 text-primary-emphasis">
              aaa
            </h2>

    </>

    
  );
}