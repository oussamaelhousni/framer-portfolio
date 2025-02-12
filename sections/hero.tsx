import Button from "@/components/button";
import Container from "@/components/container";
import React from "react";
import Image from "next/image";
import hero from "@/assets/images/hero-image.jpg";

function Hero() {
  return (
    <section>
      <Container className="mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-4 px-0 md:h-[calc(100vh-4rem)] md:grid-cols-12">
        <div className="col-span-1 px-4 md:col-span-7">
          <p className="mt-20 text-4xl font-semibold leading-[150%] md:text-6xl md:leading-[140%]">
            Crafting digital experiences through code and creative design
          </p>
          <div className="mt-8 flex flex-col items-start gap-4 md:flex-row">
            <Button
              iconAfter={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5"
                  />
                </svg>
              }
            >
              View my work
            </Button>
            <Button variant="none">Let's talk</Button>
          </div>
        </div>

        <div className="col-span-1 h-full overflow-y-hidden md:col-span-5">
          <Image src={hero} alt="hero image" className="h-full w-full" />
        </div>
      </Container>
    </section>
  );
}

export default Hero;
