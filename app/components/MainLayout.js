import React from 'react';
import './../styles/App.scss';
import Header from './HeaderArea/Header';
import Navigation from './NavigationArea/Navigation';
import UsersList from './UsersArea/UsersList';
import MessageList from './MessageArea/MessageList';
import Footer from './FooterArea/Footer';

class MainLayout extends React.Component {   
    render () {
        return (
            <div className="MainLayout">
                <Header />
                <Navigation />
                <main className="MainContent">
                    <MessageList />
                    {this.props.children}
                </main>
                <Footer />
            </div>
        )        
    }     
};

export default MainLayout;
