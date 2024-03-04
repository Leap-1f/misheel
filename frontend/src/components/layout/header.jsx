import { FaPlus } from "react-icons/fa";
export function Header() {
    return <div className="flex justify-between px-[200px] max-xl:px-[100px] max-lg:px-[50px] py-[20px] h-[fit]">
        <div className="flex gap-5">
            <img src="Frame 3.png" alt="" />
            <button>
                <div className=" text-lg">Dashboard</div>
            </button>
            <button>
                <div className=" text-lg">Records</div>
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
}