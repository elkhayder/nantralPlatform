import {
  PeopleAlt as PeopleIcon,
  AddCircle as PlusIcon,
  CheckCircle as CheckIcon,
  LinkOutlined as LinkIcon,
  LocalFireDepartment as ShotgunIcon,
  Cancel as Cross,
} from '@mui/icons-material';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
  Theme,
  SxProps,
  CircularProgress,
} from '@mui/material';
import axios from 'axios';
import * as React from 'react';
import { useTranslation } from 'react-i18next';

interface JoinButtonProps {
  variant?: 'shotgun' | 'normal' | 'form';
  link?: string;
  maxPerson?: number;
  shotgunClosed?: boolean;
  person: number;
  sx?: SxProps<Theme>;
  participating: boolean;
  eventSlug: string;
}

function JoinButton({
  variant,
  link,
  maxPerson,
  person,
  shotgunClosed,
  sx,
  participating,
  eventSlug,
}: JoinButtonProps): JSX.Element {
  const [selected, setSelected] = React.useState(participating);
  const [people, setPeople] = React.useState(person);
  const [open, setOpen] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const { t } = useTranslation('translation');

  const participate = async () => {
    try {
      const response = await axios.post(`api/event/${eventSlug}/participate`);
      if (response.data.success) {
        setPeople(people + 1);
        setSelected(true);
      } else {
        console.error('could not subscribe to event');
      }
    } catch (error) {
      console.error('could not subscribe to event');
    }
    setLoading(false);
  };

  const quit = async () => {
    try {
      const response: any = await axios.delete(
        `api/event/${eventSlug}/participate`
      );
      if (response.data.success) {
        setSelected(false);
        setPeople(people - 1);
      } else {
        console.error('could not unsuscribe from event');
      }
    } catch (error) {
      console.error('could not unsuscribe from event');
    }
    setLoading(false);
  };

  const handleClose = (unsuscribe: boolean) => {
    setOpen(false);
    if (unsuscribe) {
      setLoading(true);
      quit();
    }
  };
  const onClick = () => {
    switch (variant) {
      case 'normal':
        if (selected) {
          setOpen(true);
        } else {
          setLoading(true);
          participate();
        }
        break;
      case 'shotgun':
        if ((person >= maxPerson || shotgunClosed) && !selected) return;
        if (selected) {
          setOpen(true);
        } else {
          setLoading(true);
          participate();
        }
        break;
      case 'form':
        window.open(link, '_blank');
        break;
      default:
    }
  };

  const getFirstIcon = () => {
    switch (variant) {
      case 'shotgun':
        return <ShotgunIcon />;
      case 'form':
        return <LinkIcon />;
      default:
        return <PeopleIcon />;
    }
  };
  const getSecondIcon = () => {
    if (variant === 'normal') return selected ? <CheckIcon /> : <PlusIcon />;
    if (variant === 'shotgun') {
      if ((person >= maxPerson || shotgunClosed) && !selected) return <Cross />;
      if (selected) return <CheckIcon />;
      return selected ? <CheckIcon /> : <PlusIcon />;
    }
    return null;
  };
  const getText = () => {
    switch (variant) {
      case 'normal':
        return people;
      case 'shotgun':
        return `${people}/${maxPerson}`;
      case 'form':
        return t('button.joinButton.register');
      default:
        return people;
    }
  };
  let color:
    | 'inherit'
    | 'primary'
    | 'secondary'
    | 'success'
    | 'error'
    | 'info'
    | 'warning';
  if ((people >= maxPerson || shotgunClosed) && variant === 'shotgun') {
    color = 'error';
  } else if (selected) {
    color = 'success';
  } else {
    color = 'info';
  }
  return (
    <>
      <Button
        disabled={loading}
        onClick={() => onClick()}
        variant="contained"
        startIcon={getFirstIcon()}
        color={color}
        endIcon={getSecondIcon()}
        sx={sx}
        title="test"
      >
        {getText()}
        {loading && (
          <CircularProgress size={25} style={{ position: 'absolute' }} />
        )}
      </Button>
      <Dialog
        open={open}
        onClose={() => handleClose(false)}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">Se désinscrire ?</DialogTitle>
        <DialogContent>
          <DialogContentText>{t('button.joinButton.title')}</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={() => handleClose(false)}>
            Annuler
          </Button>
          <Button
            onClick={() => handleClose(true)}
            autoFocus
            variant="contained"
          >
            Se désinscrire
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

JoinButton.defaultProps = {
  variant: 'normal',
  link: '',
  maxPerson: 0,
  shotgunClosed: false,
  sx: {},
};

export default JoinButton;
