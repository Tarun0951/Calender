import { eventsData} from './EventData';

export const getEventsForDate = (date) => {
  const dateString = date.toISOString().split('T')[0];
  return eventsData.filter(event => event.date === dateString);
};
export const hasEvents = (date) => {
  const events = getEventsForDate(date);
  return events.length > 0;
};
export const getEventCount = (date) => {
  return getEventsForDate(date).length;
};
export const formatTime = (time) => {
  const [hours, minutes] = time.split(':');
  const hour = parseInt(hours, 10);
  const ampm = hour >= 12 ? 'PM' : 'AM';
  const formattedHour = hour % 12 || 12;
  return `${formattedHour}:${minutes} ${ampm}`;
};
export const eventsOverlap = (event1, event2) => {
  if (event1.date !== event2.date) return false;
  const start1 = event1.startTime;
  const end1 = event1.endTime;
  const start2 = event2.startTime;
  const end2 = event2.endTime;
  return (start1 < end2 && start2 < end1);
};
export const findOverlappingEvents = (event, events) => {
  return events.filter(e => e.id !== event.id && eventsOverlap(event, e));
};