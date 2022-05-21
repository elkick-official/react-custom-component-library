import { FunctionComponent } from 'react'
import { Form } from 'react-bootstrap'
import { ReactInputProps } from './ReactInput.types'

export const ReactInput: FunctionComponent<ReactInputProps> = ({
  id,
  inputType,
  inputName,
  inputValue,
  inputPlaceholder,
  dataTestId,
  isReadOnly,
  inputClassName,
  inputAutoComplete,
  inputLabelText,
  inputGroupClassName,
  isMultiple,
  inputErrorText,
  inputAcceptType,
  inputRefHandleChange,
  inputHandleChange,
  inputHandleBlur,
  inputHandleOnKeyDown,
  inputHandleOnKeyUp,
}) => {
  const onBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    if (inputHandleBlur) inputHandleBlur(event)
  }

  return (
    <>
      <Form.Group controlId={id} className={inputGroupClassName}>
        <div className="position-relative">
          <Form.Label className="input-label">{inputLabelText}</Form.Label>
          <Form.Control
            data-test-id={dataTestId}
            id={id}
            type={inputType}
            ref={inputRefHandleChange}
            placeholder={inputPlaceholder}
            name={inputName}
            readOnly={isReadOnly}
            value={inputValue}
            className={inputClassName}
            autoComplete={inputAutoComplete}
            multiple={isMultiple}
            accept={inputAcceptType}
            onBlur={onBlur}
            onChange={inputHandleChange}
            onKeyDown={inputHandleOnKeyDown}
            onKeyUp={inputHandleOnKeyUp}
          />
          {inputErrorText && inputErrorText !== '' && (
            <>
              <span className="warning-msg-text">{inputErrorText}</span>
            </>
          )}
        </div>
      </Form.Group>
    </>
  )
}
