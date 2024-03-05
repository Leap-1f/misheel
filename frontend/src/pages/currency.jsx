export default function Currency() {
    return <div>
        <div className="flex flex-col items-center justify-center pt-[100px] gap-[40px]">
            <div>
                <img src="frame.png" alt="" className=" w-[130px]" />
            </div>
            <ul className="steps">
                <li className="step step-primary">Currency</li>
                <li className="step">Balance</li>
                <li className="step">Finish</li>
            </ul>
        </div>
    </div>
}