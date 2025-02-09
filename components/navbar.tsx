import React from "react";
import Container from "./container";

function Navbar() {
  return (
    <div className="py-4">
      <Container className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold uppercase md:text-3xl lg:text-4xl">
          Oussama Elhousni
        </h2>
        <div className="flex gap-4">
          <button className="grid aspect-square w-10 place-items-center rounded-full border border-neutral-400 bg-white p-1">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect x="3" y="15" width="18" height="2" fill="currentColor" />
              <rect x="3" y="7" width="18" height="2" fill="currentColor" />
            </svg>
          </button>

          <button className="hidden rounded-xl bg-orange-500 px-4 py-2 text-center text-white sm:block">
            Contact
          </button>
        </div>
      </Container>
    </div>
  );
}

export default Navbar;
