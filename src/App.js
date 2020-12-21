import './App.css';
import Header from "./components/Header";
import Body from "./components/Body";
import Sidebar from "./components/Sidebar";
import GraphRendering from "./components/GraphRendering"
import DndTest from './components/DnD/DnDTest/index';
import repp from "./components/DnD/repp";

function App() {
  return (
    <div className="App">
      <Header/>
      
     {/* <Sidebar/>  */}
      {/* <Body/>  */}
      <GraphRendering/>
      {/* <DndTest/> */}
    
    </div>
  );
}

export default App;
