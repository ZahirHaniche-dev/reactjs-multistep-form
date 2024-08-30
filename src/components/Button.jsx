import React from 'react';

export default function Button({ bgColor, textColor, text }) {
  return (
    <button
      type="submit"
      className={`flex justify-center py-2 px-4 border border-transparent rounded-md 
        shadow-sm text-xs font-medium ${textColor} ${bgColor} 
        focus:outline-none focus:ring-2 focus:ring-offset-2`}
    >
      {text}
    </button>
  );
}
