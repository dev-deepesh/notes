import logo from './logo.svg';
import './App.css';
import NoteLayout from './components/NoteLayout/NoteLayout';
import Header from './components/Header/Header';
import ThemeProvider from '@material-ui/core'
import theme from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Header/>
        <NoteLayout/>
      </div>
    </ThemeProvider>
  );
}

export default App;
