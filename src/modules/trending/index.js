import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import TrendingIndex from './component';
import { fetchTrending } from './actions';
import { receiveSetting } from 'common/setting/actions';

const mapStateToProps = ({ trending, setting }) => ({
  trending,
  setting
});

const mapDispatchToProps = dispatch => ({
  fetchTrending: () => dispatch(fetchTrending()),
  receiveSetting: setting => dispatch(receiveSetting(setting))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(TrendingIndex));
