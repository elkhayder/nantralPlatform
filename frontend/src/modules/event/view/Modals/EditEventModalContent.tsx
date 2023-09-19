import { FormEvent, useState } from 'react';
import { useMutation, useQueryClient } from 'react-query';

import { Edit as EditIcon } from '@mui/icons-material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Avatar, Button, useTheme, Menu, MenuItem } from '@mui/material';

import {
  UpdateEventApiVariables,
  updateEventApi,
} from '#modules/event/api/updateEvent.api';
import { Event, EventForm } from '#modules/event/event.type';
import { EventFormDTO } from '#modules/event/infra/event.dto';
import { LoadingButton } from '#shared/components/LoadingButton/LoadingButton';
import {
  ResponsiveDialogContent,
  ResponsiveDialogFooter,
  ResponsiveDialogHeader,
} from '#shared/components/ResponsiveDialog';
import { Spacer } from '#shared/components/Spacer/Spacer';
import { useObjectState } from '#shared/hooks/useObjectState';
import { languages_without_locales } from '#shared/i18n/config';
import { useTranslation } from '#shared/i18n/useTranslation';
import { ApiFormError } from '#shared/infra/errors';
import { getNativeLanguageName } from '#shared/utils/getNativeLanguageName';

import { EventFormFields } from '../shared/EventFormFields';

type EditEventModalContentProps = {
  event: Event;
  onClose: () => void;
};

export function EditEventModalContent({
  event,
  onClose,
}: EditEventModalContentProps) {
  const { t, i18n } = useTranslation();
  const queryClient = useQueryClient();
  const { palette } = useTheme();

  // the values currently in our form
  const formTranslatedValues: EventForm = {};

  for (const lang of languages_without_locales) {
    formTranslatedValues[`title_${lang}`] = event[`title_${lang}`];
    formTranslatedValues[`description_${lang}`] = event[`description_${lang}`];
  }
  const [formValues, updateFormValues] = useObjectState<EventForm>({
    title: event.title,
    description: event.description,
    ...formTranslatedValues,
    group: event.group.id,
    publicity: event.publicity,
    location: event.location,
    image: undefined,
    startDate: event.startDate,
    endDate: event.endDate,
    startRegistration: event.startRegistration,
    endRegistration: event.endRegistration,
    maxParticipant: event.maxParticipant,
    formUrl: event.formUrl,
  });

  // create all states for error, loading, etc. while fetching the API
  const { mutate, isLoading, isError, error } = useMutation<
    void,
    ApiFormError<EventFormDTO>,
    UpdateEventApiVariables
  >(updateEventApi);

  // send the form to the server
  const onSubmit = (e: FormEvent, values: EventForm) => {
    // prevent the default function of <form>
    e.preventDefault();
    // call the updatePost function
    mutate(
      { id: event.id, data: values },
      {
        onSuccess: () => {
          // if success, reset the event data in all queries
          queryClient.invalidateQueries('events');
          queryClient.invalidateQueries(['event', { id: event.id }]);
          queryClient.invalidateQueries('notifications');
          // close the modal
          onClose();
        },
      }
    );
  };

  const [selectedLang, setSelectedLang] = useState(i18n.language.substr(0, 2));

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <ResponsiveDialogHeader
        onClose={onClose}
        leftIcon={
          <Avatar sx={{ bgcolor: palette.primary.main }}>
            <EditIcon />
          </Avatar>
        }
      >
        {t('event.editModal.title')}
        <Spacer flex={1} />
        <Button
          variant="outlined"
          disableElevation
          onClick={handleClick}
          endIcon={<KeyboardArrowDownIcon />}
        >
          {selectedLang}
        </Button>
        <Menu
          id="demo-customized-menu"
          MenuListProps={{
            'aria-labelledby': 'demo-customized-button',
          }}
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
        >
          {languages_without_locales.map((language) => (
            <MenuItem
              key={language}
              value={language}
              onClick={() => {
                setSelectedLang(language);
                handleClose();
              }}
            >
              {getNativeLanguageName(language)}
            </MenuItem>
          ))}
        </Menu>
      </ResponsiveDialogHeader>
      <form onSubmit={(e) => onSubmit(e, formValues)}>
        <ResponsiveDialogContent>
          <EventFormFields
            isError={isError}
            error={error}
            formValues={formValues}
            updateFormValues={updateFormValues}
            prevData={event}
            selectedLang={selectedLang}
          />
        </ResponsiveDialogContent>
        <ResponsiveDialogFooter>
          <Button variant="text" onClick={() => onClose()}>
            {t('button.cancel')}
          </Button>
          <LoadingButton loading={isLoading} type="submit" variant="contained">
            {t('button.confirm')}
          </LoadingButton>
        </ResponsiveDialogFooter>
      </form>
    </>
  );
}
