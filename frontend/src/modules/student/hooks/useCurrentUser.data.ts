import { useQuery } from '@tanstack/react-query';

import { useToast } from '#shared/context/Toast.context';
import { ApiError } from '#shared/infra/errors';

import { getCurrentUserApi } from '../api/getCurrentUser.api';
import { Student } from '../student.types';

const emptyUser = {
  id: -1,
  name: 'Chargement...',
  promo: 1919,
  picture: '',
  faculty: '',
  path: '',
  url: '',
  staff: false,
};

export function useCurrentUserData() {
  const query = useQuery<Student, ApiError>({
    queryKey: ['student', 'current'],
    queryFn: ({ signal }) => getCurrentUserApi({ signal }),
  });

  const showToast = useToast();

  if (query.isError) {
    showToast({
      message: query.error.message,
      variant: 'error',
    });
  }

  return query.data || emptyUser;
}
