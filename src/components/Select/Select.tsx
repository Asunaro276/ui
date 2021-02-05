// @ts-ignore
import xor from 'lodash/xor'
import React, { Ref } from 'react'
import { FormLayout } from '../../lib/Layout/FormLayout'
import InputErrorIcon from '../../lib/Layout/InputErrorIcon'
import InputIconContainer from '../../lib/Layout/InputIconContainer'
// @ts-ignore
import SelectStyles from './Select.module.css'

interface OptionProps {
  value: string
  children: React.ReactNode
  selected?: boolean
}

interface OptGroupProps {
  label: string
  children: React.ReactNode
}

export const ColLayout = (props: any) => (
  <div className="">{props.children}</div>
)

function Select({
  allowedValues,
  autocomplete,
  autofocus,
  checkboxes,
  children,
  className,
  descriptionText,
  disabled,
  disableItem,
  error,
  fieldType,
  icon,
  id,
  inputRef,
  label,
  labelOptional,
  layout,
  name,
  onChange,
  required,
  transform,
  value,
  style,
}: any) {
  let selectClasses = [SelectStyles['sbui-select']]
  if (error) {
    selectClasses.push(SelectStyles['sbui-select--error'])
  }
  if (icon) {
    selectClasses.push(SelectStyles['sbui-select--with-icon'])
  }

  return (
    <FormLayout
      label={label}
      labelOptional={labelOptional}
      layout={layout}
      id={id}
      error={error}
      descriptionText={descriptionText}
      className={className}
      style={style}
    >
      {checkboxes || fieldType === Array ? (
        allowedValues!.map((item: any) => (
          <div key={item}>
            <input
              checked={
                fieldType === Array ? value!.includes(item) : value === item
              }
              disabled={disableItem?.(item) ?? disabled}
              id={`${id}-${escape(item)}`}
              name={name}
              onChange={() => {
                onChange(fieldType === Array ? xor([item], value) : item)
              }}
              type="checkbox"
            />

            <label htmlFor={`${id}-${escape(item)}`}>
              {transform ? transform(item) : item}
            </label>
          </div>
        ))
      ) : (
        <div className={SelectStyles['sbui-select-container']}>
          <select
            id={id}
            name={name}
            autoComplete={autocomplete}
            autoFocus={autofocus}
            className={selectClasses.join(' ')}
            onChange={(event) => onChange(event)}
            ref={inputRef}
            value={value}
            required={required}
          >
            {children}
          </select>
          {icon && <InputIconContainer icon={icon} />}
          {error && <InputErrorIcon style={{ marginRight: '1.2rem' }} />}
          <span className={SelectStyles['sbui-select-chevron-container']}>
            <svg
              className={SelectStyles["sbui-select-chevron"]}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </div>
      )}
    </FormLayout>
  )
}

export function Option({ value, children, selected }: OptionProps) {
  return (
    <option value={value} selected={selected}>
      {children}
    </option>
  )
}

export function OptGroup({ label, children }: OptGroupProps) {
  return <optgroup label={label}>{children}</optgroup>
}

Select.Option = Option
Select.OptGroup = OptGroup

// function Option({

// }) {
//   return (

//       (!!placeholder || !required || value === undefined) && (
//         <option value="" disabled={required} hidden={required}>
//           {placeholder || label}
//         </option>
//       )}

//       {allowedValues!.map(value => (
//         <option disabled={disableItem?.(value)} key={value} value={value}>
//           {transform ? transform(value) : value}
//         </option>
//       ))}
//   )
// }

export default Select
