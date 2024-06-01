import Image from "next/image";
import Header from "./components/Header";
import Left from "./components/Left";
import Middle from "./components/Middle";
import Right from "./components/Right";

export default function Home() {
  return (
    <main className="p-5  bg-black/5 inset-0">
      <Header />
      <div className="mt-5 lg:flex justify-between gap-4 ">
        <Left />
        <Middle />
        <Right />
      </div>
    </main>
  );
}
