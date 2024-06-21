import React, { useContext } from 'react'
import Context from '../context'
import { Card, Divider, Grid } from '@mui/material'
import styled from '@emotion/styled'
import CheckRoundedIcon from '@mui/icons-material/CheckRounded';

const Profile = ({ data }) => {
  const { language } = useContext(Context)
  const isEn = language === 'en'
  return (
    <Container>
      <h2 style={{ marginBottom: 40 }}>{data.hello}</h2>
      {data.description.split('\n').map((e) => (
        <p key={e}>{e}</p>
      ))}
      <Divider />
      <Grid container>
        <Grid item xs={12} md={6}>
          <h3>{isEn ? 'personal information' : '个人信息'}</h3>
          <dl>
            {data.personalInformation.map((e) => (
              <div key={e.label}>
                <dt style={{ float: 'left' }}>{e.label}</dt>
                <dd style={{ marginLeft: 112 }}>{e.value}</dd>
              </div>
            ))}
          </dl>
        </Grid>
        <Grid item xs={12} md={6}>
          <h3>{isEn ? 'language' : '语言能力'}</h3>
          {data.language.map((e) => (
            <div key={e.label} className={'bullet-bar'}>
              <strong>{e.label}</strong>
              <div>
                {[...Array(10).keys()].map((i) => (
                  <span key={`${e.label}${i}`} className={`bullet ${e.score > i && 'fill'}`} />
                ))}
                <span style={{ marginLeft: 5 }}>{e.value}</span>
              </div>
            </div>
          ))}
        </Grid>
      </Grid>
      <Divider />
      <Grid container>
        <Grid item xs={12} md={6}>
          <h3>{isEn ? 'professional skills' : '专业技能'}</h3>
          {data.professionalSkills.map((e) => (
            <div key={e.label}>
              {e.label}
              <div className="progress-bar">
                <div className="progress" style={{ width: `${e.score}%` }}></div>
              </div>
            </div>
          ))}
        </Grid>
        <Grid item xs={12} md={6}>
          <h3>{isEn ? 'additional skills' : '更多技能'}</h3>
          {data.additionalSkills.map((e) => (
            <div key={e} style={{ display: 'inline-block', margin: 10 }}>
              {e}
            </div>
          ))}
        </Grid>
      </Grid>
      <Divider />
      <Grid container>
        <Grid item span={12}>
          <h3>styled list</h3>
          {data.styledList.map((e) => (
            <div key={e} className='item'>
              <CheckRoundedIcon fontSize='14' />️ {e}
            </div>
          ))}
        </Grid>
        <Grid item span={12}>
          {/*<h3>*/}
          {/*  icon list*/}
          {/*</h3>*/}
        </Grid>
      </Grid>
    </Container>
  )
}

const Container = styled(Card)`
  padding: 24px;
  .bullet-bar {
    margin-bottom: 10px;

    .bullet {
      margin-right: 0.31em;
      width: 0.938em;
      height: 0.938em;
      border-radius: 50%;
      border-width: 1px;
      border-style: solid;
      display: inline-block;
      vertical-align: middle;
      border-color: #c0e3e7;
    }
    .fill {
      background-color: #c0e3e7;
    }
  }
  .progress-bar {
    /* 进度条的槽 */
    width: 75%;
    /* 设置进度条的高度 */
    height: 5px;
    /*进度条外层div的背景色，进度未达到的地方的颜色 */
    background-color: #f1f1f1;
    border-radius: 3px;
    margin-bottom: 8px;

    .progress {
      /* 进度部分 */
      /* 利用继承父元素宽度的百分比控制进度 */
      height: 100%;
      /* 内层背景色即进度达到的颜色 */
      background-color: #c0e3e7;
      border-radius: 3px;
    }
  }
  .item {
    display: flex;
    align-items: center;
  }
`

export default Profile
