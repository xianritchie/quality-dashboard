import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    appRoot: {
        display: 'flex'
    },
    navigationLogo: {
        width: '50%',
        cursor: 'pointer',
    },
    navigationLogoContainer: {
        display: 'flex',
        justifyContent: 'center', 
        alignItems: 'center',
        paddingBottom: theme.spacing(3),
        paddingTop: theme.spacing(2)
    },
    navigationDrawer: {
        width: '250px',
        whiteSpace: 'nowrap',
        overflowX: 'hidden',
        position: 'relative',
        height: '100vh'
    },
    navigationDrawerCollapse: {
        width: theme.spacing(9)
    },
    navigationList: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        flex: '1',
        verticalAlign: 'middle',     
    },
    navigationSpacer: {
        flex: '1',
    },
    navigationToolbar: {
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingRight: theme.spacing(1),
        ...theme.mixins.toolbar,
    },
    navigationToolbarCollapse: {
        justifyContent: 'center',
        paddingRight: 0
    },
    menuItemIcon: {
        height: '24px',
        display: 'flex',
        padding: 0,
        margin: 1
    },
    menuItem: {
        width: '100%',
        borderRadius: 0,
        marginBottom: theme.spacing(1),
        '&:hover': {
            backgroundColor: 'rgba(41, 128, 185,0.5)'
        }
    },
    menutItemActive: {
        backgroundColor: '#02408a',
        color: '#fff'
    },
    activeIcon: {
        color: '#fff'
    }
}));

export default useStyles;