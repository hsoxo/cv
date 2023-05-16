import React from 'react'

import './layout.css'
import styled from '@emotion/styled'
import { createTheme, ThemeProvider } from '@mui/material'

const theme = createTheme({
  typography: {
    fontFamily: [
      'Quicksand',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"'
    ].join(',')
  },
  components: {
    MuiDivider: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(0, 0, 0, 0.08)',
          borderColor: 'transparent',
          margin: '24px 0',
          height: 0,
        }
      }
    },
    MuiPaper: {
      styleOverrides: {
        elevation1: {
          boxShadow: 'none'
        }
      }
    },
    MuiTimelineDot: {
      styleOverrides: {
        root: {
          backgroundColor: 'unset',
          borderColor: '#c1e3e7',
          boxShadow: 'none'
        }
      }
    },
    MuiTimelineConnector: {
      styleOverrides: {
        root: {
          backgroundColor: '#f0f0f0',
        }
      }
    },
    MuiTimelineOppositeContent: {
      styleOverrides: {
        root: {
          padding: '8px 16px',
          color: 'inherit'
        }
      }
    }
  }
})

const Layout = ({ children }) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Container>
          <main>{children}</main>
        </Container>
      </ThemeProvider>
      <svg className="bg-shape" height="519" width="758">
        <polygon style={{ fill: '#d3d3d3' }} points="0,455,693,352,173,0,92,0,0,71" />
      </svg>
      <svg style={{ right: -100, top: -100 }} className="bg-shape" height="536" width="633">
        <polygon style={{ fill: '#b4dfe3' }} points="0,0,633,0,633,536" />
      </svg>
    </>
  )
}

const Container = styled.div`
  font-family: 'Quicksand', sans-serif;
  max-width: 1280px;
  margin: 0 auto;

  @media screen and (min-width: 992px) {
    padding: 0 1.0875rem 1.45rem;
  }
`

export default Layout
