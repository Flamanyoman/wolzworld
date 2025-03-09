import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ResponsiveArticle from './pages/articles.jsx';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <ResponsiveArticle />,
    },
  ]);

  return (
    <div className='App'>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
