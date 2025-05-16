import React from 'react';
import { formatTime } from './EventUtils';

const EventItem = ({ event, isCompact = false }) => {
  const textColor = 'text-white';
  
  if (isCompact) {
    return (
      <div 
        className={`${event.color} ${textColor} text-xs rounded px-1 py-0.5 mb-1 truncate hover:opacity-90 hover:shadow transition duration-150 cursor-pointer`}
        title={`${event.title} (${formatTime(event.startTime)} - ${formatTime(event.endTime)})`}
      >
        {event.title}
      </div>
    );
  }
  return (
    <div 
      className={`${event.color} ${textColor} rounded p-2 mb-2 hover:shadow-md transition duration-150 cursor-pointer`}
    >
      <div className="font-bold">{event.title}</div>
      <div className="text-sm">
        {formatTime(event.startTime)} - {formatTime(event.endTime)}
      </div>
      <div className="text-xs mt-1 opacity-90">
        Duration: {calculateDuration(event.startTime, event.endTime)}
      </div>
    </div>
  );
};
const calculateDuration = (startTime, endTime) => {
  const [startHours, startMinutes] = startTime.split(':').map(Number);
  const [endHours, endMinutes] = endTime.split(':').map(Number);
  
  let durationMinutes = (endHours * 60 + endMinutes) - (startHours * 60 + startMinutes);
  
  if (durationMinutes <= 0) {
    return "Invalid duration";
  }
  const hours = Math.floor(durationMinutes / 60);
  const minutes = durationMinutes % 60;
  if (hours === 0) {
    return `${minutes} min`;
  } else if (minutes === 0) {
    return `${hours} hr`;
  } else {
    return `${hours} hr ${minutes} min`;
  }
};

export default EventItem;
