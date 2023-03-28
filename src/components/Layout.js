import './Layout.css';
import { Outlet, useNavigate } from 'react-router';

export const Layout = () => {
  const navigate = useNavigate();
  return (
    <div className="wrapper">
      <div className="header-wrapper">
        <p
         
          onClick={() => navigate('/home')}
        >
          Home
        </p>
        <p
          
          onClick={() => navigate('/about')}
        >
          About
        </p>
        <p
         
          onClick={() => navigate('/contact')}
        >
          Contact
        </p>
        <p
         
         onClick={() => navigate('/posts')}
       >
         Posts
       </p>
      </div>
      <div className="main-content-wrapper">
        <Outlet />
      </div>
    </div>
  );
};
