import { BrowserRouter, Route, Routes } from 'react-router-dom';

import {
  DiaryPage,
  SigninPage,
  SignupPage,
  ThemePage,
  MakingPage,
  HomePage,
  GuestPage
} from './pages';


const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={
              <SigninPage />
          }
        />
        <Route
          path='/diary/:name'
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
          path='/theme'
          element={
              <ThemePage />
          }
        />
        <Route
          path='/making'
          element={
              <MakingPage />
          }
        />
        <Route
          path='/home'
          element={
              <HomePage />
          }
        />
        <Route
          path='/:uuid'
          element={
              <GuestPage />
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
