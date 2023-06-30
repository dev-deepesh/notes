import logo from './logo.svg';
import './App.css';
import NoteLayout from './components/NoteLayout/NoteLayout';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <Header/>
      <NoteLayout/>
    </div>
  );
}

export default App;
