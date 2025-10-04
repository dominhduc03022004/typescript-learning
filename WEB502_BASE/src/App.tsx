import { Toaster } from "react-hot-toast";
import Button from "./components/Button";
import MyUseState from "./components/MyUseState";
import ListUsers from "./components/ListUsers";

function App() {
  const handleClick = () => {
  };

  return (
    <>
      <div>LIST USERS</div>
      <ListUsers/>
      <hr />
      <div>Hello React Typescript</div>
      <hr />
      <Button label="Click Me 21" onClick={handleClick} />
      <Button label="Click Me Blue" color="blue" onClick={handleClick} />
      <hr />
      <MyUseState />
      <Toaster />
    </>
  );
}

export default App;
