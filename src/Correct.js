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
import EditNoteOutlinedIcon from '@mui/icons-material/EditNoteOutlined';
import { useState, useEffect } from "react";
import Axios from "axios";
const theme = createTheme();

function SignInSide() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      cardnumber: data.get('cardnumber'),
    });
  };



  const [showdata1, showsetdata1] = useState('');
  const [showdata2, showsetdata2] = useState("");
  const [showdata3, showsetdata3] = useState("");
  const [showdata4, showsetdata4] = useState("");
  const [showdata5, showsetdata5] = useState(0);
  const [showdata6, showsetdata6] = useState("");
  const [showdata7, showsetdata7] = useState("");
  const [showdata8, showsetdata8] = useState("");
  const [showdata9, showsetdata9] = useState("");
  const [showdata10, showsetdata10] = useState("");

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


  const update = async (event) => {
    event.preventDefault();
    try {
      const token = localStorage.getItem('token');
      Axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      Axios.defaults.headers.post["Content-Type"] = "application/json";
    const res = await Axios.post("https://itchy-fox-crown.cyclic.app/updateinformation", {
        data1: showdata1,
        data2: showdata2,
        data3: showdata3,
        data4: showdata4,
        data5: showdata5,
        data6: showdata6,
        data7: showdata7,
        data8: showdata8,
        data9: showdata9,
        data10: showdata10
      });
      if (res.data.status === "success") {
       alert("success");
       localStorage.removeItem("token");
       window.location = "/home";
      } else {
       alert("Error");
       localStorage.removeItem("token");
       window.location = "/login";
      }
    } catch (err) {
      alert("Error2");
      localStorage.removeItem("token");
      window.location = "/login";
    }
  };


  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      Axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      Axios.defaults.headers.post["Content-Type"] = "application/json";
      Axios.get("https://itchy-fox-crown.cyclic.app/getinformation").then((response) => {
        showsetdata1(response.data[0].cardnumber);
        showsetdata2(response.data[0].name);
        showsetdata3(response.data[0].surname);
        showsetdata4(response.data[0].nickname);
        showsetdata5(response.data[0].age);
        showsetdata6(response.data[0].address);
        showsetdata7(response.data[0].parentname);
        showsetdata8(response.data[0].phone);
        showsetdata9(response.data[0].email);
        showsetdata10(response.data[0].allergicfood);
      });
    }else{
      window.location = "/login";
    }
  }, []);

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
            backgroundImage: 'url(https://i.pinimg.com/originals/68/4e/47/684e477e5fa9d3d06c8187e1d5593c6b.png)',
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
              <EditNoteOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Correct
            </Typography>
            <Box noValidate  sx={{ mt: 2 }}>
            <form onSubmit={update}>
              
            <Grid container spacing={2}>
            <Grid item xs={12}>

                <TextField
                  required
                  fullWidth
                  name="Cardnumber"
                  label="เลขบัตรประชาชน"             
                  id="Cardnumber"
                  autoComplete="Cardnumber"
                  value={showdata1}
                  onChange={(event) => {
                    setdata1(event.target.value);
                    showsetdata1(event.target.value);
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
                  value={showdata2}
                  onChange={(event) => {
                    setdata2(event.target.value);
                    showsetdata2(event.target.value);
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
                  value={showdata3}
                  onChange={(event) => {
                    setdata3(event.target.value);
                    showsetdata3(event.target.value);
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
                  value={showdata4}
                  onChange={(event) => {
                    setdata4(event.target.value);
                    showsetdata4(event.target.value);
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
                  value={showdata5}
                  onChange={(event) => {
                    setdata5(event.target.value);
                    showsetdata5(event.target.value);
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
                  value={showdata6}
                  onChange={(event) => {
                    setdata6(event.target.value);
                    showsetdata6(event.target.value);

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
                  value={showdata7}
                  onChange={(event) => {
                    setdata7(event.target.value);
                    showsetdata7(event.target.value);

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
                  value={showdata8}
                  onChange={(event) => {
                    setdata8(event.target.value);
                    showsetdata8(event.target.value);

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
                  value={showdata9}
                  onChange={(event) => {
                    setdata9(event.target.value);
                    showsetdata9(event.target.value);

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
                  value={showdata10}
                  onChange={(event) => {
                    setdata10(event.target.value);
                    showsetdata10(event.target.value);

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
              Update
            </Button>
            </form>
          </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default SignInSide;