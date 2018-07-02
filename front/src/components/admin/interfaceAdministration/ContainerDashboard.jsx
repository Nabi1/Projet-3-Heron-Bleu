import React, { Component } from 'react';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import DashAteliers from './DashAteliers';
import DashIntervenants from './DashIntervenants';
import MenuAdmin from '../menuAdmin/MenuAdmin';
import { fetchAteliers } from '../../../actions/ateliers';
import { fetchIntervenants } from '../../../actions/intervenants';

class ContainerDashboard extends Component {
  componentDidMount() {
    this.props.fetchAteliers();
    this.props.fetchIntervenants();
  }
  render() {
    return (
      <Grid container spacing={16}>
        <Grid item s={4} >
          <MenuAdmin />
          
        </Grid>
        <Grid item style={{ marginTop: 10 }} >
          <DashAteliers s={4} />
        </Grid>
        <Grid item style={{ marginTop: 10 }} >
          <DashIntervenants s={4} />
        </Grid>
      </Grid>
    );
  }
}

export default connect(null, { fetchAteliers, fetchIntervenants })(ContainerDashboard);
