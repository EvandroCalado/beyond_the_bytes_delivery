import { EditAddress, Home, RegisterAddress } from 'pages';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    children: [
      {
        index: true,
        element: <div>Home</div>,
      },
      {
        path: 'register-address',
        element: <RegisterAddress />,
      },
      {
        path: 'edit-address',
        element: <EditAddress />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
