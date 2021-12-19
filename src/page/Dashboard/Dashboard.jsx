import Item from "../../components/Item/Item";
import { itemData } from "./list";

export default function Home() {
  const renderItems = itemData.map((item) => <Item key={item.id} {...item} />);

  return <div className="pt-12 flex">{renderItems}</div>;
}
