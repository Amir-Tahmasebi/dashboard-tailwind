export default function Item({ classes, Icon, title, amount }) {
  return (
    <section className="basis-1/4 p-4">
      <div
        className={`flex flex-col justify-center items-center px-6 py-2 rounded-lg text-white  ${classes}`}
      >
        <Icon className="mt-3 text-4xl" />
        <span className="my-3">{amount}</span>
        <strong className="font-normal mb-3">{title}</strong>
      </div>
    </section>
  );
}
