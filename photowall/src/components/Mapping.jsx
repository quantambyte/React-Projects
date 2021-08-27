import App from '../App';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../redux/actions/actions';
import { withRouter } from 'react-router';

const mapStoreToProps = (state) => {
  return {
    posts: state.posts,
    comments: state.comments,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actions, dispatch);
};

const Mapping = withRouter(
  connect(mapStoreToProps, mapDispatchToProps)(App)
);

export default Mapping;
