
// @ts-nocheck
'use client';

import config from '@/config';
import { Checkbox } from './ui/checkbox';
import { useEffect, useState } from 'react';
import { Event } from '@/types';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Slider } from './ui/slider';
import { DatePicker } from './DatePicker';
import { Label } from './ui/label';
import dayjs from 'dayjs';

type Props = {
  setEvents: React.Dispatch<React.SetStateAction<Event[]>>;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Form({ setEvents, setOpen }: Props) {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [event, setEvent] = useState<Event>({
    user_id: undefined,
    date: undefined,
    duration: 1,
    locations: [],
    symptomes: [],
    medications: [],
    count: 0,
  });

  const handleChange = (index: number, key: keyof Event) => {
    const updatedSymptomes = [...event[key]];
    if (updatedSymptomes.includes(index)) {
      updatedSymptomes.splice(updatedSymptomes.indexOf(index), 1);
    } else {
      updatedSymptomes.push(index);
    }
    setEvent({ ...event, [key]: updatedSymptomes });
  };

  const saveEvent = () => {
    setError(null);
    if (!event.date) {
      setError('You must provide a date.');
      return;
    }

    try {
      setLoading(true);
      setEvents((preEvents) => [...preEvents, event]);
      setOpen(false);
      console.log(event);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setEvent((prevState) => ({
      ...prevState,
      date: dayjs().format(),
    }));
  }, []);

  return (
    <div className='flex flex-col items-start space-y-4'>
      <h1 className='text-2xl font-bold text-gray-800 dark:text-white'>
        Add New Crisis
      </h1>
      <div className='space-y-2'>
        <div className='text-gray-600 dark:text-gray-400 text-base'>
          When was the last migraine?
        </div>
        <DatePicker />
      </div>
      <div className='space-y-2'>
        <div className='text-gray-600 dark:text-gray-400 text-base'>
          Evaluate your pain (from 0 to 10)
        </div>
        <Slider defaultValue={[33]} max={100} step={1} className='w-full' />
      </div>
      <div className='space-y-2'>
        <div className='text-gray-600 dark:text-gray-400 text-base'>
          How long did it last?
        </div>
        <Slider defaultValue={[33]} max={100} step={1} className='w-full' />
      </div>
      <div className='space-y-2'>
        <div className='text-gray-600 dark:text-gray-400 text-base'>Symptoms</div>
        <div className='grid grid-cols-2 gap-2'>
          {config.symptomes.map((symptom) => (
            <div key={symptom}>
              <Label className='text-gray-600 dark:text-gray-400'>
                <Checkbox
                  name={symptom}
                  value={symptom}
                  onChange={() => handleChange(symptom, 'symptomes')}
                />
                {symptom}
              </Label>
            </div>
          ))}
        </div>
      </div>
      <div className='space-y-2'>
        <div className='text-gray-600 dark:text-gray-400 text-base'>Locations</div>
        <div className='grid grid-cols-2 gap-2'>
          {config.locations.map((location) => (
            <div key={location}>
              <Label className='text-gray-600 dark:text-gray-400'>
                <Checkbox
                  name={location}
                  value={location}
                  onChange={() => handleChange(location, 'locations')}
                />
                {location}
              </Label>
            </div>
          ))}
        </div>
      </div>
      <div className='flex justify-end w-full space-x-2'>
        <Button
          disabled={loading}
          variant='outline'
          onClick={() => setOpen(false)}
        >
          Cancel
        </Button>
        <Button
          disabled={loading}
          variant='primary'
          onClick={saveEvent}
        >
          Save
        </Button>
        {loading && <span className='ml-2'>Loading...</span>}
      </div>
    </div>
  );
}
