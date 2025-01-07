import styles from "./App.module.css";
import { Home } from "./components/Home/Home";
import { Game } from "./components/Game/Game";

function App() {

  return (
    <div className={styles.App}>
      <Game rows={20} columns={10}></Game>
    </div>
  )
}

export default App
