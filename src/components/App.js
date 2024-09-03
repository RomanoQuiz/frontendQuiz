
import '../styles/App.css';
import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import Main from './Main';
import Quiz from './Quiz';
import Result from './Result';
import { CheckUserExist } from '../helper/helper';
import HomePage from './HomePage';
const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />
  },
  {
    path: '/quiz-general' ,
    element: <Main id="669556961d6deb3f90159c1a"/> 
  },
  {
    path: '/quiz-personalitati',
    element: <Main id="66c61cc88605c11713fa8d9d"/>
  },
  {
    path: '/quiz/:id',
    element:<CheckUserExist><Quiz/> </CheckUserExist>
  },
  {
    path: '/result',
    element:<CheckUserExist><Result /> </CheckUserExist>
  },
])
function App() {
  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
}

export default App;
