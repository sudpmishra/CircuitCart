"use client";
import "react-multi-carousel/lib/styles.css";
import CarouselComponent from "../common/Carousel/Carousel";
import { BiCategory } from "react-icons/bi";
import { Category } from "@prisma/client";
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

const iconMap = {
  "Processors (CPUs)": <GoCpu size={30} />,
  "Graphics Cards (GPUs)": <RiCpuLine size={30} />,
  "Memory (RAM)": <FaMemory size={30} />,
  "Storage (HDDs & SSDs)": <MdOutlineSdStorage size={30} />,
  Motherboards: <BsFillMotherboardFill size={30} />,
  "Power Supplies (PSUs)": <IoMdPower size={30} />,
  "Cooling Solutions": <FaRegSnowflake size={30} />,
  Peripherals: <FaKeyboard size={30} />,
  Monitors: <CiMonitor size={30} />,
  Networking: <FaNetworkWired size={30} />,
  "PC Cases": <PiDesktopTowerBold size={30} />,
  "Prebuilt PCs & Laptops": <LuComputer size={30} />,
};
type IconMapKey =
  | "Processors (CPUs)"
  | "Graphics Cards (GPUs)"
  | "Memory (RAM)"
  | "Storage (HDDs & SSDs)"
  | "Motherboards"
  | "Power Supplies (PSUs)"
  | "Cooling Solutions"
  | "Peripherals"
  | "Monitors"
  | "Networking"
  | "PC Cases"
  | "Prebuilt PCs & Laptops";

const Categories = ({ categories }: { categories: Category[] }) => {
  return (
    <div className="mb-8" id="categories">
      <h2 className="text-2xl font-bold mb-4 text-center">Categories</h2>
      <CarouselComponent
        data={categories}
        renderFunction={(item: Category) => (
          <div
            onClick={() =>
              (window.location.href = `/products?category=${item.id}`)
            }
            style={{ cursor: "pointer", textAlign: "center", padding: "10px" }}
          >
            <div className="flex items-center justify-center">
              <div className="h-[3rem] w-[3rem] bg-white dark:bg-black rounded-full flex items-center justify-center">
                {Object.keys(iconMap).includes(item.name) ? (
                  iconMap[item.name as IconMapKey]
                ) : (
                  <BiCategory size={30} />
                )}
              </div>
            </div>
            <h3 className="w-full text-center">{item.name}</h3>
          </div>
        )}
      />
    </div>
  );
};

export default Categories;
