import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';

import Header from './Header.js';

const sections = [
  { title: 'หน้าหลัก', url: '/title' },
  { title: 'ลงทะเบียนเรียน', url: '/register' },
  { title: 'หลักสูตร', url: '/class' },
  { title: 'อาหาร', url: '/food' },
  { title: 'ข้อมูลส่วนตัว', url: '/correct' }
];
const theme = createTheme();
export default function Food() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="Nursery School" sections={sections} />
        <img
        src={`https://i.pinimg.com/originals/24/8d/d5/248dd5afb303d29e38d59ade400b03ba.png`}
        srcSet={`https://i.pinimg.com/originals/24/8d/d5/248dd5afb303d29e38d59ade400b03ba.png`}
        alt={`https://i.pinimg.com/originals/24/8d/d5/248dd5afb303d29e38d59ade400b03ba.png`}
        style={{ width: 1160, height: 600 }}
      />
      </Container>
      
    </ThemeProvider>
  );
}