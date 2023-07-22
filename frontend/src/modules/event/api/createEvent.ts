import axios, { AxiosResponse } from 'axios';

import { ApiFormErrorDTO, adaptApiFormErrors } from '#shared/infra/errors';

import { EventForm } from '../event.type';
import { adaptEvent } from '../infra/event.adapter';
import { convertEventForm } from '../infra/event.converter';
import { EventDTO, EventFormDTO } from '../infra/event.dto';

export async function createEvent(formData: EventForm) {
  const { data } = await axios
    .postForm<EventFormDTO, AxiosResponse<EventDTO>>(
      '/api/event/event/',
      convertEventForm(formData)
    )
    .catch((err: ApiFormErrorDTO<EventFormDTO>) => {
      throw adaptApiFormErrors(err);
    });
  return adaptEvent(data);
}
