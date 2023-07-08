import { Dispatch, useCallback } from 'react';

import { Alert, AlertTitle, MenuItem } from '@mui/material';

import { getGroupList } from '#modules/group/api/getGroupList';
import { PostFormDTO } from '#modules/post/infra/post.dto';
import { Post, PostForm } from '#modules/post/post.types';
import { AutocompleteSearchField } from '#shared/components/FormFields/AutocompleteSearchField';
import { CheckboxField } from '#shared/components/FormFields/CheckboxField';
import { CustomTextField } from '#shared/components/FormFields/CustomTextField';
import { FileField } from '#shared/components/FormFields/FileField';
import { SelectField } from '#shared/components/FormFields/SelectField';
import { useTranslation } from '#shared/i18n/useTranslation';
import { ApiError } from '#shared/infra/errors';

type PostFormFieldsProps = {
  isError: boolean;
  error: ApiError<PostFormDTO>;
  formValues: PostForm;
  updateFormValues: Dispatch<Partial<PostForm>>;
  prevData?: Post;
};

export function PostFormFields({
  isError,
  error,
  formValues,
  updateFormValues,
  prevData,
}: PostFormFieldsProps) {
  const { t } = useTranslation();

  // Use callbacks for every functions passed to a prop of a memoized component,
  // such as all of our Field components. This allows to optimize performance
  // (when a field is modified, we only rerender this field and not all of them).
  const fetchInitialGroupOptions = useCallback(
    () => getGroupList({ pageSize: 7 }).then((data) => data.results),
    []
  );
  const fetchGroupOptions = useCallback(
    (searchText: string) =>
      getGroupList({ search: searchText, pageSize: 10 }).then(
        (data) => data.results
      ),
    []
  );
  const onPinnedChange = useCallback(
    (val: boolean) => updateFormValues({ pinned: val }),
    [updateFormValues]
  );

  return (
    <>
      {isError && (
        <Alert severity="error">
          <AlertTitle>{t('form.errors.title')}</AlertTitle>
          {!!error.globalErrors?.length && (
            <ul>
              {error.globalErrors.map((err, index) => (
                <li key={index}>{err}</li>
              ))}
            </ul>
          )}
        </Alert>
      )}
      <CustomTextField
        name="title"
        label={t('post.form.title.label')}
        value={formValues.title}
        onChange={useCallback(
          (val) => updateFormValues({ title: val }),
          [updateFormValues]
        )}
        errors={error?.title}
        required
      />
      <AutocompleteSearchField
        name="group"
        label={t('post.form.group.label')}
        helperText={t('post.form.group.helpText')}
        value={formValues.group}
        onChange={useCallback(
          (val: number) => updateFormValues({ group: val }),
          [updateFormValues]
        )}
        defaultObjectValue={prevData?.group}
        errors={error?.group}
        required
        fetchInitialOptions={fetchInitialGroupOptions}
        fetchOptions={fetchGroupOptions}
        labelPropName="name"
        imagePropName="icon"
      />
      <CustomTextField
        name="description"
        label={t('post.form.description.label')}
        value={formValues.description}
        onChange={useCallback(
          (val) => updateFormValues({ description: val }),
          [updateFormValues]
        )}
        errors={error?.description}
        multiline
        minRows={3}
      />
      <FileField
        name="image"
        label={t('post.form.image.label')}
        helperText={t('post.form.image.helperText')}
        value={formValues.image}
        onChange={useCallback(
          (val) => updateFormValues({ image: val }),
          [updateFormValues]
        )}
        prevFileName={prevData?.image}
        errors={error?.image}
        accept="image/*"
      />
      <SelectField
        name="publicity"
        label={t('post.form.publicity.label')}
        value={formValues.publicity}
        onChange={useCallback(
          (val: 'Pub' | 'Mem') => updateFormValues({ publicity: val }),
          [updateFormValues]
        )}
        errors={error?.publicity}
        defaultValue="Pub"
      >
        <MenuItem value="Pub">{t('post.form.publicity.options.pub')}</MenuItem>
        <MenuItem value="Mem">{t('post.form.publicity.options.mem')}</MenuItem>
      </SelectField>
      {prevData?.group.canPin && (
        <CheckboxField
          name="pinned"
          label={t('post.form.pinned.label')}
          value={formValues.pinned}
          onChange={onPinnedChange}
        />
      )}
    </>
  );
}
