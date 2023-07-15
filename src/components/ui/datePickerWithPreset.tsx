import React from 'react';

interface IProps {
  onChange: (dateValue: string) => void;
  id: string;
}

function DatePickerWithPresets({ onChange, id }: IProps) {
  // Your DatePickerWithPresets component implementation
  // Make sure to use the `onChange` prop for the input field
  return (
    <input
      type="date"
      id={id}
      className="mt-2"
      onChange={(e) => onChange(e.target.value)}
    />
  );
}

export { DatePickerWithPresets };
