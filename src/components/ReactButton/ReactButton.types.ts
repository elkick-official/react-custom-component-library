import React from 'react'

export type ReactButtonProps = {
  dataTestId: string
  id: string
  buttonName: string
  buttonType: 'submit' | 'button' | 'reset'
  buttonVariant?: string
  buttonClassName?: string
  buttonIsDisable?: boolean
  buttonText: string
  buttonIsImage?: boolean
  buttonImageUrl?: string | undefined
  buttonRef?: (ref: any) => void | any
  buttonHandleChange?: (
    event: React.MouseEvent<HTMLElement> | undefined,
  ) => void
}
