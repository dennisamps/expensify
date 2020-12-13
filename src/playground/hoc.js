// higher order component - a component that renders another component
//reuse code
//render hijacking

import React from 'react';
import ReactDOM from 'react-dom'
// import { ProgressPlugin } from 'webpack';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info is: {props.info}</p>
    </div>
);

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
    <div>
        {props.isAdmin && <p>This is private info Please do not share</p>}
        <WrappedComponent {...props}/>
    </div>

    );

};


const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAautheniticated ? (
                <WrappedComponent {...props}/>
            ) : (
                <p>Please login  to view he info</p>
            )}
            
        </div>
    )

};


const AuthInfo = requireAuthentication(Info);

const AdminInfo = withAdminWarning(Info) ;

// ReactDOM.render(<AdminInfo isAdmin={true} info="there are the details" />, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAautheniticated={true} info="there are the details" />, document.getElementById('app'));
