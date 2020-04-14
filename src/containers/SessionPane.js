import { connect } from 'react-redux';
import { adjustSessionLength } from '../actions';
import withSessionType from './withSessionType';

const SessionPane = ({sessionLen, adjustSessionLength}) => {}

const mapStateToProps = (state) => ({
    timeDuration: state.sessionLen
});

const mapDispatchToProps = (dispatch) => ({
  adjustTimeDuration: (sessionLen) => dispatch(adjustSessionLength(sessionLen))
});

export default connect(mapStateToProps, mapDispatchToProps)(withSessionType(SessionPane, "session"));
