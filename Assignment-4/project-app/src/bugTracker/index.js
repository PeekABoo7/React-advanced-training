import { Fragment } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import BugStats from './views/bugStats';
import BugSort from './views/bugSort';
import BugEdit from './views/bugEdit';
import BugList from './views/bugList';

import * as bugActionCreators from "./actions";

const BugTracker = ({ bugs, toggle, remove, removeClosed, addNew, projects }) => (
  <Fragment>
    <h3>Bug Tracker</h3>
    <hr />
    <BugStats bugs={bugs} />
    <BugSort />
    <BugEdit addNew={addNew} {...{ projects}}/>
    <BugList {...{ bugs, toggle, remove, removeClosed }} />
  </Fragment>
);

function mapStateToProps(storeState){
  const bugs = storeState.bugState;
  const projects = storeState.projectState;
  return { bugs : bugs, projects: projects };
}

function mapDispatchToProps(dispatch){
  const bugActionDispatchers = bindActionCreators(bugActionCreators, dispatch);
  return bugActionDispatchers;
}

export default connect(
  mapStateToProps, 
  mapDispatchToProps)
(BugTracker);
