import { cn } from '@/lib/utils'
import { Slot } from '@radix-ui/react-slot'

export default function Button({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className,
  asChild = false,
  ...props 
}) {
  const variants = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700',
    secondary: 'bg-gray-200 text-gray-900 hover:bg-gray-300',
    outline: 'border border-gray-300 text-gray-700 hover:bg-gray-50'
  }
  
  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2',
    lg: 'px-6 py-3 text-lg'
  }

  const Comp = asChild ? Slot : 'button'

  return (
    <Comp
      className={cn(
        'rounded-lg font-medium transition-colors',
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </Comp>
  )
}