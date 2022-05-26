import React from 'react'
import { Breadcrumb } from 'antd'
import { useLocation } from 'react-router-dom'
import menuCofig from '@/mock/menuCofig' //菜单
const getPath = (menuList, pathname) => {
  let temppath = []
  try {
    function getNodePath(node) {
      temppath.push(node)
      //找到符合条件的节点，通过throw终止掉递归
      if (node.key === pathname) {
        throw new Error('GOT IT!')
      }
      if (node.children && node.children.length > 0) {
        for (var i = 0; i < node.children.length; i++) {
          getNodePath(node.children[i])
        }
        //当前节点的子节点遍历完依旧没找到，则删除路径中的该节点
        temppath.pop()
      } else {
        //找到叶子节点时，删除路径当中的该叶子节点
        temppath.pop()
      }
    }
    for (let i = 0; i < menuList.length; i++) {
      getNodePath(menuList[i])
    }
  } catch (e) {
    return temppath
  }
}
export default function BreadCrumb() {
  const { pathname } = useLocation()
  let pathArr = getPath(menuCofig, pathname)
  console.log(pathArr)
  return <Breadcrumb style={{ display: 'inline-block', marginLeft: '20px' }}>{pathArr && pathArr.map(item => <Breadcrumb.Item key={item.key}>{item.label}</Breadcrumb.Item>)}</Breadcrumb>
}
