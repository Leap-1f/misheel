import { RecordData } from "../ui/record";

export function Records() {
    return <div className="px-[200px] py-[40px]">
        <div className=" bg-white rounded-2xl">
            <div className="font-bold p-4">Last Records</div>
            <hr />
            <div>
                <RecordData/>
            </div>
        </div>
    </div>
}