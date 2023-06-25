/*
 * @Author: shufan100 1549248097@qq.com
 * @Date: 2022-10-23 14:47:47
 * @LastEditors: shufan100 1549248097@qq.com
 * @LastEditTime: 2023-06-25 18:31:21
 * @FilePath: \react-antd-project\src\views\page\Feat\Clipboard\index.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from 'react'
import clip from '@/utils/clipboard'
import { Button, Row, Col } from 'antd'
import { CopyOutlined } from '@ant-design/icons'

const text = `
  我是要被复制的文字，
  我是要被复制的文字，
  我是要被复制的文字，
  我是要被复制的文字，
  我是要被复制的文字，
  我是要被复制的文字，
  我是要被复制的文字，
  我是要被复制的文字，
  我是要被复制的文字，
  我是要被复制的文字，
  我是要被复制的文字，
  我是要被复制的文字，
  我是要被复制的文字，
  我是要被复制的文字，
  我是要被复制的文字，
  我是要被复制的文字
  `
const handleCopy = (text, event) => {
  clip(text, event)
}
const Clipboard = () => {
  console.log(111)
  return (
    <div>
      <h1>点击下方的Copy按钮，可将以下文字复制到剪贴板</h1>
      <br />
      <Row>
        <Col span={12}>{text}</Col>
      </Row>
      <br />
      <Row>
        <Col span={2}>
          <Button
            type='primary'
            icon={<CopyOutlined />}
            onClick={e => {
              handleCopy(text, e)
            }}
          >
            Copy
          </Button>
        </Col>
      </Row>
    </div>
  )
}

export default Clipboard
