import './ErrorMessage.scss'

interface ErrorMessageProps {
  className?: string;
  errorMessage: string;
}

const ErrorMessage = ({ errorMessage, className }: ErrorMessageProps) => {
  return (
    <span className={`error-message ${errorMessage && 'active'} ${className}`}>{errorMessage}</span>
  )
}
export default ErrorMessage;