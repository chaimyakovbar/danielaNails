import React from 'react'
import CardProduct from './CardProduct'
import ImageList from './pages/ImageList'
import SocialNetworks from './SocialNetworks'
import AccessibilityMenu from './AccessibilityMenu'


const MainPage = () => {

  return (
    <div>
      <AccessibilityMenu />
      <ImageList />
      <CardProduct />
      <SocialNetworks />
    </div>
  )
}

export default MainPage

