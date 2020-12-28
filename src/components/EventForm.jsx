import React, { useState } from 'react'
import { TextField, Button } from '@material-ui/core'
import AdapterMoment from '@date-io/moment'
import DatePicker from '@material-ui/lab/DatePicker'
import LocalizationProvider from '@material-ui/lab/LocalizationProvider'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  form: {
    display: 'flex',
    flexDirection: 'column'
  }
})

const EventForm = () => {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [location, setLocation] = useState('')
  const [startDate, setStartDate] = useState(new Date())
  const [endDate, setEndDate] = useState(new Date())

  const classes = useStyles()

  const style = { variant: 'filled' }

  return (
    <form className={classes.form}>
      <TextField
        value={name}
        onChange={e => setName(e.target.value)}
        name="eventName"
        label="Nome evento"
        {...style}
      />
      <TextField
        value={description}
        onChange={e => setDescription(e.target.value)}
        name="eventDescription"
        label="Descrizione evento"
        multiline
        {...style}
      />
      <LocalizationProvider dateAdapter={AdapterMoment}>
        <DatePicker
          label="Data inizio"
          inputFormat="DD/MM/YYYY"
          value={startDate}
          onChange={setStartDate}
          renderInput={(params) => <TextField {...params} {...style} />}
        />
        <DatePicker
          label="Data fine"
          inputFormat="DD/MM/YYYY"
          value={endDate}
          onChange={setEndDate}
          renderInput={(params) => <TextField {...params} {...style} />}
        />
      </LocalizationProvider>
      <TextField
        value={location}
        onChange={e => setLocation(e.target.value)}
        name="location"
        label="Luogo"
        multiline
        {...style}
      />
      <Button variant="contained" color="primary">Salva</Button>
    </form>
  )
}

export default EventForm
