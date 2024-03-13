import {
    balance,
    geld
} from "../components/ui/img";  
import { useRouter } from "next/router";
export default function Balance() {
    const router = useRouter()
    const handleClick = () => {
        router.push("/finish")
    }

    return <div className="flex flex-col items-center">
        <div className="flex flex-col items-center justify-center pt-[50px] gap-[40px]">
            <div>
                {geld}
            </div>
            <ul className="steps">
                <li className="step step-primary px-10">Currency</li>
                <li className="step step-primary">Balance</li>
                <li className="step">Finish</li>
            </ul>
        </div>
        <div className="flex flex-col items-center pt-[80px] gap-8 w-[400px]">
            <div className="flex flex-col items-center gap-2">
                <div>{balance}</div>
                <div className="font-bold text-2xl">Set up your cash Balance</div>
            </div>
            <div className="flex flex-col gap-3">
                <input type="number" placeholder="cash" className="h-[50px] w-full px-3 bg-gray-100 rounded-lg border-gray-500 border-[1px]" />
                <div className=" text-xs text-gray-500 font-semibold">How much cash do you have in your wallet? </div>
            </div>
            <button onClick={handleClick} className="flex items-center justify-center bg-[#0166FF] w-[400px] h-10 rounded-lg text-white text-xl">Confirm</button>
        </div>
    </div>
}