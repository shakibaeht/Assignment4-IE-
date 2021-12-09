import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Aux from '../../AU';
import Header from './Header/Header';
import Board from "./Board/Board";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Modal from "./Modal/Modal";
import Score from "./Score/Score";
import List from '@material-ui/icons/Menu';

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

    showScore = () => {
        this.setState({
            score: true
        })
    };
    handleClose = () => {
        this.setState({open: false});
        this.resetGame();
    };

    closeScore = () => {
        this.setState({score: false});
    };

    render() {
        return (
            <Aux>
                <Header/>
                {this.state.board}
                <Grid container justify='center' spacing={24} className="Grid">
                    <Grid item>
                        <Button
                            onClick={this.showScore}
                            variant="raised"
                            color="default">
                            <List style={{color:'red'}}/>
                            Score
                        </Button>
                    </Grid>
                </Grid>
                <Modal
                    text={this.state.text}
                    open={this.state.open}
                    onClose={this.handleClose}/>
                <Score
                    open={this.state.score}
                    onClose={this.closeScore}
                />
            </Aux>
        )
    }
}

Ui.propTypes = {
  size: PropTypes.number
};

export default Ui;