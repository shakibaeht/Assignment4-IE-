import React from 'react';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import withMobileDialog from '@material-ui/core/withMobileDialog';
import Icon from '@material-ui/core/Icon';
import './Modal.css';

const modaldialog = (props) => {

    const {open, text, onClose} = props;

    let icon;
    if(text.includes('Won'))
        icon = 'mood';
    else if(text.includes('Lost'))
        icon = 'mood_bad';
    else
        icon = 'sentiment_dissatisfied';

    return (
        <Dialog
            disableBackdropClick
            disableEscapeKeyDown
            open={open}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            >
            <DialogContent className="Dialog">
                <Icon
                    className="Icon"
                    style={{fontSize: 65}}>
                    {icon}
                </Icon>
                <DialogContentText className="Content">
                    {text}
                </DialogContentText>
            </DialogContent> 
            <DialogActions>
                <Button
                    onClick={onClose}
                    color="secondary"
                    autoFocus>
                        Again
                    </Button>
            </DialogActions> 
        </Dialog>
    )
};
modaldialog.propTypes = {
  open: PropTypes.func,
  onClose: PropTypes.func,
  text: PropTypes.string
};
export default withMobileDialog()(modaldialog);