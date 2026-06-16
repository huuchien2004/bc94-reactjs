import Header from "./header";
import Nav from "./nav";
import Content from "./content";
import Footer from "./footer";

function Example1() {
  return (
    <>
      <div>
        <Header />
        <div style={{ display: "flex" }}>
          <Nav />
          <Content />
        </div>
        <Footer />
      </div>
    </>
  );
}
export default Example1;
