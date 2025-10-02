import { Toaster } from "react-hot-toast";
import Button from "./components/Button";
import MyUseState from "./components/MyUseState";

function App() {
  const handleClick = () => {};

  return (
    <>
      <div>Hello React Typescript</div>
      <hr />
      <Button label="Click Me 21" onClick={handleClick} />
      <Button label="Click Me Blue" onClick={handleClick} />
      <hr />
      <MyUseState/>
      <Toaster />
    </>
  );
}

export default App;
