import Image from "next/image";
import { Inter } from "next/font/google";
import { Camera } from "lucide-react";
import { MapPin } from "lucide-react";
import { MessageSquare } from "lucide-react";
import { UserCircle } from "lucide-react";
import Tutorial from "@/components/tutorial";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="w-screen h-screen">
      <div className="flex flex-col h-screen bg-white dark:bg-black">
        <div className="flex justify-between items-center px-4 py-2 border-b dark:border-gray-700">
          <div />
          <span className="text-lg font-semibold text-black dark:text-white">
            homies.club
          </span>
          <button aria-label="Profile" className="focus:outline-none">
            <UserCircle className="h-8 w-8 text-black dark:text-white" />
          </button>
        </div>
        <div className="flex-grow flex justify-center items-center">
          <Camera className="text-black dark:text-white text-8xl" />
        </div>
        <div className="flex justify-around items-center py-2 border-t dark:border-gray-700">
          <button aria-label="Chat" className="focus:outline-none">
            <MessageSquare className="h-6 w-6 text-black dark:text-white" />
          </button>
          <button aria-label="Capture" className="focus:outline-none">
            <Camera className="h-6 w-6 text-black dark:text-white" />
          </button>
          <button aria-label="Locations" className="focus:outline-none">
            <MapPin className="h-6 w-6 text-black dark:text-white" />
          </button>
        </div>
      </div>
    </div>
  );
}
