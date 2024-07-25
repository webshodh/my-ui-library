import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      errorMessage: this.props.errorMessage || '', // Use props for custom error message
    };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, errorMessage: error.message };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error caught in ErrorBoundary:", error, errorInfo);
    // You can send error details to a logging service here
    // e.g., logErrorToService(error, errorInfo);
  }

  handleRetry = () => {
    this.setState({ hasError: false });
    // Optionally, add retry logic here
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="container text-center mt-5">
          <div className="row">
            <div className="col">
              <h1 className="display-4">Error</h1>
              <p className="lead">{this.props.errorMessage || 'An unexpected error has occurred.'}</p>
              {this.props.withRetry && (
                <button className="btn btn-primary" onClick={this.handleRetry}>
                  Retry
                </button>
              )}
              <button className="btn btn-secondary ml-2" onClick={() => window.location.reload()}>
                Reload Page
              </button>
              {this.props.supportContact && (
                <p className="mt-3">
                  For support, please contact <a href={`mailto:${this.props.supportContact}`}>{this.props.supportContact}</a>.
                </p>
              )}
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
