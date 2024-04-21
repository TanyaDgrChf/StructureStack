import logo from './logo.svg';
import { BrowserRouter, Routes, Route, useNavigate} from 'react-router-dom';
import './App.css';
import Load from './Components/Load';
import Contentdesc from './Components/HomeContent';
import Sorting from './Components/Sorting';
import Bubblesort from './Components/Bubblesort';
import Insertionsort from './Components/Insertionsort';
import Selectionsort from './Components/Selectionsort';
import Quicksort from './Components/Quicksort';
import Radixsort from './Components/Radixsort';
import Mergesort from './Components/Mergesort';
import AboutUs from './Components/AboutUs';
import Searching from './Components/Searching';
import Linearsearch from './Components/Linearsearch';
import Binarysearch from './Components/Binarysearch';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Load />} />
          <Route path='/welcome' element={<Contentdesc />} />
          <Route path='/sorting' element={<Sorting />} />
          <Route path='/bubblesort' element={<Bubblesort />} />
          <Route path='/insertionsort' element={<Insertionsort />} />
          <Route path='/selectionsort' element={<Selectionsort />} />
          <Route path='/quicksort' element={<Quicksort />} />
          <Route path='/radixsort' element={<Radixsort />} />
          <Route path='/mergesort' element={<Mergesort />} />
          <Route path='/about' element={<AboutUs />} />
          <Route path='/searching' element={<Searching />} />
          <Route path='/linearsearch' element={<Linearsearch />} />
          <Route path='/binarysearch' element={<Binarysearch />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
