import React, {Component} from 'react';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

class Notification extends Component {

    render() {
        return (
          <React.Fragment>
                <ToastContainer
                    position="top-right"
                    autoClose={3000}
                    hideProgressBar
                    // newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnVisibilityChange
                    draggable
                    pauseOnHover/>
          </React.Fragment>
        );
    }
}

export default Notification;