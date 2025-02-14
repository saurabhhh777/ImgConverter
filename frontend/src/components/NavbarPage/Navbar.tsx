import { Images, Moon, Globe } from "lucide-react";
import { useState } from "react";
import Converttools from "../pages/Converttools.tsx";

const Navbar = () => {
  const [showTools, setShowTools] = useState(false);

  function handleConvert() {
    setShowTools((prev) => !prev);
  }

  return (
    <div>
      <div className="flex flex-row bg-[#1b1b1f] text-[#d0d0d1] justify-between font-poppin h-12">
        <div className="flex flex-row p-2 font-semibold">
          <Images />
          <h2 className="pl-1">ImageConverter</h2>
        </div>
        <div className="flex flex-row ">
          <h2 className="pr-9 p-2" onClick={handleConvert}>
            Convert
          </h2>
          <h2 className="pr-9 p-2">ImageResize</h2>
          <h2 className="pr-9 p-2">BulkResize</h2>
          <h2 className="pr-9 p-2">
            <Moon />
          </h2>
          <h2 className="p-2">
            <Globe />
          </h2>
        </div>
      </div>
      <hr />
      {showTools && <Converttools />}
    </div>
  );
};

export default Navbar;
