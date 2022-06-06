import directory from './data/navigation';
import Folder from './components/Folder';
import './App.css';

function App() {
  return (
    <>
      <Folder directory={directory} />
    </>
  );
}

export default App;
