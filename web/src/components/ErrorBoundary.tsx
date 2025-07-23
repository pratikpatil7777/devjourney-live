import React, { ErrorInfo } from "react";

type Props = { children: React.ReactNode };
type State = { hasError: boolean; message?: string };

class ErrorBoundary extends React.Component<Props, State> {
  override state: State = { hasError: false };

  //  ⬇ removed `override`
  static getDerivedStateFromError(error: Error): Partial<State> | null {
    return { hasError: true, message: error.message };
  }

  override componentDidCatch(error: Error, info: ErrorInfo) {
    // eslint-disable-next-line no-console
    console.error("Uncaught error:", error, info);
  }

  override render() {
    if (this.state.hasError) {
      return (
        <div className="rounded-lg border p-4 text-red-600 dark:border-zinc-700">
          <h2 className="text-lg font-semibold">Something went wrong.</h2>
          {this.state.message && (
            <p className="text-sm">{this.state.message}</p>
          )}
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
