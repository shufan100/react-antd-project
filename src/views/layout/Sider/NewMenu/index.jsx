import React, { useEffect, useState } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import { Scrollbars } from 'react-custom-scrollbars'
import { connect } from 'react-redux'
import { Menu } from 'antd'
import './index.less'
// 菜单
import menuCofig from '@/mock/menuCofig'
import { getMenuItem } from '@/utils/util'
import { addTags } from '@/store/actions'
const NewMenu = props => {
  const history = useHistory()
  const location = useLocation()
  const [selectKey, setSelectKey] = useState('')

  // 初始化选中父级菜单
  useEffect(() => {
    setSelectKey(getDefaultSelectedKey())
    handleMenuSelect(getDefaultSelectedKey())
  }, [])

  // 监听路由变化，设置选中菜单
  useEffect(() => {
    setSelectKey(location.pathname)
  }, [location])

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

  //点击菜单
  const handleMenuSelect = key => {
    console.log(key, '==')
    if (key !== '/error/404') {
      let menuItem = getMenuItem(menuCofig, 'key', key)
      if (menuItem) history.push(key)
      props.addTags(menuItem)
    }
  }
  // 菜单权限
  const filterMenuItem = arr => {
    const { userInfo } = props
    for (let i = 0; i < arr.length; i++) {
      let children = arr[i].children
      if (children) {
        filterMenuItem(children)
      }
      // 1roles有值，2当前登录不是admin
      if (arr[i].roles && userInfo.id !== 'admin' && !arr[i].roles.includes(userInfo.id)) {
        // console.log(arr[i])
        arr.splice(i, 1)
        i--
      }
    }
    return arr
  }

  return (
    <div className='sidebar-menu-container1'>
      <Scrollbars autoHide autoHideTimeout={500} autoHideDuration={200}>
        {/* <span style={{ color: '#fff' }}>{selectKey}</span> */}
        <Menu
          onClick={item => handleMenuSelect(item.key)} // 路由跳转
          selectedKeys={[selectKey]} //子菜单
          defaultOpenKeys={defaultOpenKeys()} // 父菜单
          mode='inline'
          theme='dark' //light dark
          items={filterMenuItem(menuCofig)}
        />
      </Scrollbars>
    </div>
  )
}
export default connect(stata => ({ ...stata.tags, ...stata.user }), { addTags })(NewMenu)
