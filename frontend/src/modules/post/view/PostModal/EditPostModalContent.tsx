import { FormEvent, useState } from 'react';
import { useMutation, useQueryClient } from 'react-query';

import { Edit as EditIcon } from '@mui/icons-material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Avatar, Button, useTheme, Menu, MenuItem } from '@mui/material';

import {
  UpdatePostApiVariables,
  updatePostApi,
} from '#modules/post/api/updatePost.api';
import { PostFormDTO } from '#modules/post/infra/post.dto';
import { Post, PostForm } from '#modules/post/post.types';
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

import { PostFormFields } from '../shared/PostFormFields';

type EditPostModalContentProps = {
  post: Post;
  onClose: () => void;
  onFinish: () => void;
};

export function EditPostModalContent({
  post,
  onClose,
  onFinish,
}: EditPostModalContentProps) {
  const { t, i18n } = useTranslation();
  const queryClient = useQueryClient();
  const { palette } = useTheme();

  // the values currently in our form
  const formTranslatedValues: PostForm = {};

  for (const lang of languages_without_locales) {
    formTranslatedValues[`title_${lang}`] = post[`title_${lang}`];
    formTranslatedValues[`description_${lang}`] = post[`description_${lang}`];
  }
  const [formValues, updateFormValues] = useObjectState<PostForm>({
    title: post.title,
    description: post.description,
    ...formTranslatedValues,
    group: post.group.id,
    pinned: post.pinned,
    publicity: post.publicity,
  });

  // create all states for error, loading, etc. while fetching the API
  const { mutate, isLoading, isError, error } = useMutation<
    void,
    ApiFormError<PostFormDTO>,
    UpdatePostApiVariables
  >(updatePostApi);

  // send the form to the server
  const onSubmit = (event: FormEvent, values: PostForm) => {
    // prevent the default function of <form>
    event.preventDefault();
    // call the updatePost function
    mutate(
      { id: post.id, data: values },
      {
        onSuccess: () => {
          // if success, reset the post data in all queries
          queryClient.invalidateQueries('posts');
          queryClient.invalidateQueries(['post', { id: post.id }]);
          queryClient.invalidateQueries('notifications');
          // close the modal
          onFinish();
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
        {t('post.editModal.title')}
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
          <PostFormFields
            isError={isError}
            error={error}
            formValues={formValues}
            updateFormValues={updateFormValues}
            prevData={post}
            selectedLang={selectedLang}
          />
        </ResponsiveDialogContent>
        <ResponsiveDialogFooter>
          <Button variant="text" onClick={() => onFinish()}>
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
