import "./App.css";
import { selectSong } from "../actions";
import Typography from "@material-ui/core/Typography";

import SongList from "./songList";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <SongList />
      </header>
    </div>
  );
}

export default App;
