import React from 'react'
import { Avatar, Button, TextField, FormControlLabel, Checkbox, Link, Typography, Container } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  avatar: { margin: theme.spacing(1), backgroundColor: theme.palette.secondary.main },
  form: { width: '100%', marginTop: theme.spacing(1) },
  submit: { margin: theme.spacing(3, 0, 2) }
}))

const Login = () => {
  const classes = useStyles()

  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Link href="/admin">
            <Button fullWidth variant="contained" color="primary" className={classes.submit}>
              Sign In
            </Button>
          </Link>
        </form>
      </div>
    </Container>
  )
}

export default Login
