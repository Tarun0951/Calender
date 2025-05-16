import React from 'react';

const CalendarHeader = ({ currentDate, onPrevMonth, onNextMonth }) => {
  const month = currentDate.toLocaleString('default', { month: 'long' });
  const year = currentDate.getFullYear();
  const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  
  return (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-4">
        <button 
          onClick={onPrevMonth}
          className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-l"
        >
          &lt;
        </button>
        
        <h2 className="text-xl font-bold">
          {month} {year}
        </h2>
        
        <button 
          onClick={onNextMonth}
          className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-r"
        >
          &gt;
        </button>
      </div>
      <div className="grid grid-cols-7 gap-1 text-center">
        {weekdays.map((day, index) => (
          <div 
            key={index} 
            className="py-2 font-medium text-gray-600 border-b border-gray-200"
          >
            {day}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CalendarHeader;