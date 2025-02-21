"use client";

import React from "react";
import "react-multi-carousel/lib/styles.css";
import CarouselComponent from "../common/Carousel/Carousel";
import { GoCpu } from "react-icons/go";
import { RiCpuLine } from "react-icons/ri";
import {
  FaKeyboard,
  FaMemory,
  FaNetworkWired,
  FaRegSnowflake,
} from "react-icons/fa";
import { MdOutlineSdStorage } from "react-icons/md";
import { BsFillMotherboardFill } from "react-icons/bs";
import { IoMdPower } from "react-icons/io";
import { CiMonitor } from "react-icons/ci";
import { PiDesktopTowerBold } from "react-icons/pi";
import { LuComputer } from "react-icons/lu";
import { SiBmcsoftware, SiNextra } from "react-icons/si";
const fakeData = [
  {
    id: 1,
    title: "Processors (CPUs)",
    icon: () => <GoCpu size={30} />,
  },
  {
    id: 2,
    title: "Graphics Cards (GPUs)",
    icon: () => <RiCpuLine size={30} />,
  },
  {
    id: 3,
    title: "Memory (RAM)",
    icon: () => <FaMemory size={30} />,
  },
  {
    id: 4,
    title: "Storage (HDDs & SSDs)",
    icon: () => <MdOutlineSdStorage size={30} />,
  },
  {
    id: 5,
    title: "Motherboards",
    icon: () => <BsFillMotherboardFill size={30} />,
  },
  {
    id: 6,
    title: "Power Supplies (PSUs)",
    icon: () => <IoMdPower size={30} />,
  },
  {
    id: 7,
    title: "Cooling Solutions (Air & Liquid Coolers)",
    icon: () => <FaRegSnowflake size={30} />,
  },
  {
    id: 8,
    title: "Peripherals (Keyboards, Mice, Headsets)",
    icon: () => <FaKeyboard size={30} />,
  },
  {
    id: 9,
    title: "Monitors",
    icon: () => <CiMonitor size={30} />,
  },
  {
    id: 10,
    title: "Networking (Routers, Modems, Adapters)",
    icon: () => <FaNetworkWired size={30} />,
  },
  {
    id: 11,
    title: "PC Cases",
    icon: () => <PiDesktopTowerBold size={30} />,
  },
  {
    id: 12,
    title: "Prebuilt PCs & Laptops",
    icon: () => <LuComputer size={30} />,
  },
  {
    id: 13,
    title: "Software (Operating Systems, Antivirus)",
    icon: () => <SiBmcsoftware size={30} />,
  },
  {
    id: 14,
    title: "Accessories (Cables, Stands, Mouse Pads)",
    icon: () => <SiNextra size={30} />,
  },
];

const Categories = () => {
  return (
    <div className="mb-8" id="categories">
      <h2 className="text-2xl font-bold mb-4 text-center">Categories</h2>
      <CarouselComponent
        data={fakeData}
        renderFunction={(item: any) => (
          <div
            onClick={() =>
              (window.location.href = `/products?category=${item.id}`)
            }
            style={{ cursor: "pointer", textAlign: "center", padding: "10px" }}
          >
            <div className="flex items-center justify-center">
              <div className="h-[3rem] w-[3rem] bg-white dark:bg-black rounded-full flex items-center justify-center">
                {item.icon()}
              </div>
            </div>
            <h3 className="w-full text-center">{item.title}</h3>
          </div>
        )}
      />
    </div>
  );
};

export default Categories;
