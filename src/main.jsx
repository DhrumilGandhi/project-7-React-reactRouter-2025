import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import './app.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Layout from './Layout.jsx';
import {Home, About, Contact, Github} from './index.js';
import User from './components/User/User.jsx';
import {githubInfoLoader} from './loader.js'

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout />,
//     children: [{
//       path: '/',
//       element: <Home />
//     },
//     {
//       path: 'about',
//       element: <About />
//     },
//     {
//       path: 'contact',
//       element: <Contact />
//     }
//   ]
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      <Route path='user/:id' element={<User />} />
      <Route 
      loader={githubInfoLoader}
      path='github' 
      element={<Github />} />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
