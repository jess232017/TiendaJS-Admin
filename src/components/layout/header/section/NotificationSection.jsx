import React, { useState } from 'react';

import { styled } from '@mui/system';

import PerfectScrollbar from 'react-perfect-scrollbar';

//mui
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import Chip from '@mui/material/Chip';
import Fade from '@mui/material/Fade';
import Grid from '@mui/material/Grid';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import Badge from '@mui/material/Badge';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Popper from '@mui/material/Popper';
import Avatar from '@mui/material/Avatar';
import Switch from '@mui/material/Switch';
import ListItem from '@mui/material/ListItem';
import FormGroup from '@mui/material/FormGroup';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import FormControlLabel from '@mui/material/FormControlLabel';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import ListItemSecondaryAction from '@mui/material/ListItemSecondaryAction ';

import CheckIcon from '@mui/icons-material/Check';
import MarkChatReadIcon from '@mui/icons-material/MarkChatRead';
import QueryBuilderTwoToneIcon from '@mui/icons-material/QueryBuilderTwoTone';
import NotificationsIcon from '@mui/icons-material/NotificationsNoneTwoTone';

const ListAction = styled(ListItemSecondaryAction)({
    top: '22px',
});

const ActionIcon = styled(QueryBuilderTwoToneIcon)(({ theme }) => ({
    fontSize: '0.75rem',
    marginRight: '4px',
    color: theme.palette.grey[400],
}));

const ActionColor = styled(Typography)(({ theme }) => ({
    color: theme.palette.grey[400],
}));

const NotificationSection = () => {
    const [showUnreadOnly, setShowUnreadOnly] = useState(true);
    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef(null);

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const handleClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }
        setOpen(false);
    };
    const toggleFilter = (e) => {
        setShowUnreadOnly(!showUnreadOnly);
    };

    const prevOpen = React.useRef(open);
    React.useEffect(() => {
        if (prevOpen.current === true && open === false) {
            anchorRef.current.focus();
        }
        prevOpen.current = open;
    }, [open]);

    const addNotification = () => {};

    return (
        <React.Fragment>
            <Button
                ref={anchorRef}
                sx={{ minWidth: { xs: '35px', sm: '50px', md: '65px' } }}
                aria-controls={open ? 'menu-list-grow' : undefined}
                aria-haspopup="true"
                onClick={handleToggle}
                color="inherit"
            >
                <Badge badgeContent={0} color="primary">
                    <NotificationsIcon sx={{ fontSize: '1.5rem' }} />
                </Badge>
            </Button>
            <Popper
                open={open}
                disablePortal={true}
                placement="bottom-end"
                anchorEl={anchorRef.current}
                role={undefined}
                transition
                popperOptions={{
                    modifiers: [
                        {
                            name: 'Notificacion',
                            enabled: true,
                            phase: 'main',
                            options: {
                                offset: {
                                    enable: true,
                                    offset: '0px, 10px',
                                },
                                preventOverflow: {
                                    padding: 0,
                                },
                            },
                            fn({ state }) {
                                if (state.placement === 'top') {
                                    console.log('Popper is on the top');
                                }
                            },
                        },
                    ],
                }}
            >
                {({ TransitionProps, placement }) => (
                    <Fade {...TransitionProps}>
                        <Paper sx={{ borderTopLeftRadius: 0, borderTopRightRadius: 0, width: 'min(60ch, 100ch)' }}>
                            <ClickAwayListener onClickAway={handleClose}>
                                <Box>
                                    <Box
                                        sx={{
                                            background: '#6665',
                                            padding: '8px',
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                            alignItems: 'center',
                                        }}
                                    >
                                        <Typography variant="h5">Centro de notificaciones</Typography>
                                        <FormGroup>
                                            <FormControlLabel
                                                control={<Switch color="secondary" onChange={toggleFilter} checked={showUnreadOnly} />}
                                                label="Ver leidas"
                                            />
                                        </FormGroup>
                                    </Box>
                                    <PerfectScrollbar style={{ height: '320px', overflowX: 'hidden' }}>
                                        <Stack
                                            sx={{
                                                height: '400px',
                                                padding: '12px',
                                            }}
                                            spacing={2}
                                        ></Stack>

                                        <List>
                                            <ListSubheader disableSticky>
                                                <Chip size="small" color="primary" label="New" />
                                            </ListSubheader>
                                            <ListItem button alignItems="flex-start" sx={{ paddingTop: 0 }}>
                                                <ListItemAvatar>
                                                    <Avatar alt="John Doe" />
                                                </ListItemAvatar>
                                                <ListItemText
                                                    primary={<Typography variant="subtitle1">John Doe</Typography>}
                                                    secondary={<Typography variant="subtitle2">New ticket Added</Typography>}
                                                />
                                                <ListAction>
                                                    <Grid container justify="flex-end">
                                                        <Grid item>
                                                            <ActionIcon />
                                                        </Grid>
                                                        <Grid item>
                                                            <ActionColor variant="caption" display="block" gutterBottom>
                                                                now
                                                            </ActionColor>
                                                        </Grid>
                                                    </Grid>
                                                </ListAction>
                                            </ListItem>
                                            <ListSubheader disableSticky>
                                                <Chip size="small" variant="outlined" label="EARLIER" />
                                            </ListSubheader>
                                            <ListItem button alignItems="flex-start" sx={{ paddingTop: 0 }}>
                                                <ListItemAvatar>
                                                    <Avatar alt="Joseph William" />
                                                </ListItemAvatar>
                                                <ListItemText
                                                    primary={<Typography variant="subtitle1">Joseph William</Typography>}
                                                    secondary={<Typography variant="subtitle2">Purchase a new product</Typography>}
                                                />
                                                <ListAction>
                                                    <Grid container justify="flex-end">
                                                        <Grid item>
                                                            <ActionIcon />
                                                        </Grid>
                                                        <Grid item>
                                                            <ActionColor variant="caption" display="block" gutterBottom>
                                                                10 min
                                                            </ActionColor>
                                                        </Grid>
                                                    </Grid>
                                                </ListAction>
                                            </ListItem>
                                        </List>
                                    </PerfectScrollbar>
                                    <Box
                                        sx={{
                                            background: '#666',
                                            padding: '8px',
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                            alignItems: 'center',
                                        }}
                                    >
                                        <Button variant="contained">Limpiar todo</Button>

                                        <Button variant="contained">Marcar como leidos</Button>
                                    </Box>
                                </Box>
                            </ClickAwayListener>
                        </Paper>
                    </Fade>
                )}
            </Popper>
        </React.Fragment>
    );
};

export default NotificationSection;
