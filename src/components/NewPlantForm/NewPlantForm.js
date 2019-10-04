import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = reduxState => ({
    reduxState,
});

class NewPlantForm extends Component {
    state = {
        newPlant: {
            id: 4,
            name: '',
            kingdom: '',
            clade: '',
            order: '',
            family: '',
            subfamily: '',
            genus: ''
        }
    }

    handleNameChange = (event, plantKey) => {
        console.log('event happened')
        this.setState({
            newPlant: {
                ...this.state.newPlant,
                [plantKey]: event.target.value,
            }
        });
    }

    addNewPlant = event => {
        event.preventDefault();
        this.props.dispatch({ type: 'POST_PLANTS', payload: this.state.newPlant });
    }

    render() {
        return (
            <div>
                <h3>This is the form</h3>
                <pre>{JSON.stringify(this.state)}</pre>
                <form onSubmit={this.addNewPlant}>
                    <input type='text' value={this.state.newPlant.name} onChange={(event) => this.handleNameChange(event, 'name')} placeholder="Enter Name"/>
                    <input type='text' value={this.state.newPlant.kingdom} onChange={(event) => this.handleNameChange(event, 'kingdom')} placeholder="Enter kingdom"/>
                    <input type='text' value={this.state.newPlant.clade} onChange={(event) => this.handleNameChange(event, 'clade')} placeholder="Enter clade"/>
                    <input type='text' value={this.state.newPlant.order} onChange={(event) => this.handleNameChange(event, 'order')} placeholder="Enter order"/>
                    <input type='text' value={this.state.newPlant.family} onChange={(event) => this.handleNameChange(event, 'family')} placeholder="Enter family"/>
                    <input type='text' value={this.state.newPlant.subfamily} onChange={(event) => this.handleNameChange(event, 'subfamily')} placeholder="Enter subfamily"/>
                    <input type='text' value={this.state.newPlant.genus} onChange={(event) => this.handleNameChange(event, 'genus')} placeholder="Enter genus"/>
                    <input type='submit' value='Add New Plant' />
                </form>
            </div>
        );
    }
}


export default connect(mapStateToProps)(NewPlantForm);
