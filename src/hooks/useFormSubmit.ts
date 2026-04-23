import { useState } from 'react';

/**
 * Shared hook for form submit simulation.
 * Replace the setTimeout with a real fetch call when integrating a backend.
 */
export function useFormSubmit(resetDelay = 5000) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // TODO: Replace with real submission (e.g. Web3Forms / Formspree)
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setTimeout(() => setIsSuccess(false), resetDelay);
    }, 1500);
  };

  return { isSubmitting, isSuccess, handleSubmit };
}
