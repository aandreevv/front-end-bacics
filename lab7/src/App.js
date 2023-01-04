import Content from "./components/Content/Content";
import Header from "./components/Header/Header";
import Image from "./components/Image/Image";

function App() {
  return (
    <div>
        <Header/>
        <Content/>
        <Image imgSrc="./images/scalable.jpg"/>
    </div>
  );
}

export default App;
