import React, { useState } from 'react';
import { Box, Button, Grid, Stack } from '@mui/material';
import './Calendar.scss';
import { EventProps } from 'pages/Props/Event';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { CalendarMonth } from '@mui/icons-material';

interface EventDataProps {
  key: number; // The index of the event which this object refects to in the events list.
  beginDate: Date; // The start date of the event.
  endDate: Date; // The end date of the event.
  blocked: boolean; // Wheter take part of a chain of simultaneous events which use all the horizontal space of a Day component.
  size: number; // Relative horizontal size of the event.
  sameTimeEvent: Array<number>; // List of simultaneous events.
  coupleEvents: Array<Array<number>>; // List of simultaneous events which have all a common area of time.
}

/**
 * The EventBlock component, which is an event in the calendar display.
 * @param day The number of the day in the week.
 * @param event The event object with the event data.
 * @returns The button to display, already placed and resized.
 */
function EventBlock(props: { day: number; event: EventProps }) {
  const { day, event } = props;
  const beginDate = new Date(event.date);
  const endDate = new Date(event.end_date);
  let todayBegin = false;
  let startTime = 24;

  // Set the time when the event begins in the day.
  if (beginDate.getDay() === day % 7) {
    todayBegin = true;
    if (
      beginDate.getHours() !== 0 ||
      beginDate.getMinutes() !== 0 ||
      beginDate.getSeconds() !== 0
    ) {
      startTime =
        23 -
        beginDate.getHours() +
        (59 - beginDate.getMinutes()) / 60 +
        (60 - beginDate.getSeconds()) / 3600;
    }
  }

  // Set the duration of the event.
  let duration;
  console.log(day, endDate);
  if (todayBegin) {
    duration = (endDate.getTime() - beginDate.getTime()) / 3600000;
  } else if (endDate.getDay() === day % 7) {
    duration =
      endDate.getHours() +
      endDate.getMinutes() / 60 +
      endDate.getSeconds() / 3600;
  } else {
    duration = 24;
  }
  return (
    <Button
      variant="contained"
      style={{
        position: 'absolute',
        minWidth: `1px`,
        // width: `${(120 * event.effectiveSize) / event.globalSize}px`,
        height: `${Math.min(duration, startTime) * 20}px`,
        padding: '0px',
        transform: `translate(${
          -60 + (120 * event.position) / event.globalSize
        }px, -${startTime * 20}px)`,
      }}
    >
      {event.title}
    </Button>
  );
}

/**
 * Function that creates the TimeBlock component, which are the backround lines in the calendar.
 * @param startTime The hour value, to set where and how the component has to be placed.
 * @returns The TimeBlock component.
 */
function TimeBlock(props: { startTime: number }) {
  const { startTime } = props;

  if (startTime % 2 === 0) {
    return <Box className="TimeBlockEven"></Box>;
  }

  return <Box className="TimeBlockOdd"></Box>;
}

/**
 * Function that creates the DayInfos component, which display the hours in the day.
 * @return The DayInfos component.
 */
function DayInfos() {
  return (
    <div style={{ display: 'block' }}>
      <p>0</p>
      <p>2</p>
      <p>4</p>
      <p>6</p>
      <p>8</p>
      <p>10</p>
      <p>12</p>
      <p>14</p>
      <p>16</p>
      <p>18</p>
      <p>20</p>
      <p>22</p>
    </div>
  );
}

/**
 * The Day component which contains all the TimeBlocks and EventBlocks of this day.
 * @param dayValue The value of the day in the week.
 * @param day The day in the week.
 * @param events The list of events in corresponding day.
 * @returns The Day component.
 */
function Day(props: {
  dayValue: number;
  day: string;
  events: Array<EventProps>;
}) {
  const { dayValue, day, events } = props;

  const dayChain = [];
  for (let hour = 0; hour < 24; hour++) {
    dayChain.push(<TimeBlock key={hour} startTime={hour}></TimeBlock>);
  }

  return (
    <div id={day} style={{ display: 'block' }}>
      {day}
      {dayChain}
      {events.map((event) => (
        <EventBlock key={event.slug} day={dayValue} event={event} />
      ))}
    </div>
  );
}

/**
 * Function that check if a date is between two others.
 * @param eventDate The date to check.
 * @param beginDate The minimal date.
 * @param endDate The maximal date.
 * @returns The boolean that tells whether the date is between the others
 */
function betweenDate(eventDate: Date, beginDate: Date, endDate: Date) {
  if (beginDate <= eventDate && eventDate < endDate) {
    return true;
  }
  return false;
}

/**
 * Function that sort event date-wise.
 * @param events The list of the events to sort.
 * @param beginDate The minimal date.
 * @param endDate The maximal date.
 * @returns The list of events which take place between the beginDate and the Date.
 */
function getEventWithDate(
  events: Array<EventProps>,
  beginDate: Date,
  endDate: Date
) {
  const sortedEvents = new Array<EventProps>();
  events.forEach((event) => {
    console.log(event.date);
    // Sort with end date too.
    if (
      betweenDate(new Date(event.date), beginDate, endDate) ||
      betweenDate(new Date(event.end_date), beginDate, endDate)
    ) {
      sortedEvents.push(event);
    }
  });
  console.log(sortedEvents);
  return sortedEvents;
}

/**
 * Function to get if the events take place in same time.
 * @param event The first eventData.
 * @param event2Compare The second eventData, to compare with the first one.
 * @returns If the events are ocurring in same time.
 */
function sameTime(event: EventDataProps, event2Compare: EventDataProps) {
  if (
    (event.beginDate < event2Compare.beginDate &&
      event2Compare.beginDate < event.endDate) ||
    (event.beginDate < event2Compare.endDate &&
      event2Compare.beginDate < event.endDate) ||
    (event2Compare.beginDate < event.beginDate &&
      event.beginDate < event2Compare.endDate) ||
    (event2Compare.beginDate < event.endDate &&
      event.beginDate < event2Compare.endDate)
  ) {
    return true;
  }

  return false;
}

/**
 * A function that returns the pgcd between 2 numbers.
 * @param a The first number.
 * @param b The second number.
 * @returns The pgcd of the 2 numbers.
 */
function pgcd(a: number, b: number) {
  let dividende = a;
  let reste = b;
  let temp;
  const maxIter = 1000;
  let iter = 0;
  while (reste !== 0 && iter < maxIter) {
    temp = dividende % reste;
    dividende = reste;
    reste = temp;
    iter += 1;
  }
  if (reste !== 0) {
    console.warn('Un pgcd a échoué');
  }
  return dividende;
}

/**
 * A function that returns the ppcm between 2 numbers.
 * @param a The first number.
 * @param b The second number.
 * @returns The ppcm of the 2 numbers.
 */
function ppcm(a: number, b: number) {
  return (a * b) / pgcd(a, b);
}

/**
 * Function that returns if an event have a common time area with a list of events that have a common time area.
 * @param key The key of the event to check.
 * @param eventsList The list of key of the events which with the event has to be checked.
 * @param eventsData The list of all eventData.
 * @returns If all the events have a common time area.
 */
function allSameTime(
  key: number,
  eventsList: Array<number>,
  eventsData: Array<EventDataProps>
) {
  let areSameTime = true;
  let iterator = 0;
  while (areSameTime && iterator < eventsList.length) {
    areSameTime = sameTime(eventsData[key], eventsData[eventsList[iterator]]);
    iterator += 1;
  }
  return areSameTime;
}

/**
 * Function that returns if all the value of an array are in another one.
 * @param ar1 The array to check if the values are in the other.
 * @param ar2 The array to check if it contains the values.
 * @returns If the values of the first array are in the second.
 */
function isInArray(ar1: Array<number>, ar2: Array<number>) {
  let same = true;
  let iterator = 0;
  while (same && iterator < ar1.length) {
    same = ar2.includes(ar1[iterator]);
    iterator += 1;
  }
  return same;
}

/**
 * Get couples of events with maximal events foreach event and set the size of each event with it.
 * @param events List of events.
 * @param eventsData List of events data.
 * @returns The couples of events with maximal size foreach events.
 */
function blockedChains(
  events: Array<EventProps>,
  eventsData: Array<EventDataProps>
) {
  const currentSizeObject = {
    maxSize: 0,
    blockedChains: [],
  };
  let previousMaxSize;
  const blockedEventsChain = [];
  let globalSize = 1;
  eventsData.forEach((eventData) => {
    currentSizeObject.maxSize = 0;
    eventData.coupleEvents.forEach((eventList) => {
      currentSizeObject.maxSize = Math.max(
        eventList.length,
        currentSizeObject.maxSize
      );
      if (currentSizeObject.maxSize !== previousMaxSize) {
        currentSizeObject.blockedChains = [];
        previousMaxSize = currentSizeObject.maxSize;
      }
      if (eventList.length === currentSizeObject.maxSize) {
        currentSizeObject.blockedChains.push(eventList);
      }
    });
    currentSizeObject.blockedChains.forEach((chain) => {
      let j = 0;
      while (
        j < blockedEventsChain.length &&
        !isInArray(chain, blockedEventsChain[j])
      ) {
        j += 1;
      }
      if (j >= blockedEventsChain.length) {
        blockedEventsChain.push(chain);
      }
    });
    eventData.size = currentSizeObject.maxSize;
    globalSize = ppcm(currentSizeObject.maxSize, globalSize);
  });

  eventsData.forEach((currentEventData) => {
    events[currentEventData.key].globalSize = globalSize;
    events[currentEventData.key].effectiveSize =
      globalSize / currentEventData.size;
  });

  return blockedEventsChain;
}

/**
 * Create list of couples of events that occurs in same time and store them in eventData.
 * @param eventsData List of events data.
 */
function createCoupleEvents(eventsData: Array<EventDataProps>) {
  let coupleEventsLength;
  eventsData.forEach((eventData) => {
    for (let j = 0; j < eventData.sameTimeEvent.length; j++) {
      coupleEventsLength = eventData.coupleEvents.length;
      for (let k = 0; k < coupleEventsLength; k++) {
        if (allSameTime(j, eventData.coupleEvents[k], eventsData)) {
          eventData.coupleEvents.push(
            eventData.coupleEvents[k].concat([eventData.sameTimeEvent[j]])
          );
        }
      }
      eventData.coupleEvents.push([eventData.sameTimeEvent[j]]);
    }
  });
}

/**
 * Function that resizes all events to take the maximal horizontal space.
 * @param blockedEventsChain List of events chain that have to take all horizontal space.
 * @param events List of events.
 * @param eventsData List of events data.
 */
function eventSizeReajust(
  blockedEventsChain: Array<Array<number>>,
  events: Array<EventProps>,
  eventsData: Array<EventDataProps>
) {
  let event2reajust;
  let size2Add;
  let sizeUsed;
  blockedEventsChain.forEach((eventChain) => {
    sizeUsed = 0;
    event2reajust = [];
    eventChain.forEach((eventKey) => {
      sizeUsed += events[eventKey].effectiveSize;
      if (!eventsData[eventKey].blocked) {
        event2reajust.push(eventKey);
      }
    });
    if (event2reajust.length !== 0) {
      size2Add = (events[0].globalSize - sizeUsed) / event2reajust.length;
      event2reajust.forEach((eventKey) => {
        events[eventKey].effectiveSize += size2Add;
        eventsData[eventKey].blocked = true;
      });
    }
  });
}

/**
 * A function that check if the placement of an event corresponds with an event chain. If the event is not already placed, this function places it.
 * @param events List of events.
 * @param chain List of keys of current simultaneous events that are placed.
 * @param eventsBlockedChain List of chains with simultaneous events that have to be placed.
 * @param position The position where the event has to be placed.
 * @param select The current index in eventsBlockedChain[0] of the key of the event that is placed.
 * @returns Then next index in eventsBlockedChain[0] of the key of the event that will be placed and a boolean to tell if the chain is totally placed
 */
function placeChainEvent(
  events: Array<EventProps>,
  chain: Array<number>,
  eventsBlockedChain: Array<Array<number>>,
  position: number,
  select: number
) {
  let newSelect = select;
  let chainPlaced = false;
  let change = false;
  let eventPlaced = true;
  let tempEventBlockedChain;
  // If the event has not been already placed yet
  // Then checked if the event can be placed
  if (!events[eventsBlockedChain[0][select]].placed) {
    change = true;
    events[eventsBlockedChain[0][select]].placed = true;
    events[eventsBlockedChain[0][select]].position = position;
  } else if (events[eventsBlockedChain[0][select]].position !== position) {
    newSelect += 1;
    eventPlaced = false;
  }

  // Only if the current event has been able to be placed, while the event placed doesn't able a good placement for all events, change the event which is placed in position.
  if (eventPlaced) {
    tempEventBlockedChain = eventsBlockedChain.slice();
    tempEventBlockedChain[0] = eventsBlockedChain[0]
      .slice(0, select)
      .concat(eventsBlockedChain[0].slice(select + 1));
    if (
      !placeEvents(
        events,
        chain,
        tempEventBlockedChain,
        position + events[eventsBlockedChain[0][select]].effectiveSize
      )
    ) {
      if (change) {
        events[eventsBlockedChain[0][select]].placed = false;
      }
      newSelect += 1;
    } else {
      chainPlaced = true;
    }
  }
  return { newSelect, chainPlaced };
}

/**
 * Recursive function that set an event horizontal position (when multiples events occur in same time).
 * @param events List of events.
 * @param chain List of keys of current simultaneous events that are placed.
 * @param eventsBlockedChain List of chains with simultaneous events that have to be placed.
 * @param position The position where the event has to be placed.
 * @returns If an event has been able to be placed.
 */
function placeEvents(
  events: Array<EventProps>,
  chain: Array<number>,
  eventsBlockedChain: Array<Array<number>>,
  position: number
) {
  // If all the events have been rightfully placed, return true
  if (eventsBlockedChain.length === 0) {
    return true;
  }

  // If the first chain of events has been rightfully placed, return true
  if (eventsBlockedChain[0].length === 0) {
    return true;
  }

  let select = 0;
  let chainPlaced = false;
  let allPlaced = false;
  let newValues;
  while (!allPlaced) {
    while (!chainPlaced && select < eventsBlockedChain[0].length) {
      newValues = placeChainEvent(
        events,
        chain,
        eventsBlockedChain,
        position,
        select
      );
      select = newValues.newSelect;
      chainPlaced = newValues.chainPlaced;
    }
    if (!chainPlaced) {
      return false;
    }

    // When all following events have been rightfully placed, according to simultaneous events chain, enable the end of the placement phase.
    if (
      placeEvents(events, eventsBlockedChain[1], eventsBlockedChain.slice(1), 0)
    ) {
      allPlaced = true;
    } else {
      return false;
    }
  }
  return true;
}

/**
 * Function that will handle the placement process of the events in a day.
 * @param events List of the events.
 */
function setSameTimeEvents(events: Array<EventProps>) {
  const eventsData = new Array<EventDataProps>();
  for (let i = 0; i < events.length; i++) {
    events[i].placed = false;

    // Create an eventData object which will be used to treat simultaneous events.
    eventsData.push({
      key: i,
      beginDate: new Date(events[i].date),
      endDate: new Date(events[i].end_date),
      blocked: false,
      size: 1,
      sameTimeEvent: [],
      coupleEvents: [],
    });
  }

  // Set all same time events foreach events.
  for (let i = 0; i < events.length; i++) {
    eventsData.forEach((eventData) => {
      if (sameTime(eventsData[i], eventData)) {
        eventsData[i].sameTimeEvent.push(eventData.key);
      }
    });
  }

  // Create list of couples of events that occurs in same time and store them in eventData.
  createCoupleEvents(eventsData);

  // Get couples of events with maximal events foreach event and set the size of each event with it.
  const blockedEventsChain = blockedChains(events, eventsData);

  // Set the blocked attribute to true for all events that take part of a couple chain that takes all horizontal space.
  let sizeUsed;
  blockedEventsChain.forEach((eventChain) => {
    sizeUsed = 0;
    eventChain.forEach((eventKey) => {
      sizeUsed += events[eventKey].effectiveSize;
    });
    if (sizeUsed === events[0].globalSize) {
      eventChain.forEach((eventKey) => {
        eventsData[eventKey].blocked = true;
      });
    }
  });

  // Reajust the size of events to use all the horizontal space
  eventSizeReajust(blockedEventsChain, events, eventsData);

  // Try to place the events optimally
  if (!placeEvents(events, blockedEventsChain[0], blockedEventsChain, 0)) {
    console.warn("Some events haven't been rightfully placed");
  }
}

function isInDay(event, mondayDate, sortEvents) {
  const checkBeginDate = new Date(
    mondayDate.getFullYear(),
    mondayDate.getMonth(),
    mondayDate.getDate()
  );
  const checkEndDate = new Date(
    mondayDate.getFullYear(),
    mondayDate.getMonth(),
    mondayDate.getDate()
  );
  checkEndDate.setDate(checkEndDate.getDate() + 1);
  const eventBeginDate = new Date(event.date);
  const eventEndDate = new Date(event.end_date);
  if (
    betweenDate(eventBeginDate, checkBeginDate, checkEndDate) ||
    betweenDate(checkBeginDate, eventBeginDate, eventEndDate)
  ) {
    sortEvents[0].push(event);
    console.log('je push');
  }
  for (let i = 1; i < 7; i++) {
    checkBeginDate.setDate(checkBeginDate.getDate() + 1);
    checkEndDate.setDate(checkEndDate.getDate() + 1);
    console.log(eventBeginDate, eventEndDate, checkBeginDate, checkEndDate);
    if (
      betweenDate(eventBeginDate, checkBeginDate, checkEndDate) ||
      betweenDate(checkBeginDate, eventBeginDate, eventEndDate)
    ) {
      sortEvents[i].push({ ...event });
      console.log('je push');
    }
  }
}

/**
 * Function that sorted event in days of the week.
 * @param oldSortEvents The list of events to sort.
 * @returns The list of events, sorted by day.
 */
function sortInWeek(oldSortEvents: Array<EventProps>, mondayDate) {
  const sortEvents = [];
  for (let i = 0; i < 7; i++) {
    sortEvents.push(new Array<EventProps>());
  }
  oldSortEvents.forEach((event) => {
    isInDay(event, mondayDate, sortEvents);
  });
  sortEvents.forEach((eventsList) => {
    console.log(eventsList);
    setSameTimeEvents(eventsList);
  });
  return sortEvents;
}

function DateBox(props: { date: Date; endDate: Date }) {
  const { date, endDate } = props;
  const sunday = new Date(
    endDate.getFullYear(),
    endDate.getMonth(),
    endDate.getDate()
  );
  sunday.setDate(sunday.getDate() - 1);
  return (
    <div>
      <Button
        variant="outlined"
        onClick={() => {
          console.log('tap');
        }}
      >
        {`${date.toLocaleDateString('fr-FR', {
          weekday: 'long',
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        })} au `}
        {sunday.toLocaleDateString('fr-FR', {
          weekday: 'long',
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        })}
        <CalendarMonth></CalendarMonth>
      </Button>
    </div>
  );
}

function ChangeWeek(props: {
  action: 'previous' | 'next';
  beginDate: Date;
  endDate: Date;
  updateBegin: any;
  updateEnd: any;
}) {
  const { action, beginDate, endDate, updateBegin, updateEnd } = props;
  if (action === 'previous') {
    return (
      <Button
        variant="outlined"
        onClick={() => {
          const newBeginDate = new Date(
            beginDate.getFullYear(),
            beginDate.getMonth(),
            beginDate.getDate()
          );
          const newEndDate = new Date(
            endDate.getFullYear(),
            endDate.getMonth(),
            endDate.getDate()
          );
          newBeginDate.setDate(newBeginDate.getDate() - 7);
          updateBegin(newBeginDate);
          newEndDate.setDate(endDate.getDate() - 7);
          updateEnd(newEndDate);
        }}
      >
        <ArrowBackIosNewIcon></ArrowBackIosNewIcon>
      </Button>
    );
  }
  if (action === 'next') {
    return (
      <Button
        variant="outlined"
        onClick={() => {
          const newBeginDate = new Date(
            beginDate.getFullYear(),
            beginDate.getMonth(),
            beginDate.getDate()
          );
          const newEndDate = new Date(
            endDate.getFullYear(),
            endDate.getMonth(),
            endDate.getDate()
          );
          newBeginDate.setDate(newBeginDate.getDate() + 7);
          updateBegin(newBeginDate);
          newEndDate.setDate(endDate.getDate() + 7);
          updateEnd(newEndDate);
        }}
      >
        <ArrowForwardIosIcon></ArrowForwardIosIcon>
      </Button>
    );
  }
  console.warn('Appel de ChangeWeek mal effectué');
  return <p>Error</p>;
}

function ChooseWeek(props: {
  beginDate: Date;
  endDate: Date;
  updateBegin: any;
  updateEnd: any;
}) {
  const { beginDate, endDate, updateBegin, updateEnd } = props;
  return (
    <div id="day" style={{ display: 'flex' }}>
      <ChangeWeek
        action="previous"
        beginDate={beginDate}
        endDate={endDate}
        updateBegin={updateBegin}
        updateEnd={updateEnd}
      ></ChangeWeek>
      <Stack spacing={3}>
        <DateBox date={beginDate} endDate={endDate}></DateBox>
      </Stack>
      <ChangeWeek
        action="next"
        beginDate={beginDate}
        endDate={endDate}
        updateBegin={updateBegin}
        updateEnd={updateEnd}
      ></ChangeWeek>
    </div>
  );
}

/**
 * The calendar component which will contains all the day and events components.
 * @param event The list of events.
 * @returns The calendar component.
 */
function Calendar(props: { events: Array<EventProps> }) {
  const { events } = props;

  console.log(events);

  // Selection day to implement
  console.log('implémenter la sélection des jours');

  const tempMondayOfTheWeek = new Date();
  tempMondayOfTheWeek.setDate(
    tempMondayOfTheWeek.getDate() - ((tempMondayOfTheWeek.getDay() - 1) % 7)
  );

  const tempEndSundayOfTheWeek = new Date(
    tempMondayOfTheWeek.getFullYear(),
    tempMondayOfTheWeek.getMonth(),
    tempMondayOfTheWeek.getDate()
  );
  tempEndSundayOfTheWeek.setDate(tempEndSundayOfTheWeek.getDate() + 7);

  const [beginOfWeek, setBeginOfWeek] = useState(
    new Date(
      tempMondayOfTheWeek.getFullYear(),
      tempMondayOfTheWeek.getMonth(),
      tempMondayOfTheWeek.getDate()
    )
  );
  const [endOfWeek, setEndOfWeek] = useState(
    new Date(
      tempEndSundayOfTheWeek.getFullYear(),
      tempEndSundayOfTheWeek.getMonth(),
      tempEndSundayOfTheWeek.getDate()
    )
  );

  console.log(beginOfWeek, endOfWeek);
  let sortEvents = getEventWithDate(events, beginOfWeek, endOfWeek);

  // Delete when end_date added
  console.log('endDate à virer');
  sortEvents.forEach((event) => {
    if (event.end_date === null) {
      event.end_date = 'June 10, 2023 19:10:34';
    }
  });
  //

  sortEvents = sortInWeek(sortEvents, beginOfWeek);
  return (
    <>
      <p>Le calendrier</p>
      <ChooseWeek
        key="ChooseWeekComponent"
        beginDate={beginOfWeek}
        endDate={endOfWeek}
        updateBegin={setBeginOfWeek}
        updateEnd={setEndOfWeek}
      ></ChooseWeek>
      <div id="Calendar" style={{ display: 'flex' }}>
        <Grid container spacing={0} md={12}>
          <Grid item md={1}>
            <DayInfos />
          </Grid>
          {[
            'Lundi',
            'Mardi',
            'Mercredi',
            'Jeudi',
            'Vendredi',
            'Samedi',
            'Dimanche',
          ].map((day, number) => {
            return (
              <Grid item md={1} key={day}>
                <Day
                  key={day}
                  dayValue={number + 1}
                  day={day}
                  events={sortEvents[number]}
                />
              </Grid>
            );
          })}
        </Grid>
      </div>
    </>
  );
}

export default Calendar;
