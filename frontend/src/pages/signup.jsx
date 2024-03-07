import { geld } from "../components/ui/img";
import { useRouter } from "next/router";
import { useState } from "react";


export default function SignUp (){
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const router = useRouter();
  const handleClick = () => {
    router.push("http://localhost:3000/")
  }
  const createData = async () => {
    if (name === undefined || email === undefined || password === undefined) {
      window.alert("hooson bn");
      return;
    }
    try {
      const response = await fetch("http://localhost:8080/",{
        method: "POST",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({name, email, password}),
      });
      const res = await response.json();
    } catch (err) {
      console.error(err)
    }
  }
    return (<div className="flex items-center justify-center bg-white h-[100vh] w-[50%]">      
    <style>{'body { background-color: #0166FF; height:100%;}'}</style>
    <div className="flex flex-col gap-[40px] items-center">
      <div>
        {geld}
      </div>
      <div className="flex flex-col items-center gap-3">
        <div className="text-4xl font-bold">Create Geld account</div>
        <div className="text-2xl text-gray-600">Sign up below to create your Wallet account</div>
      </div>
      <div className="flex flex-col gap-3">
        <input onChange={(event) => setName(event.target.value)} className="border-[1px] border-gray-300 bg-gray-100 rounded w-[450px] h-[50px] pl-3" type="text" placeholder="Name" />
        <input onChange={(event) => setEmail(event.target.value)} className="border-[1px] border-gray-300 bg-gray-100 rounded w-[450px] h-[50px] pl-3" type="email" placeholder="Email" />
        <input onChange={(event) => setPassword(event.target.value)} className="border-[1px] border-gray-300 bg-gray-100 rounded w-[450px] h-[50px] pl-3" type="password" placeholder="Password" />
        <input className="border-[1px] border-gray-300 bg-gray-100 rounded w-[450px] h-[50px] pl-3" type="password" placeholder="Re-Password" />
        <button onClick={createData} className=" bg-[#0166FF] text-white rounded-2xl w-[450px] h-[50px] text-xl">Sign up</button>
      </div>
      <div className="flex gap-3 text-xl">
        <div>Already have account?</div>
        <button onClick={handleClick} className=" text-blue-600">Log in</button>
      </div>
    </div>
  </div>
  )
}