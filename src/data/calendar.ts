export interface CalendarEvent {
  id: string;
  title: string;
  date: string; // YYYY-MM-DD
  time?: string;
  location?: string;
}

export const DEMO_CALENDAR_EVENTS: CalendarEvent[] = [];

export const SELECTED_DATE = new Date(2026, 5, 14); // June 14, 2026
