import Header from "./Header/Header";

export default function Content({ children }) {
  return (
    <section className="h-full basis-4/5 bg-white flex flex-col pl-4">
      <Header />
      <main className=" border-2 border-gray-300 p-4 mt-6 h-full w-full rounded-xl m-2 ">{children}</main>
    </section>
  );
}
