import ActiveLabel from "@/components/active-label";
import NotActiveLabel from "@/components/not-active-label";


export default function Home() {
  return (
    <main>
      <h1 className="text-3xl font-bold underline" >Home page</h1>
      <ActiveLabel>active</ActiveLabel>
      <NotActiveLabel>not active</NotActiveLabel>
    </main>       
  );
}