import React from 'react';
import { Button } from 'material-ui';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectAteliers } from '../actions/index';
import Moment from 'react-moment';
import Paper from '@material-ui/core/Paper';
import BoutonContact from '../components/client/BoutonContact';
import './AteliersDetails.css';


const styles = {
  paperContainer: {
    backgroundImage: `url(${'../images/heron2.jpg'})`,
    backgroundSize: '100%',
    margin: 5,
    height: 100,
  },
};


const AteliersList = ({ ateliers, selectAteliers }) => (
  <div style={{
                display: 'inline-flex',
                paddingTop: 0,
              }}
  >
    <BoutonContact />
    <div
      style={{
          width: '100%',
          height: '100vh',
        }}
    >
      <ul className="AteliersList" style={{ padding: 2, maxHeight: '100vh', overflow: 'auto' }}>
        <p>Liste des Ateliers</p>
        {ateliers.map(atelier => (
          <Paper elevation={8} >
            <Button key={atelier.id_atelier} onClick={() => selectAteliers(atelier)}>
              <div className="image-container">
                <img src={atelier.photo} alt="heron" style={{ height: '10vh', width: '6vw' }} />
              </div>
              <div style={{fontFamily: 'Montserrat'}}>
                <li>
                  {atelier.nom}
                  <br />
                  <Moment format="DD/MM/YYYY">{atelier.debut}</Moment>
                </li>
              </div>
            </Button>
          </Paper>
        ))}
      </ul>
    </div>
  </div>
);

function mapStateToProps(state) {
  return { ateliers: state.ateliers.ateliers };
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({
    selectAteliers,
  }, dispatch);
}

AteliersList.propTypes = {
  ateliers: PropTypes.arrayOf(Array).isRequired,
  selectAteliers: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, matchDispatchToProps)(AteliersList);
