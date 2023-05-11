import { useState } from "react";
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CoPresentRoundedIcon from '@mui/icons-material/CoPresentRounded';
import Axios from "axios";
const theme = createTheme();

export default function SignInSide() {

  const [data1, setdata1] = useState("");
  const [data2, setdata2] = useState("");
  const [data3, setdata3] = useState("");
  const [data4, setdata4] = useState("");
  const [data5, setdata5] = useState("");
  const [data6, setdata6] = useState("");
  const [data7, setdata7] = useState("");
  const [data8, setdata8] = useState("");
  const [data9, setdata9] = useState("");
  const [data10, setdata10] = useState("");


  const add = async (event) => {
    event.preventDefault();
    try {
    const res = await Axios.post("https://itchy-fox-crown.cyclic.app/addinformation", {
        data1: data1,
        data2: data2,
        data3: data3,
        data4: data4,
        data5: data5,
        data6: data6,
        data7: data7,
        data8: data8,
        data9: data9,
        data10: data10
      });
      if (res.data.status === "success") {
        alert("success");
        window.location = "/home";
      } else {
       alert("Error");
      }
    } catch (err) {
      alert("Error2");
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://i.pinimg.com/originals/bb/25/4d/bb254deb08649dab0e14903d3c3789f4.png)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <CoPresentRoundedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Register
            </Typography>
            <Box noValidate  sx={{ mt: 2 }}>
            <form onSubmit={add}>
            <Grid container spacing={2}>
            <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="Cardnumber"
                  label="เลขบัตรประชาชน"
                  type="number"
                  id="Cardnumber"
                  autoComplete="Cardnumber"
                  onChange={(event) => {
                    setdata1(event.target.value);
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="ชื่อ"
                  onChange={(event) => {
                    setdata2(event.target.value);
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="นามสกุล"
                  name="lastName"
                  autoComplete="family-name"
                  onChange={(event) => {
                    setdata3(event.target.value);
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="nickname"
                  required
                  fullWidth
                  id="nickname"
                  label="ชื่อเล่น"
                  onChange={(event) => {
                    setdata4(event.target.value);
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="age"
                  label="อายุ"
                  name="age"
                  type="number"
                  autoComplete="family-name"
                  onChange={(event) => {
                    setdata5(event.target.value);
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="Allergicfood"
                  label="อาหารที่แพ้"
                  name="Allergicfood"
                  autoComplete="Allergicfood"
                  onChange={(event) => {
                    setdata6(event.target.value);
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="Address"
                  label="ที่อยู่"
                  name="Address"
                  autoComplete="Address"
                  onChange={(event) => {
                    setdata7(event.target.value);
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="Parentname"
                  label="ชื่อ-นามสกุล ผู้ปกครอง"
                  id="Parentname"
                  autoComplete="Parentname"
                  onChange={(event) => {
                    setdata8(event.target.value);
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="email"
                  label="อีเมล"
                  id="email"
                  autoComplete="email"
                  onChange={(event) => {
                    setdata9(event.target.value);
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="phone"
                  label="เบอร์โทรศัพท์"
                  id="phone"
                  type="number"
                  autoComplete="phone"
                  onChange={(event) => {
                    setdata10(event.target.value);
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="Did you check that the information is complete and correct?"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            </form>
          </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}