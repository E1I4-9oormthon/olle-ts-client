import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { WelcomePage } from 'pages/WelcomePage';
import { Layout, HeaderBottomNavBarLayout } from 'components/layouts/Layout';

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<WelcomePage />} />
        </Route>
        <Route element={<HeaderBottomNavBarLayout />}></Route>
      </Routes>
    </BrowserRouter>
  );
};
