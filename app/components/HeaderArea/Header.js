import React from 'react';
import { toggleNavigation } from '../../actions/uiActions';
import { connect } from 'react-redux';
import classNames from 'classnames';

class Header extends React.Component {  
    
    toggleNavigation(toggleState) {
        this.props.toggleNavigation(toggleState);
    }
    
    render() {
        const { isMobileNavigationOpen } = this.props.ui;
        //const 
        return (
            <div className="Header">
                <h1>[APP-NAME]</h1>
                <div 
                    className={classNames('menu-icon', { 'open': isMobileNavigationOpen })} 
                    onClick={this.toggleNavigation.bind(this, !isMobileNavigationOpen)}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>  
            </div>
        )        
    }            
};

function mapStateToProps(state) {
    return {
        ui: state.uiState
    }
}

export default connect(mapStateToProps, { toggleNavigation })(Header);