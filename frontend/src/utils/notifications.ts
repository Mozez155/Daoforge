/**
 * Lightweight notification/toast utility.
 * Dispatches custom DOM events that the toast renderer listens to.
 */

export type NotificationType = "success" | "error" | "warning" | "info";

export interface Notification {
  id: string;
  type: NotificationType;
  title: string;
  message?: string;
  duration?: number;
}

const DEFAULT_DURATION = 4000;

function dispatch(notification: Notification) {
  if (typeof window === "undefined") return;
  window.dispatchEvent(
    new CustomEvent("daoforge:notification", { detail: notification })
  );
}

function createId() {
  return Math.random().toString(36).slice(2);
}

export const notify = {
  success(title: string, message?: string, duration = DEFAULT_DURATION) {
    dispatch({ id: createId(), type: "success", title, message, duration });
  },
  error(title: string, message?: string, duration = DEFAULT_DURATION) {
    dispatch({ id: createId(), type: "error", title, message, duration });
  },
  warning(title: string, message?: string, duration = DEFAULT_DURATION) {
    dispatch({ id: createId(), type: "warning", title, message, duration });
  },
  info(title: string, message?: string, duration = DEFAULT_DURATION) {
    dispatch({ id: createId(), type: "info", title, message, duration });
  },
};
