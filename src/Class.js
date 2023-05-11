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
export default function Class() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="Nursery School" sections={sections} />
        <img
        src={`https://i.pinimg.com/originals/13/93/d2/1393d2478f81721165c69baedae1942c.png`}
        srcSet={`https://i.pinimg.com/originals/13/93/d2/1393d2478f81721165c69baedae1942c.png`}
        alt={`https://i.pinimg.com/originals/13/93/d2/1393d2478f81721165c69baedae1942c.png`}
        style={{ width: 1160, height: 600 }}
      />
      </Container>
      
    </ThemeProvider>
  );
}