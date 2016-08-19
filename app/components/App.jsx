import React, { PropTypes } from 'react';
import { Grid } from 'react-flexbox-grid';
import classNames from 'classnames/bind';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Navbar from './Navbar';
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
// const bgImage = {
//   backgroundImage: "url('https://image.pbs.org/poster_images/assets/01mpmdkk0npu1svmvp6s_1.png.resize.710x399.png')",
//   backgroundRepeat: 'repeat-x',
//   //  backgroundImage: "url('https://image.pbs.org/poster_images/assets/01mpmdkk0npu1svmvp6s_1.png.resize.710x399.png'), url('http://www.ibox-security.co.uk/wp-content/uploads/2015/07/ss-2-bg.jpg')",
//   //  backgroundRepeat: 'repeat-x, repeat-y',
//   backgroundPosition: 'bottom',
//   minHeight: '100vh',
//   width: '100vw',
//   backgroundColor: '#00bcd4',
//   paddingTop: '7%',
// };
const App = ({ children }) => (
  <div className={styles.bgImage}>
    <div className={cx('app')}>
      <MuiThemeProvider>
        <Grid>
          <Navbar />
          {children}
        </Grid>
      </MuiThemeProvider>
    </div>
  </div>
);


App.propTypes = {
  children: PropTypes.object,
};

export default App;
