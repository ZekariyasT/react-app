import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
// import ListGroup from "./components/ListGroup";
function App() {
  const [buttonClicked, setButtonClicked] = useState(false);

  return (
    <div>
      {buttonClicked && (
        <Alert OnClick={() => setButtonClicked(false)}>
          Hello <b>Zack</b>
        </Alert>
      )}

      <Button color="primary" OnClick={() => setButtonClicked(true)}>
        My Button
      </Button>
    </div>
  );
}

export default App;
