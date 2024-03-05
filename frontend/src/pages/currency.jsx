import {
    currency,
    geld
} from "../components/ui/img"
import { currSelector } from "@/components/ui/currencySelector"
import Link from "next/link";


export default function Currency() {
    return <div className="flex flex-col items-center">
        <div className="flex flex-col items-center justify-center pt-[50px] gap-[40px]">
            <div>
                {geld}
            </div>
            <ul className="steps">
                <li className="step step-primary px-10">Currency</li>
                <li className="step">Balance</li>
                <li className="step">Finish</li>
            </ul>
        </div>
        <div className="flex flex-col items-center pt-[80px] gap-8 w-[400px]">
            <div className="flex flex-col items-center gap-2">
                <div>{currency}</div>
                <div className="font-bold text-2xl">Select base currency</div>
            </div>
            <div className="flex flex-col gap-3">
                {currSelector}
                <div className=" text-xs text-gray-500 font-semibold">Your base currency should be the one you use most often. All transaction in other currencies will be calculated based on this one </div>
            </div>
            <Link href={"balance"}>
                <button className="flex items-center justify-center bg-[#0166FF] h-10 w-[400px] rounded-lg text-white text-xl">Confirm</button>
            </Link>
        </div>
    </div>
}