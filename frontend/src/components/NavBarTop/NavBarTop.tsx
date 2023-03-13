import * as React from 'react';
import i18next from 'i18next';
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import {
  IconButton,
  AppBar,
  Typography,
  Box,
  Toolbar,
  Menu,
  MenuItem,
  ListItem,
  ListItemText,
  Link as LinkMui,
  Avatar,
} from '@mui/material';
import SvgIcon from '@mui/material/SvgIcon';
import Collapse from '@mui/material/Collapse';
import { MoreVert as MoreIcon } from '@mui/icons-material';
import Divider from '@mui/material/Divider';
import GavelIcon from '@mui/icons-material/Gavel';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import PersonIcon from '@mui/icons-material/Person';
import PublicRoundedIcon from '@mui/icons-material/PublicRounded';
import HelpRoundedIcon from '@mui/icons-material/HelpRounded';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ErrorRoundedIcon from '@mui/icons-material/ErrorRounded';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import BrightnessMediumIcon from '@mui/icons-material/BrightnessMedium';
import PaletteIcon from '@mui/icons-material/Palette';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import axios from 'axios';
import { SearchBar } from './SearchBar/SearchBar';
import './NavBarTop.scss';
import { NotificationMenu } from '../NotificationMenu/NotificationMenu';
import { ReactComponent as MenuIcon } from '../../assets/scalable/menu.svg';
import { ReactComponent as PeopleIcon } from '../../assets/scalable/people.svg';
import { ReactComponent as NantralIcon } from '../../assets/logo/scalable/logo.svg';
import EditSuggestionModal from '../../pages/Suggestion/Suggestion';
import { Suggestion } from '../../pages/Suggestion/interfacesSuggestion';
/**
 * The top bar for navigation
 *
 * @param props Component Properties
 * @param {boolean} props.menuOpen - A boolean to indicate if the lateral menu
 * is open or not.
 * @params props.setMenuOpen - A function to change the state of the menu.
 * @returns The top bar component
 */
function NavBarTop(props: {
  menuOpen: boolean;
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  themeApp: boolean;
  setThemeApp: React.Dispatch<React.SetStateAction<boolean>>;
  isAutomatic: boolean;
  setIsAutomatic: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const {
    menuOpen,
    setMenuOpen,
    themeApp,
    setThemeApp,
    isAutomatic,
    setIsAutomatic,
  } = props;

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [anchorElLangue, setAnchorElLangue] =
    React.useState<null | HTMLElement>(null);
  const [anchorElDark, setAnchorElDark] = React.useState<null | HTMLElement>(
    null
  );
  const [loggedId, setLoggedId] = React.useState<string>();
  const [isProfilePicture, setIsProfilePicture] =
    React.useState<boolean>(false);
  const [student, setStudent] = React.useState();
  const open = Boolean(anchorEl);
  const openL = Boolean(anchorElLangue);
  const openD = Boolean(anchorElDark);
  const spanRef = React.useRef();
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClickL = () => {
    setAnchorElLangue(spanRef.current);
    setAnchorEl(null);
  };
  const handleCloseL = () => {
    setAnchorElLangue(null);
    setAnchorEl(spanRef.current);
  };
  const handleCloseLAll = () => {
    setAnchorElLangue(null);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClickD = () => {
    setAnchorElDark(spanRef.current);
    setAnchorEl(null);
  };
  const handleCloseD = () => {
    setAnchorElDark(null);
    setAnchorEl(spanRef.current);
  };
  const handleCloseDAll = () => {
    setAnchorElDark(null);
  };

  const [openS, setOpenS] = React.useState(false);

  const handleClickOpen = () => {
    setOpenS(true);
  };

  const handleCloseS = () => {
    setOpenS(false);
  };

  const isOnBackend = true;

  const { t } = useTranslation('translation');

  const breadcrumbNameMap: { [key: string]: string } = {
    '/home/': t('navbar.home'),
    '/event/': t('navbar.events'),
    '/club/': t('navbar.clubs'),
    '/colocs/': t('navbar.flatshare'),
    '/parrainage/': t('navbar.family'),
    '/liste/': t('navbar.bdx'),
    '/academics/': t('navbar.academics'),
    '/administration/': t('navbar.administration'),
    '/student/': t('navbar.student'),
    '/tools/signature': t('navbar.signature'),
    '/suggestions/': 'Bug',
    '/legal_mentions/': 'Legal',
  };
  const location = useLocation();
  const pathnames = ('/home' + location.pathname).split('/').filter((x) => x);

  React.useEffect(() => {
    getLoggedUser();
  }, []);

  async function getLoggedUser() {
    axios
      .get('/api/student/student/me/')
      .then((res) => {
        setLoggedId(res.data.id.toString());
        setIsProfilePicture(res.data.picture !== null);
        setStudent(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  async function createSuggestion(suggestion: Suggestion) {
    return axios.post('/api/suggestion', suggestion);
  }

  return (
    <AppBar position="fixed" color="secondary">
      <Toolbar>
        <IconButton
          color="inherit"
          onClick={() => setMenuOpen(!menuOpen)}
          size="large"
          edge="start"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <SvgIcon component={MenuIcon} inheritViewBox />
        </IconButton>
        <SvgIcon
          sx={{ display: { xs: 'none', md: 'flex' } }}
          component={NantralIcon}
          inheritViewBox
        />
        <Box sx={{ flexGrow: 0.02 }} />
        <Breadcrumbs
          aria-label="breadcrumb"
          separator={<NavigateNextIcon fontSize="small" />}
        >
          <LinkMui
            variant="h6"
            component={Link}
            to="/"
            color="textPrimary"
            underline="hover"
            sx={{ display: { xs: 'none', md: 'flex' } }}
          >
            Nantral Platform
          </LinkMui>
          {pathnames.map((value, index) => {
            const last = index === pathnames.length - 1;
            const to = (index == 0) ? '/home/' : `/${pathnames.slice(1, index + 1)}/`;
            
            return last ? (
              <Typography key={to} variant="h6">
                {breadcrumbNameMap[to]}
              </Typography>
            ) : (
              <LinkMui
                component={Link}
                underline="hover"
                color="textPrimary"
                to = {(to === '/home/') ? '/' : to}
                key={to}
                variant="h6"
              >
                {breadcrumbNameMap[to]}
              </LinkMui>
            );
          })}
        </Breadcrumbs>
        <Box sx={{ flexGrow: 0.9 }} />
        <Box sx={{ flexGrow: 1.0 }} />
        <Box sx={{ display: 'flex' }}>
          <NotificationMenu />
          <IconButton
            size="large"
            edge="end"
            aria-label="account of current user"
            aria-haspopup="true"
            color="inherit"
            onClick={handleClick}
            component="span"
            ref={spanRef}
          >
            {!isProfilePicture ? (
              <SvgIcon component={PeopleIcon} inheritViewBox />
            ) : (
              <Avatar alt="profile" src={student.picture} />
            )}
          </IconButton>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{ 'aria-labelledby': 'basic-button' }}
            TransitionComponent={Collapse}
            PaperProps={{
              style: {
                width: 195,
              },
            }}
          >
            <MenuItem onClick={handleClose}>
              <SvgIcon component={PersonIcon} />
              <ListItem
                component={Link}
                to={`/student/${loggedId}`}
                className="menuItem"
                disablePadding
                sx={{
                  color: 'text.primary',
                }}
              >
                {t('user_menu.profile')}
              </ListItem>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <SvgIcon component={LogoutRoundedIcon} />
              <ListItem
                component={Link}
                to="/logout/"
                className="menuItem"
                disablePadding
                sx={{
                  color: 'text.primary',
                }}
              >
                {t('user_menu.logout')}
              </ListItem>
            </MenuItem>
            <Divider />
            <MenuItem onClick={handleClickOpen}>
              <SvgIcon component={ErrorRoundedIcon} />
              <ListItem
                className="menuItem"
                disablePadding
                sx={{
                  color: 'text.primary',
                }}
              >
                {t('user_menu.bug')}
              </ListItem>
            </MenuItem>
            <EditSuggestionModal
              open={openS}
              closeModal={handleCloseS}
              saveSuggestion={createSuggestion}
            />
            <MenuItem onClick={handleClose}>
              <SvgIcon component={HelpRoundedIcon} />
              <ListItem
                key={t('user_menu.doc')}
                component={Link}
                to="https://docs.nantral-platform.fr/"
                className="menuItem"
                disablePadding
                sx={{
                  color: 'text.primary',
                }}
              >
                {t('user_menu.doc')}
              </ListItem>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <SvgIcon component={GavelIcon} />
              <ListItem
                component={Link}
                to="/legal-notice/"
                className="menuItem"
                disablePadding
                sx={{
                  color: 'text.primary',
                }}
              >
                {t('user_menu.legal')}
              </ListItem>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <SvgIcon component={AdminPanelSettingsIcon} />
              <ListItem
                component={Link}
                to="/admin/"
                className="menuItem"
                disablePadding
                reloadDocument={isOnBackend}
                sx={{
                  color: 'text.primary',
                }}
              >
                {t('user_menu.admin')}
              </ListItem>
            </MenuItem>
            <MenuItem onClick={handleClickL}>
              <SvgIcon component={PublicRoundedIcon} />
              <ListItemText className="menuItem">
                {t('user_menu.language')}
              </ListItemText>
            </MenuItem>
            <Divider />
            <MenuItem onClick={handleClickD}>
              <SvgIcon component={PaletteIcon} />
              <ListItemText className="menuItem">
                {t('user_menu.theme')}
              </ListItemText>
            </MenuItem>
          </Menu>
          <Menu
            id="basic-menu"
            anchorEl={anchorElLangue}
            open={openL}
            onClose={handleCloseLAll}
            MenuListProps={{ 'aria-labelledby': 'basic-button' }}
            TransitionComponent={Collapse}
            PaperProps={{
              style: {
                width: 195,
              },
            }}
          >
            <ListItem>
              <IconButton
                aria-label="account of current user"
                aria-haspopup="true"
                color="inherit"
                onClick={handleCloseL}
              >
                <SvgIcon component={ArrowBackIcon} inheritViewBox />
              </IconButton>
              <Typography className="menuTitle" variant="h6">
                {t('user_menu.title_language')}
              </Typography>
            </ListItem>
            <MenuItem
              value="fr-FR"
              onClick={() => {
                i18next.changeLanguage('fr-FR');
              }}
              selected={i18next.language === 'fr-FR'}
            >
              Français
            </MenuItem>
            <MenuItem
              value="en-GB"
              onClick={() => {
                i18next.changeLanguage('en-GB');
              }}
              selected={i18next.language === 'en-GB'}
            >
              English
            </MenuItem>
          </Menu>
          <Menu
            id="menu-dark-mode"
            anchorEl={anchorElDark}
            open={openD}
            onClose={handleCloseDAll}
            MenuListProps={{ 'aria-labelledby': 'basic-button' }}
            TransitionComponent={Collapse}
            PaperProps={{
              style: {
                width: 195,
              },
            }}
          >
            <ListItem>
              <IconButton
                aria-label="account of current user"
                aria-haspopup="true"
                color="inherit"
                onClick={handleCloseD}
              >
                <SvgIcon component={ArrowBackIcon} inheritViewBox />
              </IconButton>
              <Typography className="menuTitle" variant="h6">
                {t('user_menu.title_theme')}
              </Typography>
            </ListItem>
            <MenuItem
              onClick={() => {
                setThemeApp(true);
                setIsAutomatic(false);
                localStorage.setItem('theme-auto', JSON.stringify(false));
                localStorage.setItem('theme-mode', JSON.stringify(true));
              }}
              selected={themeApp === true && isAutomatic === false}
            >
              <SvgIcon component={Brightness7Icon} />
              <ListItemText className="menuItem">
                {t('user_menu.light')}
              </ListItemText>
            </MenuItem>
            <MenuItem
              onClick={() => {
                setThemeApp(false);
                setIsAutomatic(false);
                localStorage.setItem('theme-auto', JSON.stringify(false));
                localStorage.setItem('theme-mode', JSON.stringify(false));
              }}
              selected={themeApp === false && isAutomatic === false}
            >
              <SvgIcon component={Brightness4Icon} />
              <ListItemText className="menuItem">
                {t('user_menu.dark')}
              </ListItemText>
            </MenuItem>
            <MenuItem
              onClick={() => {
                setIsAutomatic(true);
                localStorage.setItem('theme-auto', JSON.stringify(true));
              }}
              selected={isAutomatic === true}
            >
              <SvgIcon component={BrightnessMediumIcon} />
              <ListItemText className="menuItem">
                {t('user_menu.automatic')}
              </ListItemText>
            </MenuItem>
          </Menu>
        </Box>
        <Box sx={{ display: { xs: 'none', md: 'none' } }}>
          <IconButton
            size="large"
            aria-label="show more"
            aria-haspopup="true"
            color="inherit"
          >
            <MoreIcon />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default NavBarTop;
