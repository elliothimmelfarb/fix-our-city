import React, { PropTypes } from 'react';
import { Grid } from 'react-flexbox-grid';
import classNames from 'classnames/bind';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Navbar from './Navbar';
import { RouteTransition } from 'react-router-transition';
import styles from '../css/main.css';

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
 const bgImage = {
   backgroundImage: "url('https://image.pbs.org/poster_images/assets/01mpmdkk0npu1svmvp6s_1.png.resize.710x399.png')",
   backgroundRepeat: 'repeat-x',
  //  backgroundImage: "url('https://image.pbs.org/poster_images/assets/01mpmdkk0npu1svmvp6s_1.png.resize.710x399.png'), url('http://www.ibox-security.co.uk/wp-content/uploads/2015/07/ss-2-bg.jpg')",
  //  backgroundRepeat: 'repeat-x, repeat-y',
   backgroundPosition: 'bottom',
   minHeight: '100vh',
   width: '100vw',
   backgroundColor: '#00bcd4',
   paddingTop: '5%',

 };
 const navbarStyle = {
   position: 'fixed',
   top: '-1px',
   left: '0px',
   zIndex: '10'
};

const App = ({ children, location }) => (

  <div className={cx('app')} style={bgImage}>
    <MuiThemeProvider>
      <Grid>
        <Navbar style={navbarStyle} />
        <RouteTransition
          pathname={location.pathname}
          atEnter={{ opacity: 0, translateX: 100 }}
          atLeave={{ opacity: 2, translateX: -100 }}
          atActive={{ opacity: 1, translateX: 0 }}
          mapStyles={styles => {
            if (styles.opacity > 1) {
              return { display: 'none' };
            }
            return { opacity: styles.opacity, transform: `translateX(${styles.translateX}%)` };
          }}
        >
        {children}
        </RouteTransition>
      </Grid>
    </MuiThemeProvider>
  </div>

);


App.propTypes = {
  children: PropTypes.object,
};

export default App;
