import React from 'react';
import { connect } from 'react-redux';
import Grid from 'material-ui/Grid';
import Button from '@material-ui/core/Button';

const AteliersDetail = ({ ateliers }) => {
  return (
    <div className="AteliersDetail">
      {(!ateliers)
        ? <div>Choisissez un atelier</div>
        : <div>
          <Grid
            container
            style={{
            height: '100%',
          }}
          >

            <Grid className='Details' item md={6}>
              <div margin='40px' >
                <img
                  src={ateliers.image}
                  width="100%"
                  alt="heron"
                />
              </div>
            </Grid>

            <Grid item md={6} key={ateliers.key}>
              <div>
                <h2>{ateliers.nom_atelier}</h2>
                <h3>{ateliers.date}</h3>
                <b>
                  <img
                    src="https://cdn4.iconfinder.com/data/icons/birds-1/154/bird-stork-heron-pelican-512.png"
                    width="5%"
                    alt="heron"
                  />
                  En chemin, vous trouverez :
                </b>
                <p>
                  <p>
                    {ateliers.chemin}
                  </p>

                </p>
                <b>
                  <img
                    src="https://cdn4.iconfinder.com/data/icons/birds-1/154/bird-stork-heron-pelican-512.png"
                    width="5%"
                    alt="iconHeron"
                  />
                    Programme :
                </b>
                <p>{ateliers.programme}</p>
                <b>
                  <img
                    src="https://cdn4.iconfinder.com/data/icons/birds-1/154/bird-stork-heron-pelican-512.png"
                    width="5%"
                    alt="iconHeron"/>
                  Intervenants :
                </b>
                <p>{ateliers.intervenants}</p>
              </div>
              <Button
                variant="raised"
                id="resa"
                buttonStyle={{
                borderRadius: 25,
              }}
                style={{
                borderRadius: 25,
              }}
              >

                Pré-réserver
              </Button>

            </Grid>
          </Grid>
        </div>}
    </div>
  );
};

// "state.activeUser" is set in reducers/index.js
function mapStateToProps(state) {
  return {ateliers: state.activeAteliers};
}

export default connect(mapStateToProps)(AteliersDetail);
