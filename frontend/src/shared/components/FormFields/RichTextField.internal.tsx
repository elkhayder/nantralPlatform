import { forwardRef, memo } from 'react';

import { CKEditor } from '@ckeditor/ckeditor5-react';
import {
  FormControl,
  FormHelperText,
  InputLabel,
  OutlinedInput,
} from '@mui/material';

import { CustomEditor, getCKEditorLanguage } from '#shared/ckeditor';
import { useTranslation } from '#shared/i18n/useTranslation';

import './RichTextField.internal.scss';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const CKEditorWithRef = forwardRef<HTMLInputElement>((props: any, ref) => {
  return (
    <>
      <CKEditor {...props} />
      <input hidden ref={ref} />
    </>
  );
});
CKEditorWithRef.displayName = 'CKEditorWithRef';

export type RichTextFieldInternalProps = {
  value: string;
  handleChange: (val: string) => void;
  name?: string;
  label: string;
  errors?: string[];
  helperText?: string;
};

function RichTextFieldInternalComponent({
  value,
  handleChange,
  name,
  label,
  errors,
  helperText,
}: RichTextFieldInternalProps) {
  const { i18n } = useTranslation();

  const isError = errors !== undefined;

  return (
    <FormControl margin="normal" variant="outlined">
      <InputLabel
        htmlFor="richtext-input"
        error={isError}
        style={{ transform: 'translate(14px, -18px) scale(0.75)' }}
      >
        {label}
      </InputLabel>
      <OutlinedInput
        id="richtext-input"
        value={value}
        slots={{ input: CKEditorWithRef }}
        slotProps={{
          input: {
            name: name,
            editor: CustomEditor,
            data: value,
            config: { language: getCKEditorLanguage(i18n) },
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
          } as any,
        }}
        onChange={
          ((event, editor) => {
            const data = editor.getData();
            handleChange(data);
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
          }) as any
        }
      />
      <FormHelperText>
        {isError ? errors.join(', ') : helperText}
      </FormHelperText>
    </FormControl>
  );
}

const RichTextFieldInternal = memo(RichTextFieldInternalComponent);
export default RichTextFieldInternal;
