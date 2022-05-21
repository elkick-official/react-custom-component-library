import React, { HTMLInputTypeAttribute } from 'react'
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
  inputRefHandleChange?: (ref: any) => void | any
  inputHandleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  inputHandleBlur?: (event: React.ChangeEvent<HTMLInputElement>) => void
  inputHandleOnKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void
  inputHandleOnKeyUp?: (event: React.KeyboardEvent<HTMLInputElement>) => void
}
