import React from 'react'
import Svg from '@/components/Svg'
import { Card, Tag } from 'antd'
import { growCardList } from '@/mock'
import './index.less'
import CountUp from 'react-countup' //动态加载数字

export default function GrowCard(props) {
  const { loading } = props
  return (
    <div className='cardList'>
      {growCardList.map((item, index) => (
        <Card title={item.title} extra={<Tag color={item.color}>{item.action}</Tag>} size='small' key={index} loading={loading}>
          <p>
            <span style={{ fontSize: '24px' }}>
              $<CountUp start={0} end={item.value} separator=',' />
            </span>
            <Svg type={item.icon} color='green' />
          </p>
          <p style={{ fontSize: '12px' }}>
            <span>总{item.title}</span>
            <span>
              $<CountUp start={0} end={item.total} separator=',' />
            </span>
          </p>
        </Card>
      ))}
    </div>
  )
}
