import type { ComponentType, ReactNode } from "react";

export { default } from "../upstream/error";
export type { ErrorProps } from "../upstream/error";

// Next.js 16.3 stabilized catchError and retry. Keep the pre-16.3 names too.
// https://github.com/vercel/next.js/blob/v16.3.6/packages/next/src/client/components/catch-error.tsx
export type ErrorInfo = {
  error: unknown;
  reset: () => void;
  retry: () => void;
  unstable_retry: () => void;
};

export declare function catchError<P extends object>(
  fallback: (props: P, errorInfo: ErrorInfo) => ReactNode,
): ComponentType<P & { children?: ReactNode }>;

export { catchError as unstable_catchError };
