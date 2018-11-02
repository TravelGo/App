import React from 'react'
import {Navigator} from 'react-native'
import { Router, Scene, Animations, Stack, Drawer, Actions } from 'react-native-router-flux'
import Map from './Map.js'
import Recommand from './Recommand.js'
import GuestBook from './GuestBook.js'

const Routes = () => (
    <Router>
      <Stack hideNavBar={true} key = "root" duration={0}>
        <Scene key = "map"  component = {Map} initial = {true} />
        <Scene key = "recommand" component = {Recommand}/>
        <Scene key = "guestbook" component = {GuestBook}/>
      </Stack>
   </Router>
)
export default Routes
