'use client';
import CalendarHeatmap from 'react-calendar-heatmap';
import { Calendar } from './ui/calendar';
import dayjs from 'dayjs';
import 'react-calendar-heatmap/dist/styles.css';
import { Event } from '@/types';

type Props = {
  events: Event[];
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Calender({ events, setOpen }: Props) {
  let yearly = dayjs().subtract(365, 'days').format('YYYY-MM-DD');
  const formattedEvents = events.map((event) => ({
    ...event,
    date: dayjs(event.date).format('YYYY-MM-DD'),
  }));
  return (
    <CalendarHeatmap
      showWeekdayLabels
      classForValue={(value) => {
        if (!value) {
          return 'color-empty';
        }
        return `color-opacity-${value.count}`;
      }}
      startDate={yearly}
      values={[]}
    />
  );
}
