import './ErrorMessage.scss'

interface iErrorMessage {
  className?: string;
  errorMessage: string;
}

const ErrorMessage = ({ errorMessage, className }: iErrorMessage) => {
  return (
    <span className={`error-message ${errorMessage && 'active'} ${className}`}>{errorMessage}</span>
  )
}
export default ErrorMessage;