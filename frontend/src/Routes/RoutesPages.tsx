import { Route, Routes } from 'react-router-dom';
import Home from '../pages/home/Home';
import Login from '../pages/login/Login';
import DisplayUser from '../pages/displayUser/displayUser';

export default function RoutesPages() {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/displayUser" element={<DisplayUser />} />
      </Routes>
  )
}
