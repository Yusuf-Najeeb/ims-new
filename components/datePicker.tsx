"use client";

import React from "react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Button } from "@/components/ui/button";
import { CiCalendar } from "react-icons/ci";

import { cn } from "@/lib/utils";

interface DatePickerProps {
  date: Date | null;
  setDate: (date: Date | null) => void;
  className?: string;
}

export default function DatePicker({
  date,
  setDate,
  className,
}: DatePickerProps) {
  return (
    <div className={cn("relative", className)}>
      <ReactDatePicker
        selected={date}
        onChange={(date: Date | null) => setDate(date)}
        customInput={
          <Button
            variant="outline"
            className="w-full justify-start text-left font-normal"
          >
            <CiCalendar className="mr-2" />
            {date ? date.toLocaleDateString() : <span>Pick a date</span>}
          </Button>
        }
        dateFormat="MMMM d, yyyy"
        isClearable
        placeholderText="Pick a date"
        showPopperArrow={false}
        className="w-full min-w-[400px] sm:min-w-[200px]"
      />
    </div>
  );
}
