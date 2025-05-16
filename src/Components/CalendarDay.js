import React from 'react';
import EventItem from './EventItem';
import { getEventsForDate, getEventCount } from './EventUtils';

const CalendarDay = ({ date, isCurrentMonth, isToday, onSelectDate }) => {
  const events = getEventsForDate(date);
  const eventCount = getEventCount(date);
  const dayNumber = date.getDate();
  const isWeekend = date.getDay() === 0 || date.getDay() === 6;
  let dayClasses = "h-24 border border-gray-200 p-1 relative calendar-day cursor-pointer";
  if (!isCurrentMonth) {
    dayClasses += " bg-gray-100 text-gray-400";
  } else if (isWeekend) {
    dayClasses += " bg-gray-50";
  }
  if (isToday) {
    dayClasses += " ring-2 ring-blue-500";
  }
  const handleClick = () => {
    if (onSelectDate) {
      onSelectDate(date, events);
    }
  };

  return (
    <div className={dayClasses} onClick={handleClick}>
      <div className={`text-right mb-1 ${isToday ? 'font-bold text-blue-500' : ''}`}>
        {dayNumber}
      </div>
      <div className="overflow-y-auto max-h-16">
        {events.slice(0, 3).map(event => (
          <EventItem key={event.id} event={event} isCompact={true} />
        ))}
        {eventCount > 3 && (
          <div className="text-xs text-gray-500 mt-1">
            +{eventCount - 3} more
          </div>
        )}
      </div>
    </div>
  );
};
export default CalendarDay;