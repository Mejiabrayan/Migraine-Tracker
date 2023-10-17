'use client';

import config from '@/config';
import { Checkbox } from './ui/checkbox';
import { useState } from 'react';
import { Event } from '@/types';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Slider } from './ui/slider';
import { DatePicker } from './DatePicker';
import { Label } from './ui/label';

type Props = {
  setEvents: React.Dispatch<React.SetStateAction<Event[]>>;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Form({ setEvents, setOpen }: Props) {
  const [loading, setLoading] = useState<boolean>(false); // Ajout du type boolean
  const [error, setError] = useState<string | null>(null); // Ajout du type string | null
  const [event, setEvent] = useState<Event>({
    user_id: undefined,
    date: undefined,
    duration: 1,
    locations: [],
    symptomes: [],
    medications: [],
    count: 0,
  });

  return (
    <div className='flex flex-col items-start space-y-4'>
      <p className='text-gray-600 dark:text-gray-400 text-base'>
        When was the last migraine?
      </p>
      <DatePicker />
      <p className='text-gray-600 dark:text-gray-400 text-base'>
        Evaluate your pain (from 0 to 10)
      </p>
      <Slider defaultValue={[33]} max={100} step={1} className='w-full' />
      <p className='text-gray-600 dark:text-gray-400 text-base'>
        How long did it last?
      </p>
      <Slider defaultValue={[33]} max={100} step={1} className='w-full' />
      <p className='text-gray-600 dark:text-gray-400 text-base'>Symptoms</p>
      <div className='grid grid-cols-2 gap-2'>
        {config.symptomes.map((symptom) => (
          <Label key={symptom} className='text-gray-600 dark:text-gray-400'>
            <Checkbox name={symptom} value={symptom} />
            {symptom}
          </Label>
        ))}
      </div>
      <p className='text-gray-600 dark:text-gray-400 text-base'>Locations</p>
      <div className='grid grid-cols-2 gap-2'>
        {config.locations.map((location) => (
          <Label key={location} className='text-gray-600 dark:text-gray-400'>
            <Checkbox name={location} value={location} />
            {location}
          </Label>
        ))}
      </div>
    </div>
  );
}
