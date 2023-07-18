import React from 'react'

import Layout from '../layout'
import Context from '../context'
import { Switch } from '../components/Switch'
import { Box, Card, createTheme, Divider, Grid, Switch as MuiSwitch } from '@mui/material'

import { FormControlLabel } from '@mui/material'
import Sider from '../components/sider'
import styled from '@emotion/styled'
import Profile from '../components/Profile'
import CVTimeline from '../components/CVTimeline'
import Footer from '../components/Footer'

export const Head = () => (
  <>
    <title>Home | HHE.BY</title>
  </>
)

const a = require('../assets/data/personalInfoZh.json')
const b = require('../assets/data/personalInfoEn.json')

const IndexPage = () => {
  const [state, setState] = React.useState({
    info: b,
    language: 'en'
  })

  const toggleLanguage = function () {
    if (state.language === 'zh') {
      setState({
        info: b,
        language: 'en'
      })
    } else {
      setState({
        info: a,
        language: 'zh'
      })
    }
  }

  const isEn = state.language === 'en'

  return (
    <Context.Provider value={state}>
      <Layout>
        <Header>
          <Switch onChange={toggleLanguage} />
        </Header>
        <Grid container spacing={4}>
          <Grid item xs={3}>
            {/*    <Col className="hs-cv-sider" xs={24} sm={24} md={24} lg={6}>*/}
            <Sider />
          </Grid>
          <Grid item xs={9}>
            <Profile data={state.info} />
            <Box height={20} />
            <Card sx={{ padding: '24px' }}>
              <CVTimeline title={isEn ? 'Work Experience' : '工作经历'} key="work" data={state.info.workExperience} />
              <Divider />
              <CVTimeline title={isEn ? 'Other Projects' : '其他项目'} key="work" data={state.info.otherProjects} />
              <Divider />
              <CVTimeline title={isEn ? 'Education' : '教育经历'} key="edu" data={state.info.education} />
            </Card>
            <Footer />
          </Grid>
          {/*    </Col>*/}
          {/*    <Col className="hs-cv-main" xs={24} sm={24} md={24} lg={18}>*/}
          {/*      <div style={{height: 20}} />*/}
          {/*      <div style={{height: 20}} />*/}
          {/*      /!*<Card>*!/*/}
          {/*      /!*  <h3>*!/*/}
          {/*      /!*    Reference*!/*/}
          {/*      /!*  </h3>*!/*/}
          {/*      /!*</Card>*!/*/}
          {/*      /!*<div style={{height: 20}} />*!/*/}
          {/*      /!*<BlogCard/>*!/*/}
          {/*      <div style={{height: 20}} />*/}
          {/*      <Contact/>*/}
          {/*      <div style={{height: 20}} />*/}
          {/*    </Col>*/}
        </Grid>
      </Layout>
    </Context.Provider>
  )
}

const Header = styled.div`
  padding: 0 20px;
  height: 80px;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
`

export default IndexPage
