import React from "react"
import { useNavigate } from 'react-router-dom'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import listPlugin from '@fullcalendar/list'
import { useTranslation } from "react-i18next"

//Styling
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'

const en = require('../data/enevents.json').events
const fr = require('../data/frevents.json').events

export default function Cal(props) {

  const { i18n } = useTranslation(['events'])
  const { t } = useTranslation()

  let navigate = useNavigate()

  let locale = i18n.language

  function getEvents() {
    if (locale=="fr") {
      return fr
    } else {
      return en
    }
  }
  
  return (
    <>
    <Box sx={{ width: '100%', height: '100vh', bgcolor: 'white', marginTop: '70px' }}>
      <Grid container spacing={2} alignItems="center" justifyContent="center" sx={{ flexGrow: 5, display: { xs: 'none', md: 'flex' } }}> 
        <Grid item xs={11} style={{marginBottom: '76px'}} >    
          <FullCalendar
            plugins = {[dayGridPlugin, timeGridPlugin, interactionPlugin, listPlugin]}
            initialView = "timeGridWeek"
            initialDate = "2022-09-12"
            locale= {locale}
            headerToolbar = {{
              start: 'timeGridWeek,timeGridDay,listWeek',
              // center: 'title',   
              end: 'prev,next'
            }}
            buttonText={{week: t("cal_week"), day: t("cal_day"), list: t("cal_list") }}
            slotMinTime='08:00'
            height="auto"
            expandRows={true} 
            navLinks={true}
            events = {getEvents()}
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
            eventClick = {(event) => navigate(`/event/${event.event.id}`)}
          />
        </Grid>
      </Grid>

      <Grid container spacing={2} alignItems="center" justifyContent="center" sx={{ flexGrow: 5, display: { xs: 'flex', md: 'none' } }}>
        <Grid item xs={11} style={{marginBottom: '76px'}}>
          <FullCalendar
            plugins = {[dayGridPlugin, timeGridPlugin, interactionPlugin, listPlugin]}
            initialView = "listWeek"
            initialDate = "2022-09-12"
            locale= {locale}
            headerToolbar = {{
              start: 'timeGridDay,listWeek',
              // center: 'title',   
              end: 'prev,next'
            }}
            buttonText={{day: t("cal_day"), list: t("cal_list") }}
            slotMinTime='08:00'
            height="auto"
            expandRows={true} 
            navLinks={true}
            events = {getEvents()}
            handleWindowResize={true}           
            nowIndicator
            eventTimeFormat={{ hour: "2-digit", minute: "2-digit", hour12: false }}
            slotLabelFormat={{ hour: "2-digit", minute: "2-digit", hour12: false }}
            firstDay={1}
            allDaySlot = {false}
            contentHeight="auto"
            slotDuration="00:10:00"
            eventOverlap = {false}
            eventClick = {(event) => navigate(`/event/${event.event.id}`)}
          />
        </Grid>
      </Grid>
      </Box>
    </>
  )
}

