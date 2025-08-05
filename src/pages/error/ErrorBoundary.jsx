
import React from "react";

export default class ErrorBoundary extends React.Component {
  state = { hasError: false };
  static getDerivedStateFromError() { return { hasError: true }; }
  componentDidCatch(err, info) {
    console.error("Caught by ErrorBoundary:", err, info);
  }
  render() {
    if (this.state.hasError) {
      return (
        <div className="p-8 text-center text-primary">
          Oops—something went wrong. Try refreshing or closing this panel.
        </div>
      );
    }
    return this.props.children;
  }
}
