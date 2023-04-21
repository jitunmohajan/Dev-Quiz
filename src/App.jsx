import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Main from './layouts/Main';
import Home from './components/Home/Home';
import Quiz from './components/Quiz/Quiz';
import Statistics from './components/Statistics/Statistics';
import Blog from './components/Blog/Blog';
import Topics from './components/Topics/Topics';

function App() {
  
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          loader: async()=>{
            return fetch('https://openapi.programming-hero.com/api/quiz')
          },
          element: <Home></Home>
        },
        {
          path: 'quiz/:quizId',
          loader: async({params})=>{
            return fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizId}`)
          },
          element: <Quiz></Quiz>
        },
        {
          path: '/statistics',
          loader: async()=>{
            return fetch('https://openapi.programming-hero.com/api/quiz')
          },
          element: <Statistics></Statistics>
        },
        {
          path: 'blogs',
          element: <Blog></Blog>
        },
        {
          path: 'topics',
          loader: async()=>{
            return fetch('https://openapi.programming-hero.com/api/quiz')
          },
          element: <Topics></Topics>
        },
      ]
    }
  ]);
  return (
    <div className="App">
      
      <RouterProvider router={router}></RouterProvider>
    
    </div>
  )
}

export default App
