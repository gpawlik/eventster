import React from 'react';
import './../styles/App.scss';
import Header from './HeaderArea/Header';
import Navigation from './NavigationArea/Navigation';
import UsersList from './UsersArea/UsersList';
import MessageList from './MessageArea/MessageList';

class MainLayout extends React.Component {   
    render () {
        return (
            <div className="MainLayout">
                <Header />
                <Navigation />
                <main>
                    <MessageList />
                    {this.props.children}
                </main>
            </div>
        )        
    }     
};

export default MainLayout;
