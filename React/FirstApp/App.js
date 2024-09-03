import { useState } from "react";
import Counter from "./components/counter";
import Flag from "./components/flag";
import Footer from "./components/footer";
import Header from "./components/Header";
import Login from "./components/Login";
import Main1 from "./components/main1";
import ShowProduct from "./components/showProduct";
import Slider from "./components/slider";
import Statedemo from "./components/Statedemo";
import Main from "./main";
import Register from "./components/Register";

function App() {
  const [flag,setFlag] = useState(false);
  return (
    <div className="container">
      {/* <Header />
      <Slider />
      <Main />
      <Footer/> */}
      {/* <Main1/>
      <ShowProduct/> */}
      {/* <Statedemo/>
      <Counter/>
      <Flag/> */}
      <button className="my-3 btn btn-primary w-100" onClick={()=>setFlag(!flag)}>{flag?'Register':'Login'}</button>
      {
        flag? <Login/> : <Register/>
      }
    </div>
  );
}

export default App;
