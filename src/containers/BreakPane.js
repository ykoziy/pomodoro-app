import { connect } from 'react-redux';
import { adjustBreakLength } from '../actions';
import withSessionType from './withSessionType';

const BreakPane = () => {}

const mapStateToProps = (state) => ({
    timeDuration: state.breakLen
});

const mapDispatchToProps = (dispatch) => ({
  adjustTimeDuration: (breakLen) => dispatch(adjustBreakLength(breakLen))
});

export default connect(mapStateToProps, mapDispatchToProps)(withSessionType(BreakPane, "break"));
