import React from 'react'
import CardProduct from '../helpers/CardProduct'
import ImageList from './ImageList'
import SocialNetworks from '../helpers/SocialNetworks'
import AccessibilityMenu from '../helpers/AccessibilityMenu'
import TimeSelection from '../helpers/TimeSelection'


const MainPage = () => {

  return (
    <div>
      <AccessibilityMenu />
      <ImageList />
      <TimeSelection />
      <CardProduct />
      <SocialNetworks />
    </div>
  )
}

export default MainPage

