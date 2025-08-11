import { motion, AnimatePresence } from 'framer-motion';
import { useState, forwardRef, InputHTMLAttributes } from 'react';
import { Eye, EyeOff, AlertCircle, CheckCircle } from 'lucide-react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  success?: string;
  icon?: React.ReactNode;
  showPasswordToggle?: boolean;
}

const Input = forwardRef<HTMLInputElement, InputProps>(({
  label,
  error,
  success,
  icon,
  showPasswordToggle = false,
  type = 'text',
  className = '',
  ...props
}, ref) => {
  const [isFocused, setIsFocused] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [hasValue, setHasValue] = useState(false);

  const inputType = showPasswordToggle && type === 'password' 
    ? (showPassword ? 'text' : 'password') 
    : type;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setHasValue(e.target.value.length > 0);
    if (props.onChange) {
      props.onChange(e);
    }
  };

  const labelVariants = {
    default: { 
      y: 0, 
      scale: 1, 
      color: 'rgb(107, 114, 128)' // gray-500
    },
    focused: { 
      y: -24, 
      scale: 0.85, 
      color: error ? 'rgb(239, 68, 68)' : success ? 'rgb(34, 197, 94)' : 'rgb(59, 130, 246)' // red-500, green-500, blue-500
    }
  };

  const inputVariants = {
    default: { 
      borderColor: 'rgb(209, 213, 219)', // gray-300
      boxShadow: '0 0 0 0px rgba(59, 130, 246, 0)'
    },
    focused: { 
      borderColor: error ? 'rgb(239, 68, 68)' : success ? 'rgb(34, 197, 94)' : 'rgb(59, 130, 246)',
      boxShadow: error 
        ? '0 0 0 3px rgba(239, 68, 68, 0.1)' 
        : success 
        ? '0 0 0 3px rgba(34, 197, 94, 0.1)'
        : '0 0 0 3px rgba(59, 130, 246, 0.1)'
    }
  };

  return (
    <div className="relative">
      {/* Input Container */}
      <div className="relative">
        {/* Icon */}
        {icon && (
          <motion.div 
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            animate={{ 
              color: isFocused 
                ? (error ? 'rgb(239, 68, 68)' : success ? 'rgb(34, 197, 94)' : 'rgb(59, 130, 246)')
                : 'rgb(156, 163, 175)'
            }}
            transition={{ duration: 0.2 }}
          >
            {icon}
          </motion.div>
        )}

        {/* Input */}
        <motion.input
          ref={ref}
          type={inputType}
          className={`
            w-full px-4 py-3 border rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 
            placeholder-transparent focus:outline-none transition-all duration-200
            ${icon ? 'pl-10' : ''}
            ${showPasswordToggle ? 'pr-10' : ''}
            ${error ? 'border-red-500' : success ? 'border-green-500' : 'border-gray-300 dark:border-gray-600'}
            ${className}
          `}
          variants={inputVariants}
          animate={isFocused ? 'focused' : 'default'}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          onChange={handleInputChange}
          {...props}
        />

        {/* Floating Label */}
        {label && (
          <motion.label
            className="absolute left-4 pointer-events-none origin-left"
            variants={labelVariants}
            animate={isFocused || hasValue ? 'focused' : 'default'}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            style={{ top: '50%', transform: 'translateY(-50%)' }}
          >
            {label}
          </motion.label>
        )}

        {/* Password Toggle */}
        {showPasswordToggle && (
          <motion.button
            type="button"
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
            onClick={() => setShowPassword(!showPassword)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </motion.button>
        )}

        {/* Status Icons */}
        <AnimatePresence>
          {(error || success) && (
            <motion.div
              className={`absolute right-3 top-1/2 transform -translate-y-1/2 ${showPasswordToggle ? 'mr-8' : ''}`}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              {error ? (
                <AlertCircle className="w-5 h-5 text-red-500" />
              ) : (
                <CheckCircle className="w-5 h-5 text-green-500" />
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Error/Success Messages */}
      <AnimatePresence>
        {(error || success) && (
          <motion.div
            initial={{ opacity: 0, y: -10, height: 0 }}
            animate={{ opacity: 1, y: 0, height: 'auto' }}
            exit={{ opacity: 0, y: -10, height: 0 }}
            transition={{ duration: 0.2 }}
            className="mt-2"
          >
            <p className={`text-sm flex items-center gap-2 ${
              error ? 'text-red-500' : 'text-green-500'
            }`}>
              {error ? <AlertCircle size={16} /> : <CheckCircle size={16} />}
              {error || success}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
});

Input.displayName = 'Input';

export default Input;
