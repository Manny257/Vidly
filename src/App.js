import './App.css';
import Movies from './components/movies';
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";
import "react-toastify/dist/ReactToastify.css"
import Navbar from './components/navBar';
import { Route, Navigate } from 'react-router';
import { Routes } from 'react-router-dom';
import Costumers from './components/Costumers';
import Rentals from './components/rentals';
import NotFound from './components/common/notFound';
import MoviesForm from './components/movieForm';
import LoginForm from './components/loginForm';
import RegisterForm from './components/registerForm';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <>
      <ToastContainer />
      <Navbar />
      <div className='container my-5'>
        <Routes>
          <Route path="/movies" element={<Movies />} />
          <Route path="/" element={<Navigate to="/movies" />} />
          <Route path="/customers" element={<Costumers />} />
          <Route path="/rentals" element={<Rentals />} />
          <Route path="/movies/:id" element={< MoviesForm />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="*" element={<NotFound />} />

        </Routes>
      </div>
    </>
  );
}

export default App;
