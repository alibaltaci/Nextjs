"use client"

type ErrorBoundaryProps = {
    error: Error
    reset: () => void
}

const ErrorBoundary = ( {error, reset}:ErrorBoundaryProps ) => {
  return (
    <div>
        { error.message }
        <button onClick={ reset } >Try Again</button>
    </div>
  )
}

export default ErrorBoundary