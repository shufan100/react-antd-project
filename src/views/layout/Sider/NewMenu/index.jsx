import React, { useEffect, useState } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import { Scrollbars } from 'react-custom-scrollbars'
import { Menu } from 'antd'
import './index.less'
// 菜单
import menuCofig from '@/config/menuCofig'
const NewMenu = () => {
  const history = useHistory()
  const location = useLocation()
  const [selectKey, setSelectKey] = useState('')

  // 初始化选中父级菜单
  useEffect(() => {
    setSelectKey(getDefaultSelectedKey())
  }, [])

  // 监听路由变化，设置选中菜单
  useEffect(() => {
    setSelectKey(location.pathname)
  }, [location])

  // ----------------------------------------------------------------
  // 初始化设置选中的父级菜单
  const defaultOpenKeys = () => {
    const arr = location.pathname.split('/')
    arr.shift() //删除数组第一个元素

    // 1级路由
    if (arr.length === 1) return []
    //2级及以上路由
    if (arr.length > 1) {
      arr.pop() //删除数组最后一个元素
      return arr
    }
  }
  // 选中菜单
  const getDefaultSelectedKey = () => (location.pathname === '/' ? '/home' : location.pathname)

  return (
    <div className='sidebar-menu-container1'>
      <Scrollbars autoHide autoHideTimeout={500} autoHideDuration={200}>
        {/* <span style={{ color: '#fff' }}>{selectKey}</span> */}
        <Menu
          onClick={e => history.push(e.key)} // 路由跳转
          selectedKeys={[selectKey]} //子菜单
          defaultOpenKeys={defaultOpenKeys()} // 父菜单
          mode='inline'
          theme='dark' //light dark
          items={menuCofig}
        />
      </Scrollbars>
    </div>
  )
}
export default NewMenu
