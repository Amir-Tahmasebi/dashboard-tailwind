import face from "./../../assets/img/face.jpg";
export default function Header() {
  return (
    <header className="w-full h-14 px-12 mt-3">
      <div className=" h-full rounded-full shadow-xl flex items-center justify-between px-6">
        <p>امیر طهماسبی</p>
        <div className="h-full border-2 border-gray-500 flex items-center rounded-full">
          <img
            src={face}
            className="w-14 h-auto max-h-max rounded-full"
            alt=""
          />
        </div>
      </div>
    </header>
  );
}
