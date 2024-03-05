import {
  Header,
  Stat,
  Chart,
  Records
} from "../components/layout/index";
export default function Dashboard() {
  return (
    <div>
      <Header/>
      <div className=" bg-slate-200">
        <Stat/>
        <Chart/>
        <Records/>
      </div>
    </div>
  );
} 