import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Header from './Header.js';
import title from './title.css';//////////////////////////

const sections = [
  { title: 'หน้าหลัก', url: '/title' },
  { title: 'ลงทะเบียนเรียน', url: '/register' },
  { title: 'หลักสูตร', url: '/class' },
  { title: 'อาหาร', url: '/food' },
  { title: 'ข้อมูลส่วนตัว', url: '/correct' }

];
const theme = createTheme();
export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="Nursery School" sections={sections} />
        <img
        src={`https://i.pinimg.com/originals/17/44/7c/17447caf3b7d6991d8a6ca947ac4dd62.png`}
        srcSet={`https://i.pinimg.com/originals/17/44/7c/17447caf3b7d6991d8a6ca947ac4dd62.png`}
        alt={`https://i.pinimg.com/originals/17/44/7c/17447caf3b7d6991d8a6ca947ac4dd62.png`}
        style={{ width: 1160, height: 600 }}
      />
      </Container>
      
    </ThemeProvider>
  );
}