import clsx from 'clsx'
import s from './button.module.css'
import { IButton } from './button.types'

export const Button = ({
  children,
  variant,
  className,
  size = 'medium',
  disabled,
  type = 'button',
  ...rest
}: IButton) => {
  return (
    <button
      type={type}
      className={clsx(s.button, s[variant], s[size], className, children)}
      disabled={disabled}
      {...rest}
    >
      {children}
    </button>
  )
}
