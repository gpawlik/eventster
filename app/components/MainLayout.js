import React from 'react';
import './../styles/App.scss';
import Header from './HeaderArea/Header';
import Navigation from './NavigationArea/Navigation';
import UsersList from './UsersArea/UsersList';

export default function(props) {        
    return (
        <div className="MainLayout">
            <Header />
            <Navigation />
            <main>
            {props.children}
            </main>
        </div>
    )
};
