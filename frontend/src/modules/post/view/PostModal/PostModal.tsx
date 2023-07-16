import { useState } from 'react';

import { Alert, CircularProgress } from '@mui/material';

import { FlexRow } from '#shared/components/FlexBox/FlexBox';
import {
  ResponsiveDialog,
  ResponsiveDialogContent,
  ResponsiveDialogHeader,
} from '#shared/components/ResponsiveDialog';

import { usePostDetailsQuery } from '../../hooks/usePostDetails.query';
import { EditPostModalContent } from './EditPostModalContent';
import { ReadPostModalContent } from './ReadPostModalContent';

type PostModalProps = {
  postId: number;
  onClose: () => void;
};

export function PostModal({ postId, onClose }: PostModalProps) {
  const [editMode, setEditMode] = useState(false);

  const { post, isLoading, isError, error } = usePostDetailsQuery(postId);

  if (isLoading) {
    return (
      <ResponsiveDialog onClose={onClose}>
        <ResponsiveDialogHeader onClose={onClose}></ResponsiveDialogHeader>
        <FlexRow
          justifyContent="center"
          alignItems="center"
          sx={{ p: 9, pt: 0, height: '100%' }}
        >
          <CircularProgress />
        </FlexRow>
      </ResponsiveDialog>
    );
  }

  if (isError) {
    return (
      <ResponsiveDialog onClose={onClose}>
        <ResponsiveDialogHeader onClose={onClose}></ResponsiveDialogHeader>
        <ResponsiveDialogContent>
          <Alert severity="error">{error.message}</Alert>
        </ResponsiveDialogContent>
      </ResponsiveDialog>
    );
  }

  return (
    <ResponsiveDialog onClose={onClose}>
      {editMode ? (
        <EditPostModalContent
          post={post}
          onClose={onClose}
          onFinish={() => setEditMode(false)}
        />
      ) : (
        <ReadPostModalContent
          post={post}
          onClose={onClose}
          onEdit={() => setEditMode(true)}
        />
      )}
    </ResponsiveDialog>
  );
}
