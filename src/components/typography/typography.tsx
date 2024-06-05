import { ITypography, Types } from './typography.types'
import s from "./typography.module.css"
import clsx from 'clsx'
import { createElement } from 'react'

const Typography = ({ children, tag, className, variant }: ITypography) => {
const props = {
  className: clsx(s[variant], className)
}
  return createElement(tag || Types[variant], props, children)
}

export default Typography
