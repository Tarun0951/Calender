import React from 'react';
import CalendarDay from './CalendarDay';

const CalendarGrid = ({ currentDate, onSelectDate }) => {
  const today = new Date();
  const isToday = (date) => {
    return date.getDate() === today.getDate() &&
           date.getMonth() === today.getMonth() &&
           date.getFullYear() === today.getFullYear();
  };
  const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
  const firstDayOfWeek = firstDayOfMonth.getDay();
  const lastDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);
  const daysInMonth = lastDayOfMonth.getDate();
  const lastDayOfPrevMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0);
  const daysInPrevMonth = lastDayOfPrevMonth.getDate();
  const calendarCells = [];
  for (let i = firstDayOfWeek - 1; i >= 0; i--) {
    const date = new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, daysInPrevMonth - i);
    calendarCells.push({
      date,
      isCurrentMonth: false,
      isToday: isToday(date)
    });
  }
  for (let i = 1; i <= daysInMonth; i++) {
    const date = new Date(currentDate.getFullYear(), currentDate.getMonth(), i);
    calendarCells.push({
      date,
      isCurrentMonth: true,
      isToday: isToday(date)
    });
  }
  const remainingCells = 42 - calendarCells.length;
  for (let i = 1; i <= remainingCells; i++) {
    const date = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, i);
    calendarCells.push({
      date,
      isCurrentMonth: false,
      isToday: isToday(date)
    });
  }
  
  return (
    <div className="grid grid-cols-7 gap-1">
      {calendarCells.map((cell, index) => (
        <CalendarDay
          key={index}
          date={cell.date}
          isCurrentMonth={cell.isCurrentMonth}
          isToday={cell.isToday}
          onSelectDate={onSelectDate}
        />
      ))}
    </div>
  );

};


  
  


export default CalendarGrid;