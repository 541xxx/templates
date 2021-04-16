import { useHistory } from "react-router-dom";
import { Button } from "antd-mobile";
import styles from "./index.module.scss";
function Home() {
  let history = useHistory();
  function handleClick() {
    history.push("/about");
  }
  return (
    <div>
      <h2 className={styles.btn} onClick={handleClick}></h2>;
      <Button>21312</Button>
    </div>
  );
}

export default Home;
