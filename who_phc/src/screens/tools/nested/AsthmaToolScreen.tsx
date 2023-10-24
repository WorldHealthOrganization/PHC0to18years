import React from 'react'
import { COLORS } from '../../../styles/generalStyles.styles'
import MenuList from '../../../components/home/menu/MenuList'
import ScreenMenuLayout from '../../../components/layout/ScreenMenuLayout'
import asthmaList from '../../../data/tools/nested/asthmaTool'


const AsthmaToolScreen = () => {
  return (
    <ScreenMenuLayout
    color={COLORS.lightGrey}
    backgroundColor={COLORS.lightGrey}>
    <MenuList
      list={asthmaList}
      color={COLORS.blue}
      listItemStyle={{ backgroundColor: COLORS.white }}
    />
  </ScreenMenuLayout>
  )
}

export default AsthmaToolScreen