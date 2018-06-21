import React from 'react';
import { connect } from 'react-redux';
import Paper from '@material-ui/core/Paper';
import Grid from 'material-ui/Grid';
import Moment from 'react-moment';


import './AteliersDetails.css';


const AteliersDetail = (props) => {
  const { ateliers } = props;
  return (
    <div className="AteliersDetail">
      {!ateliers ? (
        <div>
          <Paper elevation={4} style={{ padding: 20 }}>

            <Grid
              container
              style={{
                height: '80vh',
                width: 'auto',
              }}
            >
              <Grid media="screen and (max-width: 440px)" className="image-container" item md={6} sm={1}>
                <div>
                  <img src="../images/landing.jpg" alt="heron" style={{ height: '80vh', width: '80vw' }} className="images2" />
                </div>
                <div
                  className="overlay2"
                  style={{
                          height: '20vh', width: '60vw', fontSize: 40, marginLeft: '20vw', fontFamily: 'Montserrat'
                          ,
                        }}
                >
                  <h3>Les Ateliers du Héron Bleu</h3>
                Choisissez un atelier
                </div>
              </Grid>
            </Grid >
          </Paper>
        </div>
      ) : (

        <div>
          <Paper elevation={4} style={{ padding: 20 }}>

            <Grid
              container
              style={{
              height: '80vh',
              width: 'auto',
            }}
            >
              <Grid media="screen and (max-width: 440px)" className="image-container" item md={6} sm={1} key={ateliers.key}>
                <div>
                  <img src={ateliers.photo} alt="heron" style={{ height: '80vh', width: '80vw' }} className="images" />
                </div>
              </Grid>
              <Grid >
                <div
                  className="overlay"
                  style={{
                          height: '20vh', width: '60vw', fontSize: 14, marginLeft: '10vw', fontFamily: 'Montserrat'
                          ,
                        }}
                >
                  <h1>{ateliers.nom}</h1>
                  <h3><Moment format="DD/MM/YYYY">{ateliers.debut}</Moment></h3>
                  <b>
                    <img
                      src="../images/logoHeron.png"
                      width="4%"
                      alt="heron"
                    />
                    <h3>En chemin, vous trouverez :</h3>
                  </b>
                  <p>{ateliers.contenu}</p>
                  <b>

                    <h3>Programme :</h3>
                  </b>
                  <p>{ateliers.programme}</p>
                  <b>
                    <h3>Intervenants :</h3>
                  </b>
                  <p>{ateliers.intervenants}</p>
                </div>
              </Grid>
            </Grid>
          </Paper>
        </div>


      )}
    </div>
  );
};

// "state.activeUser" is set in reducers/index.js
function mapStateToProps(state) {
  return { ateliers: state.activeAteliers };
}

export default connect(mapStateToProps)(AteliersDetail);
