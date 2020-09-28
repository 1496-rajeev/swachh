import React from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
const localizer = momentLocalizer(moment);

const MyCalendar = (props) => (
  <div>
    <Calendar
      localizer={localizer}
      events={[
        {
          id: 0,
          title: "All Day Event very long title",
          allDay: true,
          start: new Date(2015, 3, 0),
          end: new Date(2015, 3, 1),
        },
        {
          id: 1,
          title: "Long Event",
          start: new Date(2015, 3, 7),
          end: new Date(2015, 3, 10),
        },

        {
          id: 2,
          title: "DTS STARTS",
          start: new Date(2016, 2, 13, 0, 0, 0),
          end: new Date(2016, 2, 20, 0, 0, 0),
        },

        {
          id: 3,
          title: "DTS ENDS",
          start: new Date(2016, 10, 6, 0, 0, 0),
          end: new Date(2016, 10, 13, 0, 0, 0),
        },

        {
          id: 4,
          title: "Some Event",
          start: new Date(2015, 3, 9, 0, 0, 0),
          end: new Date(2015, 3, 10, 0, 0, 0),
        },
      ]}
      startAccessor="start"
      endAccessor="end"
      style={{ height: 500 }}
    />
  </div>
);

export default MyCalendar;
