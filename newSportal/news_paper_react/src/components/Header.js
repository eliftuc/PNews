import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../redux/slices/authSlice';

const Header = () => {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.auth.user);

    const handleLogout = () => {
        dispatch(logout());
    };

    return (
        <header>
            <h1>News Portal</h1>
            {user ? (
                <div>
                    <span>{user.username}</span>
                    <button onClick={handleLogout}>Logout</button>
                </div>
            ) : (
                <div>
                    <a href="/login">Login</a>
                </div>
            )}
        </header>
    );
};

export default Header;
