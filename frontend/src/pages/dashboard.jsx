import {
  Stat,
  Chart,
  Records
} from "../components/layout/index";
import {geldlogo} from "../components/ui/img";
import { FaPlus } from "react-icons/fa";
import { useRouter } from "next/router";
export default function Dashboard() {
  const router = useRouter();
  const handleClick = () => {
    router.push("http://localhost:3000/records")
  }
  return (
    <div>
      <div className="flex justify-between px-[400px] max-xl:px-[100px] max-lg:px-[50px] py-[20px] h-[fit]">
        <div className="flex gap-5">
            {geldlogo}
            <button>
                <div className=" text-lg font-bold">Dashboard</div>
            </button>
            <button>
              
                <div onClick={handleClick} className=" text-lg">Records</div>
    
            </button>
        </div>
        <div className="flex gap-5">
            <button className="flex items-center bg-blue-600 rounded-3xl px-4 gap-2 text-white">
                <FaPlus />
                <div className=" text-lg">Record</div>
            </button>
            <img src="avatar.png" alt="" />
        </div>
      </div>
      <div className=" bg-slate-200">
        <Stat/>
        <Chart/>
        <Records/>
      </div>
    </div>
  );
} 