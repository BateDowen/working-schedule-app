export const peopleSchedule = [
    { name: "Миро", shifts: [{day: 'Sun', shift: '1'}, {day: 'Mon', shift: '1'},{day: 'Thus', shift: '2'},{day: 'Wen', shift: 'OFF'}, {day: 'Thurs', shift: '1'},{day: 'Fr', shift: '2'}, {day: 'Sat', shift: 'OFF'}, ] },
    { name: "Никол", shifts: [{day: 'Sun', shift: '1'} ,{day: 'Mon', shift: '1'},{day: 'Thus', shift: '2'},{day: 'Wen', shift: 'OFF'}, {day: 'Thurs', shift: '1'},{day: 'Fr', shift: '2'}, {day: 'Sat', shift: 'OFF'}, ] },
    { name: "Марийка", shifts: [{day: 'Sun', shift: '1'}, {day: 'Mon', shift: '1'},{day: 'Thus', shift: '2'},{day: 'Wen', shift: 'OFF'}, {day: 'Thurs', shift: '1'},{day: 'Fr', shift: '2'}, {day: 'Sat', shift: 'OFF'}, ] },
    { name: "Дони", shifts: [{day: 'Sun', shift: '1'}, {day: 'Mon', shift: '1'},{day: 'Thus', shift: '2'},{day: 'Wen', shift: 'OFF'}, {day: 'Thurs', shift: '1'},{day: 'Fr', shift: '2'}, {day: 'Sat', shift: 'OFF'},] },
    { name: "Някой", shifts: [{day: 'Sun', shift: '1'}, {day: 'Mon', shift: '1'},{day: 'Thus', shift: '2'},{day: 'Wen', shift: 'OFF'}, {day: 'Thurs', shift: '1'},{day: 'Fr', shift: '2'}, {day: 'Sat', shift: 'OFF'},] },
  ];

  export const getDate = (index) =>{
    
    const getFirstDay = () =>{
        const today = new Date();
        const first = today.getDate() - today.getDay() + index;
        return new Date(today.setDate(first));
    };
//    
   const date = `${getFirstDay().getDate().toLocaleString()}.${(getFirstDay().getMonth() + 1).toLocaleString()}`;
   return date;
  };

