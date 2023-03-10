'use client'

import { Component, type ErrorInfo, ReactNode, cloneElement, ReactElement } from "react"


type MyProps = { children: ReactNode, fallback?: ReactNode };
type MyState = { hasError: boolean, error?: Error };

class ErrorBoundary extends Component<MyProps, MyState> {

    constructor(props: any) {
      super(props)
      // Define a state variable to track whether is an error or not
      this.state = { hasError: false }
    }

    static getDerivedStateFromError(error: Error) {
      // Update state so the next render will show the fallback UI
      return { hasError: true, error }
    }

    // componentDidCatch(error?: Error, errorInfo?: ErrorInfo) {
    //   // You can use your own error logging service here
    //   console.log("test", {  error , errorInfo })
    // }

    render() {
      // Check if the error is thrown
      if (this.state.hasError) {

        if (this.props.fallback) {
          return cloneElement(this.props.fallback as ReactElement, { error: this.state.error?.message, reset: () => this.setState({ hasError: false }) });
        }

        // You can render any custom fallback UI
        return (
          <div>
            <h2>Oops, there is an error!</h2>
            <button
              type="button"
              onClick={() => this.setState({ hasError: false })}
            >
              Try again?
            </button>
          </div>
        )
      }
  
      return this.props.children
    }
  }
  
  export default ErrorBoundary