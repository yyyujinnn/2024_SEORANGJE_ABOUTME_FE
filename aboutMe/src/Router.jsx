import { BrowserRouter, Route, Routes } from 'react-router-dom';

import {
  DiaryPage,
  SigninPage,
  SignupPage,
  ThemePage,
} from './pages';


const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={
              <DiaryPage />
          }
        />
        <Route
          path='sign-in'
          element={
              <SigninPage />
          }
        />
        <Route
          path='/sign-up'
          element={
              <SignupPage />
          }
        />
        <Route
          path='/mypage'
          element={
              <MyPage />
          }
        />
        <Route
          path='/theme'
          element={
              <ThemePage />
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
