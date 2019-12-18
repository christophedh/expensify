import React from 'react';
import ReactDOM from 'react-dom';

const Info = ({info, ...props}) => (
  <div>
    <h1>Info</h1>
    <p>this info is {info}</p>
  </div>
);

const withAdminWarning = WrappedComponent => {
  return props => (
    <div>
      <p>this is a private info</p>
      <WrappedComponent {...props} />
    </div>
  );
};

const AdminInfo = withAdminWarning(Info);

const requireAuthentification = WrappedComponent => {
  return ({isLogged, ...props}) => {
    if (isLogged) {
      return (
        <div>
          <WrappedComponent {...props} />
        </div>
      );
    } else {
      return <div>please login before ...</div>;
    }
  };
};

const App = requireAuthentification(Info);
//ReactDOM.render(
//<AdminInfo info="information" />,
//document.getElementById('app'),
//);

ReactDOM.render(
  <App info="your logged" isLogged={false} />,
  document.getElementById('app'),
);
