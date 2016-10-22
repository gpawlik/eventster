import React from 'react';
import classNames from 'classnames';

export default function() {
    return (
        <div className="preloader">
            <div className="spinner">
                <div className={classNames('spinner-icon', 'spinner-bounce-middle')}></div>
            </div>            
        </div>
    );
}