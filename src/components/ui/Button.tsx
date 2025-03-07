import { type FC } from 'react'

interface ButtonProps {
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link' | 'expandIcon'
  size?: 'default' | 'sm' | 'lg' | 'icon'
  disabled?: boolean
  isLoading?: boolean
  onClick?: () => void
  children?: React.ReactNode
}

const Button2: FC<ButtonProps> = ({
  variant = 'default',
  size = 'default',
  disabled = false,
  isLoading = false,
  onClick,
  children
}) => {
  const baseClasses = 'inline-flex items-center space-x-3 justify-center whitespace-nowrap rounded-md text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50 dark:focus-visible:ring-neutral-700 focus-visible:ring-neutral-500'

  const variants = {
    default: 'bg-neutral-800 text-neutral-50 shadow hover:bg-neutral-800/90 dark:bg-neutral-800 dark:text-neutral-100 dark:hover:bg-neutral-700/50',
    destructive: 'bg-red-500 text-neutral-50 shadow-sm hover:bg-red-500/90 dark:bg-red-900 dark:text-neutral-50 dark:hover:bg-red-900/90',
    outline: 'border border-neutral-200 bg-white shadow-sm hover:bg-neutral-100 hover:text-neutral-900 dark:border-neutral-800 dark:bg-neutral-900 dark:hover:bg-neutral-800 dark:hover:text-neutral-50 dark:hover:border-neutral-700/50',
    secondary: 'bg-neutral-200 text-neutral-900 shadow-sm hover:bg-neutral-100/80 dark:bg-neutral-800 dark:text-neutral-50 dark:hover:bg-neutral-800/80',
    ghost: 'hover:bg-neutral-200 hover:text-neutral-900 dark:hover:bg-neutral-800 dark:hover:text-neutral-50',
    link: 'text-neutral-900 underline-offset-4 hover:underline dark:text-neutral-50',
    expandIcon: 'group relative border border-neutral-200 bg-white shadow-sm hover:bg-neutral-100 hover:text-neutral-900 dark:border-neutral-800 dark:bg-neutral-900 dark:hover:bg-neutral-800 dark:hover:text-neutral-50 dark:hover:border-neutral-700/50'
  }

  const sizes = {
    default: 'h-9 px-4 py-2',
    sm: 'h-8 rounded-md px-3 text-xs',
    lg: 'h-12 rounded-md px-5',
    icon: 'h-9 w-9'
  }

  const buttonClasses = `
    ${baseClasses}
    ${variants[variant]}
    ${sizes[size]}
    ${disabled || isLoading ? 'opacity-50 cursor-not-allowed' : ''}
  `.trim().replace(/\s+/g, ' ')

  return (
    <button
      onClick={onClick}
      disabled={disabled || isLoading}
      className={buttonClasses}
    >
      {isLoading && (
        <svg
          className="animate-spin h-5 w-5 text-current"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.964 7.964 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
      )}
      {children}
    </button>
  )
}

export default Button2