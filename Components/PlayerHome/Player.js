import Footer from "./Footer";
import Body from "./Body";
import Sidebar from "./Sidebar";

function Player() {
  return (
    <div>
      <div className="flex">
        <Sidebar className="flex-auto" />
        <Body className="flex-auto" />
      </div>
      <Footer />
    </div>
  );
}

export default Player;
