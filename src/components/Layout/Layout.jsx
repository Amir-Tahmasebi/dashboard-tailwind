import ProviderAppState from "../../state/ProviderAppState";
import Content from "../Content";
import Navbar from "../Navbar";
import "./Layout.scss";

export default function Layout({ children }) {
  return (
    <ProviderAppState>
      <section className="custom-layout bg-gray-100 h-screen rounded overflow-hidden relative flex justify-between items-start">
        <Navbar />
        <Content>{children}</Content>
      </section>
    </ProviderAppState>
  );
}
