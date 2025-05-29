import { isRejectedWithValue } from '@reduxjs/toolkit';
import type { Middleware, MiddlewareAPI } from '@reduxjs/toolkit';
import { toast } from 'sonner';

export const rtkQueryErrorLogger: Middleware =
  (api: MiddlewareAPI) => (next) => (action) => {

    if (isRejectedWithValue(action)) {
      console.warn('API Request Rejected:', action);

      const payload = action.payload as {
        data?: ApiErrorResponse;
        status?: number;
        error?: string;
      };

      if (payload?.data) {
        const apiError = payload.data;
        const mainMessage = "Oops!";
        let fieldErrorMessages = '';

        if (apiError.errors && Object.keys(apiError.errors).length > 0) {
          fieldErrorMessages = Object.entries(apiError.errors)
            .map(([field, message]) => {
              const prettyField = field.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
              return `${prettyField}: ${message}`;
            })
            .join('\n');
        }

        toast.error(mainMessage, {
          description: fieldErrorMessages || undefined
        });
      } else if (payload?.error) {
        toast.error(payload.error);
      } else if (action.error?.message) {
        toast.error(action.error.message);
      } else {
        toast.error('An unexpected error occurred. Please try again.');
      }
    }

    return next(action);
  };
