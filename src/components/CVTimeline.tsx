import React from 'react'
import Timeline from '@mui/lab/Timeline'
import TimelineItem from '@mui/lab/TimelineItem'
import TimelineSeparator from '@mui/lab/TimelineSeparator'
import TimelineConnector from '@mui/lab/TimelineConnector'
import TimelineContent from '@mui/lab/TimelineContent'
import TimelineDot from '@mui/lab/TimelineDot'
import TimelineOppositeContent, { timelineOppositeContentClasses } from '@mui/lab/TimelineOppositeContent'
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import styled from '@emotion/styled'
import {IconButton} from "@mui/material";

export default function CVTimeline({ title, data }) {
  return (
    <div>
      <h2>{title}</h2>
      <Timeline
        sx={{
          [`& .${timelineOppositeContentClasses.root}`]: {
            flex: 0.3,
            fontSize: '14px'
          }
        }}
      >
        {data.map((e) => (
          <TimelineItem key={e.start}>
            <TimelineOppositeContent color="textSecondary">{`${e.start} - ${e.end}`}</TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Item>
                <div>
                  <span className="hs-timeline-title">{e.company}</span>
                  {e.city ? `‎· ${e.city}` : null}
                  {e.link ? <IconButton href={e.link} size="small" target="_blank"><OpenInNewIcon fontSize="inherit" /></IconButton> : null}
                </div>
                <div>{e.title}</div>
                <div>{e.highlight}</div>
                <ul className="hs-timeline-content">
                  {e.responsibility.map((e) => (
                    <li key={e} style={{ marginLeft: 20 }}>
                      {e}
                    </li>
                  ))}
                </ul>
              </Item>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </div>
  )
}

const Item = styled.div`
  .hs-timeline-title {
    font-size: 20px;
    color: black;
  }
  .hs-timeline-content {
    padding: 20px 0;
    font-size: 14px;
  }
`
