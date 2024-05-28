import { Outlet, ScrollRestoration, useNavigation } from 'react-router-dom';

export const Home = () => {
  const navigation = useNavigation();
  const isPageLoading = navigation.state === 'loading';

  return (
    <main>
      <ScrollRestoration />
      {isPageLoading ? <div>Carregando...</div> : <Outlet />}
    </main>
  );
};
