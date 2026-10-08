import { useRef, type ReactNode, type PointerEvent } from 'react'
import { Link } from 'react-router-dom'
import { useReducedMotion } from 'framer-motion'

type ButtonProps = {
  children: ReactNode
  to?: string
  href?: string
  variant?: 'primary' | 'ghost'
  className?: string
  tip?: string
  ariaLabel?: string
  onClick?: () => void
}

export function Button({
  children,
  to,
  href,
  variant = 'ghost',
  className = '',
  tip,
  ariaLabel,
  onClick,
}: ButtonProps) {
  const reduce = Boolean(useReducedMotion())
  const magnetRef = useRef<HTMLSpanElement>(null)
  const classes = `btn btn-${variant}${className ? ` ${className}` : ''}${tip ? ' has-tip' : ''}`

  function onPointerMove(event: PointerEvent<HTMLSpanElement>) {
    if (reduce || event.pointerType !== 'mouse' || !magnetRef.current) return
    const rect = magnetRef.current.getBoundingClientRect()
    const dx = event.clientX - (rect.left + rect.width / 2)
    const dy = event.clientY - (rect.top + rect.height / 2)
    const x = Math.max(-6, Math.min(6, dx * 0.12))
    const y = Math.max(-5, Math.min(5, dy * 0.16))
    magnetRef.current.style.transform = `translate3d(${x.toFixed(1)}px, ${y.toFixed(1)}px, 0)`
  }

  function onPointerLeave() {
    if (magnetRef.current) magnetRef.current.style.transform = ''
  }

  const shared = {
    className: classes,
    'data-tip': tip,
    'aria-label': ariaLabel,
    onClick,
  }

  let control: ReactNode
  if (to) {
    control = <Link to={to} {...shared}>{children}</Link>
  } else if (href) {
    const external = href.startsWith('http')
    control = (
      <a
        href={href}
        {...shared}
        {...(external ? { target: '_blank', rel: 'noreferrer noopener' } : undefined)}
      >
        {children}
      </a>
    )
  } else {
    control = (
      <button type="button" {...shared}>
        {children}
      </button>
    )
  }

  return (
    <span
      ref={magnetRef}
      className="magnet"
      onPointerMove={onPointerMove}
      onPointerLeave={onPointerLeave}
    >
      {control}
    </span>
  )
}
