import { forwardRef } from "react"

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({
  className,
  children,
  disabled,
  type = "button",
  ...props
}, ref) => {
  return (
    <button type={type} className={`rounded-md  border-2 border-black py-1.5 px-4 disabled:cursor-not-allowed disabled:opacity-50 text-black font-bold hover:opacity-75 transition ${className}`} disabled={disabled} ref={ref} {...props}>
      {children}
    </button>
  )
})

Button.displayName = 'Button'

export default Button