import React, { useEffect, useRef, useState } from 'react';
import {
  TimelineBox,
  Day,
  DayDate,
  StageBox,
  StageInfo,
  StageName,
  StageDates,
} from './Timeline.styled';

const Timeline = ({ stages = [] }) => {
  const [sortedStages, setSortedStages] = useState([]);
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

          {sortedStages.map((stage, i) => {
            const today = new Date();
            const deadline = new Date(stage.deadline);
            const start = new Date(stage.dateStart);

            const status = () => {
              switch (true) {
                case today > deadline:
                  return 'completed';

                case today > start && today < deadline:
                  return 'active';

                default:
                  return 'pending';
              }
            };

            const nameCrop = name => {
              if (name.length > 17) {
                return `${name.slice(0, 17)}...`;
              }

              return name;
            };

            if (date.getTime() === start.getTime()) {
              const duration = Math.floor(
                (deadline - start) / (1000 * 60 * 60 * 24)
              );

              return (
                <StageBox
                  key={stage.id}
                  duration={duration}
                  numberOfStages={stages.length}
                  index={i}
                  status={status()}
                >
                  <StageInfo numberOfStages={stages.length}>
                    <StageName status={status()}>
                      {nameCrop(stage.name)}
                    </StageName>
                    <StageDates>
                      {start.toLocaleDateString()}
                      {' - '}
                      {deadline.toLocaleDateString()}
                    </StageDates>
                  </StageInfo>
                </StageBox>
              );
            }
          })}
        </Day>
      ))}
    </TimelineBox>
  );
};

export default Timeline;
