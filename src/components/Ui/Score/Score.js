import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import PropTypes from 'prop-types';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Aux from '../../../AU';
import "./Score.css"

const scorecard = (props) => {

    const {open, onClose} = props;

    const action = [
        <IconButton
            key="close"
            aria-label="Close"
            color="inherit"
            onClick={onClose}
            >
            <CloseIcon style={{color:'black'}}/>
        </IconButton>
    ];

    const equals = localStorage.getItem('DRAWS');
    const wons = localStorage.getItem('WONS');
    const loss = localStorage.getItem('LOSS');

    const score = (
        <Aux>
            <Divider className="Divider"/>
            <Grid container spacing={16}>
                <Grid item xs={4} >
                    <Typography variant="body2">
                        you
                    </Typography>
                </Grid>
                <Grid item xs={4} >
                    <Typography variant="body2">
                        equal
                    </Typography>
                </Grid>
                <Grid item xs={4} >
                    <Typography variant="body2" >
                        Opp
                    </Typography>
                </Grid>
            </Grid>
            <Divider className="Divider"/>
            <Grid container style={{marginTop:'5px'}}>
                <Grid item xs={4}>
                    <Typography variant="caption" className="Scores">
                        {wons===null?0:wons}
                    </Typography>
                </Grid>
                <Grid item xs={4}>
                    <Typography variant="caption" className="Scores">
                        {equals===null?0:equals}
                    </Typography>
                </Grid>
                <Grid item xs={4}>
                    <Typography variant="caption" className="Scores">
                        {loss===null?0:loss}
                    </Typography>
                </Grid>
            </Grid>

        </Aux>
    );

    return (
        <Snackbar
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
            }}
            open={open}
            ContentProps={{
                'aria-describedby': 'message-id',
            }}
            message={score}
            action={action}
        />
    );
};

scorecard.propTypes = {
    open: PropTypes.func,
    onClose: PropTypes.func,
    clearScore: PropTypes.func
};


export default scorecard;