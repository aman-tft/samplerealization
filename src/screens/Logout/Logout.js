import React from 'react';
import {AbsoluteCenteredActivityIndicator} from '../../components';
import {logout} from '../../utils/user.utils';

class Logout extends React.Component {
  componentDidMount() {
    logout();
  }

  render() {
    return <AbsoluteCenteredActivityIndicator />;
  }
}

export default Logout;
