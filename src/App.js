import logo from './logo.svg';
import './App.css';
import AddFisat from './components/AddFisat';
import Search from './components/Search';
import Delete from './components/Delete';
import ViewAll from './components/ViewAll';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route>
          <Route path='/' element ={<AddFisat/>}/>
          <Route path='/search' element ={<Search/>}/>
          <Route path='/delete' element ={<Delete/>}/>
          <Route path='/viewall' element ={<ViewAll/>}/>
          </Route>
          </Routes>
          </BrowserRouter>

    </div>
  );
}

export default App;
