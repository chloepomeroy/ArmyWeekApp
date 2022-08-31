import React, {useState, useEffect} from "react"
import LocalizedStrings from 'react-localization';

import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import listPlugin from '@fullcalendar/list';
import Grid from '@mui/material/Grid';
import Layout from "../components/layout"


var en = require('../data/enevents.json').events;
var fr = require('../data/frevents.json').events;

let strings = new LocalizedStrings({
  en: {week: "week",
  day: "day", 
  list: "list",
  events: {en}
  },
  fr: {week: "semaine", 
  day: "jour",
  list: "liste",
  events: {fr}
  }
})

export default function Cal(props) {
  const [initialLocaleCode, setInitialLocaleCode] = useState('en')

  useEffect(() => {
    if((window.navigator.language).includes("fr")){
      setInitialLocaleCode("fr")
    } else {
      setInitialLocaleCode("en")
    }      
}, [])

    return (
      <Layout>
   
        <Grid container spacing={2} alignItems="center" justifyContent="center" sx={{ flexGrow: 5, display: { xs: 'none', md: 'flex' } }}> 
          <Grid item xs={11} >          
            <FullCalendar
              plugins = {[dayGridPlugin, timeGridPlugin, interactionPlugin, listPlugin]}
              initialView = "timeGridWeek"
              initialDate = "2022-09-12"
              locale= {initialLocaleCode}
              headerToolbar = {{
                start: 'timeGridWeek,timeGridDay,listWeek',
                // center: 'title',   
                end: 'prev,next'
              }}
              buttonText={{week: strings.week, day: strings.day, list: strings.list }}
              slotMinTime='08:00'
              height="auto"
              expandRows={true} 
              navLinks={true}
              events = {strings.events[initialLocaleCode]}
              handleWindowResize={true}           
              nowIndicator
              eventTimeFormat={{ hour: "2-digit", minute: "2-digit", hour12: false }}
              slotLabelFormat={{ hour: "2-digit", minute: "2-digit", hour12: false }}
              firstDay={1}
              allDayText=""
              allDaySlot = {true}
              contentHeight="auto"
              slotDuration="00:10:00"
              eventOverlap = {false}
              eventClick = {(event) => {var eventId = event.event.id
                window.open(`/eventDetails/${eventId}`, '_self')}}
            />
          </Grid>
        </Grid>

        <Grid container spacing={2} alignItems="center" justifyContent="center" sx={{ flexGrow: 5, display: { xs: 'flex', md: 'none' } }}>
          <Grid item xs={11}>
            <FullCalendar
              plugins = {[dayGridPlugin, timeGridPlugin, interactionPlugin, listPlugin]}
              initialView = "listWeek"
              initialDate = "2022-09-12"
              locale= {initialLocaleCode}
              headerToolbar = {{
                start: 'timeGridDay,listWeek',
                // center: 'title',   
                end: 'prev,next'
              }}
              buttonText={{day: strings.day, list: strings.list }}
              slotMinTime='08:00'
              height="auto"
              expandRows={true} 
              navLinks={true}
              events = {strings.events[initialLocaleCode]}
              handleWindowResize={true}           
              nowIndicator
              eventTimeFormat={{ hour: "2-digit", minute: "2-digit", hour12: false }}
              slotLabelFormat={{ hour: "2-digit", minute: "2-digit", hour12: false }}
              firstDay={1}
              allDaySlot = {false}
              contentHeight="auto"
              slotDuration="00:10:00"
              eventOverlap = {false}
              eventClick = {(event) => {var eventId = event.event.id
                window.open(`/eventDetails/${eventId}`, '_self')}}
            />
          </Grid>
        </Grid>
      </Layout>
    )
  }

