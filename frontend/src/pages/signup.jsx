import Link from "next/link";


export default function SignUp (){
    return (<div className="flex items-center justify-center bg-white h-[100vh] w-[50%]">      
    <style>{'body { background-color: #0166FF; height:100%;}'}</style>
    <div className="flex flex-col gap-[40px] items-center">
      <div>
        <img className=" w-[150px]" src="Frame.png" alt="" />
      </div>
      <div className="flex flex-col items-center gap-3">
        <div className="text-4xl font-bold">Create Geld account</div>
        <div className="text-2xl text-gray-600">Sign up below to create your Wallet account</div>
      </div>
      <div className="flex flex-col gap-3">
        <input className="border-[1px] border-gray-300 bg-gray-100 rounded w-[450px] h-[50px] pl-3" type="text" placeholder="Name" />
        <input className="border-[1px] border-gray-300 bg-gray-100 rounded w-[450px] h-[50px] pl-3" type="email" placeholder="Email" />
        <input className="border-[1px] border-gray-300 bg-gray-100 rounded w-[450px] h-[50px] pl-3" type="password" placeholder="Password" />
        <input className="border-[1px] border-gray-300 bg-gray-100 rounded w-[450px] h-[50px] pl-3" type="password" placeholder="Re-Password" />
        <Link href={"/"}>
            <button className=" bg-[#0166FF] text-white rounded-2xl w-[450px] h-[50px] text-xl">Sign up</button>
        </Link>
      </div>
      <div className="flex gap-3 text-xl">
        <div>Already have account?</div>
        <Link href={"/"}>
            <button className=" text-blue-600">Log in</button>
        </Link>
      </div>
    </div>
  </div>)
}