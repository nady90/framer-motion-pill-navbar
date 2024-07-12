"use client";
import React, { useRef } from "react";
import { animate, motion } from "framer-motion";

export const Cursor = ({ position }: any) => {
  return (
    <motion.li
      animate={position}
      className="absolute z-0 h-7 rounded-full bg-black md:h-12"
    />
  );
};

export const Tab = ({ children, setPosition }: any) => {
  const listRef = useRef(null);

  return (
    <li
      ref={listRef}
      onMouseEnter={() => {
        if (!listRef.current) {
          return;
        }
        const { width } = listRef.current.getBoundingClientRect();
        setPosition({
          width,
          opacity: 1,
          left: listRef.current.offsetLeft,
        });
      }}
      onMouseLeave={() => {
        setPosition((pv) => ({ ...pv, opacity: 0 }));
      }}
      className="relative block cursor-pointer z-10 px-3 py-1.5 uppercase text-white mix-blend-difference md:px-5 md:py-3 md:text-base text-xs"
    >
      {children}
    </li>
  );
};

export const NavBar = () => {
  const [position, setPosition] = React.useState({
    left: 0,
    width: 0,
    opacity: 0,
  });

  return (
    <ul className="relative border-2 border-black p-1 rounded-full bg-white w-fit flex ">
      <Tab setPosition={setPosition}>Home</Tab>
      <Tab setPosition={setPosition}>Pricing</Tab>
      <Tab setPosition={setPosition}>Feature</Tab>
      <Tab setPosition={setPosition}>Docs</Tab>
      <Tab setPosition={setPosition}>Blog</Tab>

      <Cursor position={position} />
    </ul>
  );
};

export default function SlideTabs() {
  return (
    <div className="grid h-screen place-content-center bg-neutral-100">
      <NavBar />
    </div>
  );
}
