import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, 
        CardContent, 
        CardActionArea, 
        Button, 
        CardActions, 
        CardMedia, 
        Typography } from '@material-ui/core';

import { withRouter } from 'react-router-dom';

class PlantCard extends Component {

    //delete
    removePlant = (event) => {
        console.log('clicked delete ', this.props.plant.id);
        this.props.dispatch({ type: 'DELETE_PLANTS', payload: this.props.plant.id });
    }

    //details
    seeDetails = (event) => {
        this.props.history.push("/plant/"+this.props.plant.id);
    }

    render(){
            
        return(
            <Card className="card">
                <CardActionArea>
                    <CardContent color='secondary'>
                        <Typography>
                            {this.props.plant.name} 
                        </Typography>
                    </CardContent>
                    <CardActions>
                            <Button size="small" color="secondary" onClick={this.removePlant}>Delete</Button>
                            <Button onClick={this.seeDetails}>Details</Button>
                    </CardActions>
                </CardActionArea>
            </Card>



        )
    }
} 

const mapStateToProps = reduxState => ({
    reduxState,
});

export default connect(mapStateToProps)(withRouter(PlantCard));