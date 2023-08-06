import { useMemo, useState } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Route, Routes } from 'react-router-dom';

import { Box, CssBaseline, PaletteMode, Toolbar } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

import EventPage from '#pages/Event/Event.page';
import { Calendar } from '#pages/Event/EventCalendar/Calendar';
import EventGridViewPage from '#pages/Event/EventGrid/EventGridView.page';
import EventDetailsPage from '#pages/EventDetails/EventDetails.page';
import GroupPage from '#pages/Group/Group.page';
import HomePage from '#pages/Home/Home.page';
import LegalNoticePage from '#pages/LegalNotice/Legal.page';
import NotFoundPage from '#pages/NotFound/NotFound.page';
import ProfilePage from '#pages/Profile/Profile.page';
import StudentPage from '#pages/Student/Student.page';
import { ErrorPageContent } from '#shared/components/ErrorPageContent/ErrorPageContent';
import NavBarSide from '#shared/components/NavBarSide/NavBarSide';
import NavBarTop from '#shared/components/NavBarTop/NavBarTop';
import { ScrollToTop } from '#shared/components/ScrollToTop/ScrollToTop';
import { ToastProvider } from '#shared/context/Toast.context';
import { useTranslation } from '#shared/i18n/useTranslation';

import getTheme from './theme';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60, // time before refetching the server: 1min
      cacheTime: 1000 * 60 * 60 * 24 * 7, // time before erasing the cached data: 1 week
      retry: 1,
      retryDelay: 1000,
    },
  },
});

const getPreferredMode = (): PaletteMode | 'auto' => {
  const cachedMode = localStorage.getItem('theme-mode');
  switch (cachedMode) {
    case 'dark':
      return 'dark';
    case 'light':
      return 'light';
    default:
      return 'auto';
  }
};

/**
 * Main component of the application. It is composed of:
 * - the top navbar
 * - the lateral navbar
 * - the route component (where we decide which component to show according to the path in the url)
 * @returns The App Component
 */
function App() {
  const { t, i18n } = useTranslation();
  const [preferredMode, setPreferredMode] = useState<PaletteMode | 'auto'>(
    getPreferredMode()
  );
  const systemMode = useMediaQuery('(prefers-color-scheme: dark)')
    ? 'dark'
    : 'light';
  const theme = useMemo(
    () =>
      getTheme(
        preferredMode === 'auto' ? systemMode : preferredMode,
        i18n.language
      ),
    [preferredMode, systemMode, i18n.language]
  );

  const [menuOpen, setMenuOpen] = useState(false);
  const drawerWidth = 240; // the width of the lateral navbar
  const sideBarVariant =
    window.innerWidth < 2 * drawerWidth ? 'temporary' : 'persistent';

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <ErrorBoundary
          fallback={
            <ErrorPageContent
              retryFn={() => window.location.reload()}
              message={t('error.unexpected')}
              reloadDocument
            />
          }
        >
          <ToastProvider>
            <Box
              sx={{ display: 'flex' }}
              className={`global-${theme.palette.mode}-theme`}
            >
              <CssBaseline />
              <NavBarTop
                menuOpen={menuOpen}
                setMenuOpen={setMenuOpen}
                colorMode={preferredMode}
                setColorMode={setPreferredMode}
              />
              <NavBarSide
                menuOpen={menuOpen}
                drawerWidth={drawerWidth}
                variant={sideBarVariant}
                onClose={() => setMenuOpen(false)}
              />
              <Box
                component="main"
                sx={{
                  flexGrow: 1,
                  width: '100%',
                  padding: 0,
                  paddingTop: 0,
                  transition: theme.transitions.create('margin', {
                    easing: theme.transitions.easing.sharp,
                    duration: theme.transitions.duration.leavingScreen,
                  }),
                  marginLeft:
                    sideBarVariant === 'persistent' ? `-${drawerWidth}px` : 0,
                  ...(menuOpen && {
                    transition: theme.transitions.create('margin', {
                      easing: theme.transitions.easing.easeOut,
                      duration: theme.transitions.duration.enteringScreen,
                    }),
                    marginLeft: 0,
                  }),
                }}
              >
                <Toolbar />
                <ScrollToTop />
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/group" element={<GroupPage />} />
                  <Route path="/event/" element={<EventPage />}>
                    <Route path="" element={<EventGridViewPage />} />
                    <Route path="calendar" element={<Calendar />} />
                  </Route>
                  <Route path="/event/:id" element={<EventDetailsPage />} />
                  <Route path="/student" element={<StudentPage />} />
                  <Route path="/legal-notice" element={<LegalNoticePage />} />
                  <Route path="/student/:studentId" element={<ProfilePage />} />
                  <Route path="*" element={<NotFoundPage />} />
                  {/* <Route path="/group/:groupTypeSlug" element={<GroupListPage />} /> */}
                </Routes>
              </Box>
            </Box>
          </ToastProvider>
        </ErrorBoundary>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
