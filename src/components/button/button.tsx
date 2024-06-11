import clsx from 'clsx'
import s from './button.module.css'
import { IButton } from './button.types'

export const Button = ({
  variant,
  className,
  size = 'medium',
  disabled,
  text,
}: IButton) => {
  return (
    <button
      className={clsx(s.button, s[variant], s[size], className)}
      disabled={disabled}
    >
      {text}
    </button>
  )
}
