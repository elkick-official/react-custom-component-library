import React from 'react'
export type ReactInputProps = {
  id: string
  inputType:
    | 'text'
    | 'date'
    | 'email'
    | 'search'
    | 'number'
    | 'file'
    | 'password'
    | 'hidden'
    | 'time'
    | 'color'
  inputName: string
  inputValue: string
  inputPlaceholder?: string
  dataTestId?: string
  isReadOnly?: boolean
  inputClassName?: string
  inputAutoComplete?: 'on' | 'off'
  inputLabelText?: string
  inputGroupClassName?: string
  isMultiple?: boolean
  inputErrorText?: string
  inputAcceptType?: string
  inputAs?: any
  inputRefHandleChange?: (ref: any) => void | any
  inputHandleChange: (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>,
  ) => void
  inputHandleBlur?: (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>,
  ) => void
  inputHandleOnKeyDown?: (
    event:
      | React.KeyboardEvent<HTMLInputElement>
      | React.KeyboardEvent<HTMLTextAreaElement>,
  ) => void
  inputHandleOnKeyUp?: (
    event:
      | React.KeyboardEvent<HTMLInputElement>
      | React.KeyboardEvent<HTMLTextAreaElement>,
  ) => void
}
