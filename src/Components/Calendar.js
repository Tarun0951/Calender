import React, { useState, useEffect } from 'react';
import CalendarHeader from './CalendarHeader';
import CalendarGrid from './CalendarGrid';
import { eventsData } from './EventData';
import EventItem from './EventItem';

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedEvents, setSelectedEvents] = useState([]);
  const handlePrevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };
  const handleNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };
  const handleSelectDate = (date, events) => {
    setSelectedDate(date);
    setSelectedEvents(events);
  };
  useEffect(() => {
    console.log("Calendar loaded with", eventsData.length, "events");
    const today = new Date();
    setSelectedDate(today);
    const todayStr = today.toISOString().split('T')[0];
    const todayEvents = eventsData.filter(event => event.date === todayStr);
    setSelectedEvents(todayEvents);
  }, []);
  
  return (
    <div className="max-w-6xl mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {/* Main calendar area */}
        <div className="md:col-span-3 bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="p-4">
            <CalendarHeader 
              currentDate={currentDate}
              onPrevMonth={handlePrevMonth}
              onNextMonth={handleNextMonth}
            />
            <CalendarGrid 
              currentDate={currentDate} 
              onSelectDate={handleSelectDate}
            />
          </div>
        </div>
        
        {/* Events sidebar */}
        <div className="md:col-span-1 bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="p-4">
            <h3 className="text-lg font-semibold mb-4 border-b pb-2">
              {selectedDate ? (
                selectedDate.toLocaleDateString('en-US', { 
                  weekday: 'long', 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })
              ) : (
                "Select a date"
              )}
            </h3>
            
            {selectedEvents.length > 0 ? (
              <div className="space-y-3">
                {selectedEvents.map(event => (
                  <EventItem key={event.id} event={event} />
                ))}
              </div>
            ) : (
              <p className="text-gray-500">No events scheduled for this day.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Calendar;