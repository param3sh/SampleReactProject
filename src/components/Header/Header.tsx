import React from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Login from '../../containers/Login/Login';
import Button from '@mui/material/Button';
import Popover from '@mui/material/Popover';

function Header(props: { updatePage: any }) {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event: any) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const updatePage = () => {
        props.updatePage("search")
    }

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return(
        <div className="header-component">
            <div id="title-header" className="header-title" onClick={updatePage}>
                Coding Challenge
            </div>
            <Button aria-describedby={id} variant="contained" onClick={handleClick} className="header-login">
                <AccountCircleIcon/>
            </Button>
            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal:'right'
                }}
            >
                <Login />
            </Popover>
            
        </div>    
    );
}

export default Header;