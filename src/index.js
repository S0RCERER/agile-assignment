import React from "react";
import {createRoot} from 'react-dom/client'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/homePage";
import MoviePage from "./pages/movieDetailsPage";
import FavoriteMoviesPage from "./pages/favoriteMoviesPage";
import MovieReviewPage from "./pages/movieReviewPage";
import SiteHeader from './components/siteHeader'
import UpcomingMoviesPage from "./pages/upcomingMoviesPage";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools'
import MoviesContextProvider from "./contexts/moviesContext";
import AddMovieReviewPage from './pages/addMovieReviewPage'
import TopRatedMoviesPage from "./pages/topRatedMoviesPage";
import PopularPeoplePage from "./pages/popularPeoplePage";
import PersonDetailsPage from "./pages/personDetailsPage";
import LoginPage from "./pages/loginPage";
import RegisterPage from "./pages/registerPage";


const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 360000,
      refetchInterval: 360000, 
      refetchOnWindowFocus: false
    },
  },
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <SiteHeader />
        <MoviesContextProvider>
        <Routes>
        <Route path="/reviews/:id" element={ <MovieReviewPage /> } />
          <Route path="/movies/favorites" element={<FavoriteMoviesPage />} />
          <Route path="/movies/:id" element={<MoviePage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/movies/upcoming" element={ <UpcomingMoviesPage /> } />
          <Route path="/reviews/form" element={ <AddMovieReviewPage /> } />
          <Route path="/movies/top-rated" element={ <TopRatedMoviesPage /> } />
          <Route path="/person" element={ <PopularPeoplePage /> } />  
          <Route path="/person/:id" element={ <PersonDetailsPage /> } />
          <Route exact path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
        </MoviesContextProvider>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};


const rootElement = createRoot(  document.getElementById("root") )
rootElement.render(<App />);