import React from 'react'

import { Button, Card } from '@mui/material'
import styled from '@emotion/styled'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import DownloadRoundedIcon from '@mui/icons-material/DownloadRounded';
import avatar from '../assets/avatar.jpg'

let Sider = () => (
  <Container>
    <div className="upper-part">
      <img src={avatar} alt="avatar" width={200} style={{ borderRadius: '50%' }} />
      <h2>Herbert He</h2>
      <div>Full Stack Engineer</div>
      <div className="links">
        <a href="https://github.com/hsoxo" target="_blank" rel="noopener noreferrer">
          <GitHubIcon />
        </a>
        <a href="https://www.linkedin.com/in/bolong-he-b968aa70/" target="_blank" rel="noopener noreferrer">
          <LinkedInIcon />
        </a>
      </div>
    </div>
    <div className='cv-area'>
      <Button variant="outlined" startIcon={<DownloadRoundedIcon />} color='info' onClick={() => window.open('/CV.pdf', '_blank')}>
        Download CV
      </Button>
    </div>
  </Container>
)

const Container = styled(Card)`
  box-shadow: -4px 7px 15px 1px rgba(0, 0, 0, 0.2);
  position: sticky;
  top: 0;
  
  .upper-part {
    text-align: center;
    background-color: #c1e3e7;
    padding: 30px 20px 20px;
    .links {
      height: 60px;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 12px;
    }
  }
  .cv-area {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 24px 0;
    .MuiButton-root {
      border-radius: 20px;
    }
  }
`

export default Sider
