import React from 'react'
import { action } from '@storybook/addon-actions'

import {
  Button,
  RoundButton,
} from './UI.style'

export default { title: 'UI' }

const clickAction = action('button-click')

export const button = () => (
  <Button onClick={clickAction}>
    Button
  </Button>
)

export const roundButton = () => (
  <RoundButton onClick={clickAction}>
    Button
  </RoundButton>
)
