import React, { Component, ErrorInfo, ReactNode } from "react";
import { Button } from "@/components/ui/button";

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="min-h-screen flex items-center justify-center bg-background">
          <div className="text-center p-8 max-w-md">
            <h2 className="text-2xl font-bold text-destructive mb-4">
              Oops! Une erreur s'est produite
            </h2>
            <p className="text-muted-foreground mb-6">
              Nous nous excusons pour ce désagrément. Veuillez rafraîchir la page ou réessayer plus tard.
            </p>
            <Button 
              onClick={() => window.location.reload()}
              className="gradient-bg text-white"
            >
              Rafraîchir la page
            </Button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}