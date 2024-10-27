import * as React from 'react'
import Slide from '@mui/material/Slide'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import TimeSelection from './TimeSelection'


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const PickerTime = () => {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <Button variant="outlined" onClick={handleClickOpen}>
                😊 בחרי בשעה הנוחה לך
            </Button>

            <Dialog
                open={open}
                TransitionComponent={Transition}
                onClose={handleClose}
            >
                <DialogContent>
                    <TimeSelection />
                </DialogContent>

                <DialogActions>
                    <Button onClick={handleClose}>לשריין את השעה</Button>
                    <Button onClick={handleClose}>בטל</Button>
                </DialogActions>
            </Dialog>
        </>
    );
}

export default PickerTime