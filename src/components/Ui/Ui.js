import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Aux from '../../AU';
import Header from './Header/Header';
import Board from "./Board/Board";
import Grid from "@material-ui/core/Grid";
import Modal from "./Modal/Modal";

class Ui extends Component {
    constructor(props) {
        super(props);
        this.winner = this.winner.bind(this);
        this.state = {
            board: <Board size={props.size} won={this.winner} key="1"/>,
            open: false,
            score: false,
            text: ''
        }
    }

    winner = text => {
        this.setState({
            open: true,
            text: text
        })
    };

    render() {
        return (
            <Aux>
                <Header/>
                {this.state.board}
                <Grid container justify='center' spacing={24} className="Grid">
                </Grid>
                <Modal
                    text={this.state.text}
                    open={this.state.open}/>
                
            </Aux>
        )
    }
}

Ui.propTypes = {
  size: PropTypes.number
};
export default Ui;