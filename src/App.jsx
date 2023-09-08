import Home from './views/home/Home';
import Landing from './views/landing/Landing';
import Detail from './views/detail/Detail';
import Form from './views/form/Form';
import { Routes, Route } from 'react-router-dom';


function App() {

  return (
    <div>
      <Routes>
        <Route path = '/' element = {<Landing />}></Route>
        <Route path = '/home' element = {<Home />}>Home</Route>
        <Route path = '/detail/:id' element = {<Detail />}>Detail</Route>
        <Route path = '/form' element = {<Form />}>Form</Route>
      </Routes>
    </div>
  )
};

export default App;
