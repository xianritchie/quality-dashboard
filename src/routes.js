
// @material-ui/icons
import DashboardRoundedIcon from '@material-ui/icons/DashboardRounded';
import SimCardRoundedIcon from '@material-ui/icons/SimCardRounded';
import WorkRoundedIcon from '@material-ui/icons/WorkRounded';
import AssessmentRoundedIcon from '@material-ui/icons/AssessmentRounded';
import SettingsApplicationsRoundedIcon from '@material-ui/icons/SettingsApplicationsRounded';
import ExitToAppRoundedIcon from '@material-ui/icons/ExitToAppRounded';

// Pages
import Dashboard from './pages/Dashboard';
import SimManagement from './pages/SimManagement';
import Performance from './pages/Performance';
import Settings from './pages/Settings';
import Solutions from './pages/Solutions';
import Signout from './pages/Signout';

const routes = [
    {
        label: 'Dashboard',
        path: '/dashboard',
        icon: (<DashboardRoundedIcon />),
        activeIcon: (<DashboardRoundedIcon />),
        component: Dashboard
    },
    {
        label: 'Solutions',
        path: '/solutions',
        icon:  (<WorkRoundedIcon />),
        activeIcon: (<WorkRoundedIcon />),
        component: Solutions
    },
    {
        label: 'Performance',
        path: '/performance',
        icon: (<AssessmentRoundedIcon />),
        activeIcon: (<AssessmentRoundedIcon />),
        component: Performance
    },
    {
        label: 'Sim Management',
        path: '/sim-management',
        icon: (<SimCardRoundedIcon />),
        activeIcon: (<SimCardRoundedIcon />),
        component: SimManagement
    },
    {
        label: 'Settings',
        path: '/settings',
        icon: (<SettingsApplicationsRoundedIcon />),
        activeIcon: (<SettingsApplicationsRoundedIcon />),
        component: Settings
    },
    {
        label: 'Sign Out',
        path: '/signout',
        icon: (<ExitToAppRoundedIcon />),
        activeIcon: (<ExitToAppRoundedIcon />),
        component: Signout
    }
];

export default routes;