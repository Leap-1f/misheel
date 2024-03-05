import Link from "next/link";
import { geld } from "../components/ui/img";

export default function Home() {
  return (
  <div className="flex items-center justify-center bg-white h-[100vh] w-[50%]">      
    <style>{'body { background-color: #0166FF; height:100%;}'}</style>
    <div className="flex flex-col gap-[40px] items-center">
      {geld}
      <div className="flex flex-col items-center gap-3">
        <div className="text-4xl font-bold">Welcome Back</div>
        <div className="text-2xl text-gray-600">Welcome back, Please enter your details</div>
      </div>
      <div className="flex flex-col gap-3">
        <input className="border-[1px] border-gray-300 bg-gray-100 rounded w-[450px] h-[50px] pl-3" type="email" placeholder="Email" />
        <input className="border-[1px] border-gray-300 bg-gray-100 rounded w-[450px] h-[50px] pl-3" type="password" placeholder="Password" />
        <Link href={"currency"}>
          <button className=" bg-[#0166FF] text-white rounded-2xl w-[450px] h-[50px] text-xl">Log in</button>
        </Link>
      </div>
      <div className="flex gap-3 text-xl">
        <div>Don't have account?</div>
        <Link href={"signup"}>
          <button className=" text-blue-600">Sign up</button>
        </Link>
      </div>
    </div>
  </div>
);
} 