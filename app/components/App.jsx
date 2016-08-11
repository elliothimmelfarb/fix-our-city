import React, { PropTypes } from 'react';
import { Grid } from 'react-flexbox-grid';
import classNames from 'classnames/bind';
import styles from '../css/main.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const cx = classNames.bind(styles);


/*
 * React-router's <Router> component renders <Route>'s
 * and replaces `this.props.children` with the proper React Component.
 *
 * Please refer to `routes.jsx` for the route config.
 *
 * A better explanation of react-router is available here:
 * https://github.com/rackt/react-router/blob/latest/docs/Introduction.md
 <Navigation />
 */

const App = ({ children }) => (

  <div className={cx('app')}>
    <MuiThemeProvider>
      <Grid>
        {children}
      </Grid>
      </MuiThemeProvider>
  </div>

);


App.propTypes = {
  children: PropTypes.object,
};

export default App;
