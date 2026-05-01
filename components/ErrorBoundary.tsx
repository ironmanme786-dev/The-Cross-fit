'use client';

import React from 'react';
import { motion } from 'motion/react';
import { AlertTriangle, RefreshCcw, Home } from 'lucide-react';

export class ErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean; error: Error | null }
> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("ErrorBoundary caught an error:", error, errorInfo);
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null });
    window.location.href = "/";
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-8 text-center selection:bg-red-600">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-md w-full"
          >
            <div className="bg-red-600/20 p-6 rounded-full inline-block mb-8 border border-red-600/50">
                <AlertTriangle size={48} className="text-red-500" />
            </div>
            <h1 className="text-4xl md:text-5xl font-oswald font-black uppercase tracking-tighter mb-4 italic">Something went wrong</h1>
            <p className="text-gray-400 font-inter mb-10 text-lg">We encountered an unexpected error. Don&apos;t worry, your progress is safe.</p>
            
            <div className="flex flex-col sm:flex-row gap-4">
                <button
                    onClick={() => window.location.reload()}
                    className="flex-1 px-8 py-4 bg-white text-black font-oswald font-black uppercase tracking-widest text-sm rounded-sm hover:bg-gray-200 transition-all flex items-center justify-center gap-2"
                >
                    <RefreshCcw size={18} /> Retry
                </button>
                <button
                    onClick={this.handleReset}
                    className="flex-1 px-8 py-4 bg-red-600 text-white font-oswald font-black uppercase tracking-widest text-sm rounded-sm hover:bg-red-700 transition-all flex items-center justify-center gap-2"
                >
                    <Home size={18} /> Home
                </button>
            </div>

            {process.env.NODE_ENV === 'development' && (
                <div className="mt-12 p-6 bg-white/5 rounded-xl border border-white/10 text-left overflow-auto max-h-40">
                    <p className="text-red-400 font-mono text-xs">{this.state.error?.message}</p>
                </div>
            )}
          </motion.div>
        </div>
      );
    }
    return this.props.children;
  }
}
