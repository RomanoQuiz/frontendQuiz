
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
    element: <Main id="66e96bf5dbf14b2d7e5908bb"/> 
  },
  {
    path: '/quiz-personalitati',
    element: <Main id="66e692ae752884cf14f77c79"/>
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
