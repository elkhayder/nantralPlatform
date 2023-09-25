import { FormEvent, useState } from 'react';
import { useMutation, useQueryClient } from 'react-query';

import { Edit as EditIcon } from '@mui/icons-material';
import { Avatar, Button, useTheme } from '@mui/material';

import { createEventApi } from '#modules/event/api/createEvent.api';
import { Event, EventForm } from '#modules/event/event.type';
import { EventFormDTO } from '#modules/event/infra/event.dto';
import { LanguageSelector } from '#shared/components/LanguageSelector/LanguageSelector';
import { LoadingButton } from '#shared/components/LoadingButton/LoadingButton';
import {
  ResponsiveDialog,
  ResponsiveDialogContent,
  ResponsiveDialogFooter,
  ResponsiveDialogHeader,
} from '#shared/components/ResponsiveDialog';
import { Spacer } from '#shared/components/Spacer/Spacer';
import { useObjectState } from '#shared/hooks/useObjectState';
import { languages_without_locales } from '#shared/i18n/config';
import { useTranslation } from '#shared/i18n/useTranslation';
import { ApiFormError } from '#shared/infra/errors';

import { EventFormFields } from '../shared/EventFormFields';

type CreateEventModalProps = {
  onClose: () => void;
  onCreated?: (id?: number) => void;
};

export function CreateEventModal({
  onClose,
  onCreated = onClose,
}: CreateEventModalProps) {
  const { t, i18n } = useTranslation();
  const queryClient = useQueryClient();
  const { palette } = useTheme();

  // the values currently in our form

  const formTranslatedValues: EventForm = {};

  for (const lang of languages_without_locales) {
    formTranslatedValues[`title_${lang}`] = '';
    formTranslatedValues[`description_${lang}`] = '';
  }

  const [formValues, updateFormValues] = useObjectState<EventForm>({
    title: '',
    description: '',
    ...formTranslatedValues,
    group: null,
    publicity: 'Pub',
    location: '',
    image: undefined,
    startDate: null,
    endDate: null,
    startRegistration: null,
    endRegistration: null,
    maxParticipant: null,
    formUrl: '',
  });

  // create all states for error, loading, etc. while fetching the API
  const { mutate, isLoading, isError, error } = useMutation<
    Event,
    ApiFormError<EventFormDTO>,
    EventForm
  >(createEventApi);

  // send the form to the server
  const onSubmit = (e: FormEvent, values: EventForm) => {
    // prevent the default function of <form>
    e.preventDefault();
    // call the updatePost function
    mutate(values, {
      onSuccess: (data) => {
        // if success, reset the event data in all queries
        queryClient.invalidateQueries('events');
        queryClient.invalidateQueries('notifications');
        // close the modal
        onCreated(data.id);
      },
    });
  };

  const [selectedLang, setSelectedLang] = useState(i18n.language.substr(0, 2));

  return (
    <ResponsiveDialog onClose={onClose} disableEnforceFocus>
      <ResponsiveDialogHeader
        onClose={onClose}
        leftIcon={
          <Avatar sx={{ bgcolor: palette.primary.main }}>
            <EditIcon />
          </Avatar>
        }
      >
        {t('event.createModal.title')}
        <Spacer flex={1} />
        <LanguageSelector
          selectedLang={selectedLang}
          setSelectedLang={setSelectedLang}
        />
      </ResponsiveDialogHeader>
      <form onSubmit={(e) => onSubmit(e, formValues)}>
        <ResponsiveDialogContent>
          <EventFormFields
            isError={isError}
            error={error}
            formValues={formValues}
            updateFormValues={updateFormValues}
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
    </ResponsiveDialog>
  );
}
