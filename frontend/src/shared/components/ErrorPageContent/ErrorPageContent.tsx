import { Link } from 'react-router-dom';

import {
  BugReport as BugReportIcon,
  Home as HomeIcon,
  Replay as ReplayIcon,
} from '@mui/icons-material';
import { Button, Container, Typography } from '@mui/material';

import { useTranslation } from '#shared/i18n/useTranslation';

import { FlexCol, FlexRow } from '../FlexBox/FlexBox';

type ErrorPageContentProps = {
  status?: number;
  retryFn: () => void;
} & (
  | { message: string; errorMessage?: never }
  | { errorMessage: string; message?: never }
);

export function ErrorPageContent({
  status,
  message,
  errorMessage,
  retryFn,
}: ErrorPageContentProps) {
  const { t } = useTranslation();

  return (
    <Container>
      <FlexCol alignItems="center" gap={4} my={8}>
        <Typography variant="h1" fontSize={[100, '!important']}>
          {status || t('error.oups')}
        </Typography>
        <Typography textAlign="center">
          {errorMessage ? t('error.errorMessage', { errorMessage }) : message}
        </Typography>
        <Button onClick={retryFn} endIcon={<ReplayIcon />} variant="contained">
          {t('error.retry')}
        </Button>
        <FlexRow justifyContent="center" gap={1} flexWrap="wrap">
          <Button
            component={Link}
            to="/"
            startIcon={<HomeIcon />}
            color="secondary"
          >
            {t('error.goToHome')}
          </Button>
          <Button
            component={Link}
            to="/feedback"
            startIcon={<BugReportIcon />}
            color="secondary"
          >
            {t('error.feedback')}
          </Button>
        </FlexRow>
      </FlexCol>
    </Container>
  );
}
