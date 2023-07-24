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

import stages from 'stages.json';

const Timeline = () => {
  const [sortedStages, setSortedStages] = useState([]);
  const [timelineDates, setTimelineDates] = useState([]);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStartX, setDragStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [cursor, setCursor] = useState('grab');
  const [isInitialScroll, setIsInitialScroll] = useState(true);

  const scrollRef = useRef(null);

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

  useEffect(() => {
    const currentDate = new Date();

    const index = timelineDates.findIndex(
      date => date.toDateString() === currentDate.toDateString()
    );

    if (isInitialScroll && index !== -1 && scrollRef.current) {
      scrollRef.current.scrollIntoView({
        inline: 'center',
        behavior: 'smooth',
      });

      setIsInitialScroll(false);
    }
  }, [isInitialScroll, timelineDates]);

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
      {timelineDates.map(date => {
        const isRequiredDate =
          date.toLocaleDateString() === new Date().toLocaleDateString();

        return (
          <Day
            key={date}
            ref={isRequiredDate ? scrollRef : null}
            isRequiredDate={isRequiredDate}
          >
            <DayDate isRequiredDate={isRequiredDate}>
              {new Date(date).toLocaleDateString().slice(0, -4)}
            </DayDate>

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
        );
      })}
    </TimelineBox>
  );
};

export default Timeline;
