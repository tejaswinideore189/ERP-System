// import React, { useState } from 'react';
import './Sidebar.css';
import { Link } from 'react-router-dom';
// import Dashboard from './Dashboard';

const Sidebar = ({show, setShow}) => {
  

  return (
    <>
    <main className={show ? 'space-toggle' : null}>
      <header className={`header ${show ? 'space-toggle' : null}`}>
        <div className='header-toggle' onClick={() => setShow(!show)}>
          <i className={`fas fa-bars ${show ? 'fa-solid fa-xmark' : null}`}></i>
        </div>
      </header>

      <aside className={`sidebar ${show ? 'show' : null}`}>
        <nav className='nav'>
          <div>
            <Link to='/' className='nav-logo'>
              <i className={`fas fa-home-alt nav-logo-icon`}></i>
              <span className='nav-logo-name'>Homepage</span>
            </Link>

            <div className='nav-list'>
              <Link to='/dashboard' className='nav-link active'>
                <i className='fas fa-tachometer-alt nav-link-icon'></i>
                <span className='nav-link-name'>Dashboard</span>
              </Link>
              <Link to='/Employeelist' className='nav-link'>
              <i class='fa-solid fa-users nav-link-icon'></i>
                <span className='nav-link-name'>Employee list</span>
              </Link>
              <Link to='/Complaintlist ' className='nav-link'>
              <i class="fa-solid fa-list nav-link-icon"></i>
                <span className='nav-link-name'>Complaint list </span>
              </Link>
              <Link to='/Attendencedlist' className='nav-link'>
                <i className='fa-solid fa-list-alt nav-link-icon'></i>
                <span className='nav-link-name'>Attendenced list</span>
              </Link>
              <Link to='/AddNewAdmin' className='nav-link'>
              <i class='fa-solid fa-user nav-link-icon'></i>
                <span className='nav-link-name'>Add New Admin </span>
              </Link>
              <Link to='/signin' className='nav-link'>
              <i class='fa-solid fa-right-to-bracket nav-link-icon'></i>
                <span className='nav-link-name'>Sign In </span>
              </Link>
              {/* <Link to='/gallery' className='nav-link'>
              <i class='fa-solid fa-user-plus nav-link-icon'></i>
                <span className='nav-link-name'>Sign up </span>
              </Link> */}
            </div>
          </div>

          <Link to='/logout' className='nav-link'>
            <i className='fas fa-sign-out nav-link-icon'></i>
            <span className='nav-link-name'>Logout</span>
          </Link>
        </nav>
      </aside>
{/* <Dashboard/> */}
      {/* <h1>Content</h1> */}
    </main>
    </>
  );
};

export default Sidebar;
