import { FunctionComponent } from 'react'
import { Button } from 'react-bootstrap'
import { ReactButtonProps } from './ReactButton.types'
import { ReactImage } from '../ReactImage/ReactImage'

export const ReactButton: FunctionComponent<ReactButtonProps> = ({
  dataTestId,
  id,
  buttonName,
  buttonType = 'button',
  buttonVariant,
  buttonClassName,
  buttonIsDisable = false,
  buttonText,
  buttonIsImage = false,
  buttonImageUrl,
  buttonRef,
  buttonHandleChange,
}) => {
  return (
    <Button
      data-test-id={dataTestId}
      id={id}
      name={buttonName}
      type={buttonType}
      variant={buttonVariant}
      className={buttonClassName}
      disabled={buttonIsDisable}
      ref={buttonRef}
      onClick={buttonHandleChange}
    >
      {buttonIsImage ? (
        <ReactImage imageSrc={buttonImageUrl} dataTestId={dataTestId} id={id} />
      ) : (
        buttonText
      )}
    </Button>
  )
}
