import React from 'react';
import Grid from 'material-ui/Grid';
import UserList from '../../../containers/AtelierList';
import UserDetail from '../../../containers/AtelierDetail';
import SimpleForm from '../../../containers/Form';

const Ateliers = () => {
  return (
    <div style={{ background: '#F2F2F2' }}>
      <div>
        <Grid container>
          <Grid item md={2}>
            <UserList />
          </Grid>
          <Grid item md={10}>
            <UserDetail />
          </Grid>
        </Grid>
        <Grid style={{ height: 400 }} container spacing={24} direction="column" align="center" >
          <Grid item xs={12} style={{ background: '#F2F2F2' }}>
            <SimpleForm />
          </Grid>
        </Grid>
      </div>
      <div />
    </div>
  );
};


export default Ateliers;

