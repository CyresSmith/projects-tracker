import React, { useEffect, useRef, useState } from 'react';
import { TimelineBox, Day, DayDate } from './Timeline.styled';

const Timeline = ({ stages = [] }) => {
  const [sortedStages, setSortedStages] = useState([]);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [timelineDates, setTimelineDates] = useState([]);

  const [isDragging, setIsDragging] = useState(false);
  const [dragStartX, setDragStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [cursor, setCursor] = useState('grab');

  useEffect(() => {
    if (stages.length === 0) return;

    const sortedStages = [...stages].sort(
      (a, b) => new Date(a.dateStart) - new Date(b.dateStart)
    );
    setSortedStages(sortedStages);

    const { startDate, endDate } = sortedStages.reduce((acc, stage) => {
      const dateStart = new Date(stage.dateStart);
      const deadline = new Date(stage.deadline);

      if (!acc.startDate || dateStart < acc.startDate) {
        acc.startDate = dateStart;
      }

      if (!acc.endDate || deadline > acc.endDate) {
        acc.endDate = deadline;
      }

      return acc;
    }, {});

    // const startDate = new Date(sortedStages[0].dateStart);
    // setStartDate(startDate);

    // const endDate = new Date(sortedStages[sortedStages.length - 1].deadline);
    // setEndDate(endDate);

    const timelineDates = [];
    const currentDate = new Date(startDate);
    while (currentDate <= endDate) {
      timelineDates.push(new Date(currentDate));
      currentDate.setDate(currentDate.getDate() + 1);
    }
    setTimelineDates(timelineDates);
  }, [stages]);

  const handleMouseDown = e => {
    setIsDragging(true);
    setDragStartX(e.clientX);
    setScrollLeft(e.currentTarget.scrollLeft);
    setCursor('grabbing');
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    setCursor('grab');
  };

  const handleMouseMove = e => {
    if (!isDragging) return;
    const dx = e.clientX - dragStartX;
    e.currentTarget.scrollLeft = scrollLeft - dx;
  };

  return (
    <TimelineBox
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      cursor={cursor}
    >
      {timelineDates.map(date => (
        <Day key={date}>
          <DayDate>{new Date(date).toLocaleDateString().slice(0, -4)}</DayDate>
        </Day>
      ))}
    </TimelineBox>
  );
};

export default Timeline;
