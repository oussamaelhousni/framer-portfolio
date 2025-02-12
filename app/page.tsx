import Navbar from "@/components/navbar";
import Hero from "@/sections/hero";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
      </main>
    </>
  );
}
