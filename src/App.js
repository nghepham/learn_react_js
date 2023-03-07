
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import './App.css';
import Header from './components/Header'
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import Dashboard from './pages/dashboard/Dashboard';
import PageNotFound from './pages/PageNotFound';
import SignUpPage from './pages/SignUpPage';
import Google from './pages/Google';
import SignIn from './pages/SignIn';
import Service from './pages/Service';
import SplitNav from './pages/SplitNav';
import TodoPage from './pages/TodoPage';


function App() {
  return (
    <div className={`dark`}>
      <Router>
        <Header />
        <div className='div-container'>
          <Routes>
            <Route path="/home" element={<HomePage />} />
            <Route path="/" element={<Navigate replace to="/home" />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/google" element={<Google />} />
            <Route path="/service" element={<Service />} />
            <Route path="/split" element={<SplitNav />} />
            <Route path="/todo" element={<TodoPage />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
