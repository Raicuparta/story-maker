import React from 'react'
import { action } from '@storybook/addon-actions'
import {
  boolean,
  number,
} from '@storybook/addon-knobs'

import PanelConnections from './PanelConnections'

export default { title: 'PanelConnections' }

const dataUrl = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAAA8CAYAAADxJz2MAAADB0lEQVR4Xu2ZUW4DIQxEm5OnvUcv07v0Hq0SiYi6eGfGNtndiPyuAfsxNoZcPr++f97WL0zgsgCG2d0HLoA5fgtgkt8CuABmCSTHrxq4ACYJJIdvKvD944Oe/v16pW1fydAFeIOnQOlhK+PODrMMYA9ChX9miEOAFQCaIl9djdMANlVVbMaRFTod4C34Z0DcOvBmZsGUGjhSTAXEKKSZB9zTAGaUWFlPK+eCrzEVqrFqVOdU7dl6WQUSXuVmBMDOydqx0LzScs+O4EXgkACr1KF0AtHNggAztWtLGZ7D0UAyKlRA23UogDMgjkDtCS8aIw0wugCrwr3hRVUoAVQh2r7NFuoGDcFD3yvSN3qXlwE2iMzJZQOPpO2z4akiCQFk5X5WgArEFEC0EKM4pDD0vTp9WXE0u7IXaS+lEUTU850KICr6aLft+Mdumi7fHh5bkPYCiLLrnwKrHLWK6qHeTuF+HXQKV/jkbeqfU9e5xjHrP1KYMUYKtK1An9YWZL/D3toRnyJZNCoj7Np3gKyxArAvxna3UZCoLnp+ZOPo12Xnmg4Q3URG36MvI2zQSAjKBk5LYQSu1UOmIUcBswWfmceWFuTfnzZGIc86w4KMqk7t2xi/rZK3uLh/KiHyjCMI3uiQiYKsTF/Ph9EaUiMdDc6C3NrRKIjoOHvYoRjtOtJVDp2eSJXsKReBERkTSf8UQE9JCNzD0a5hRQGj74qqUSlBqhut1cZICmRBMXYMIMZGBZnNIqvalwNoa9o/wMF/3zwVHhpgdX/HZIZic1PzAqgQM7anAHhkFS6ACfW1jT18Ch9Vga1DCAPM3pvVFkW1T4oLDk8DrGgXFCiKLYy+wKAMoOeLbVhH/ZgCRbEt4LM5Re9LOIWzTnqAlZeQrA+R8aV34YgDW/fKdmC4qi66RUT89mr+bgq0d0oUlKpYNB/7HR2WpwI4Su+qxwHvUEQvNbsDtGnbO9zDQYGgroBWnFgmDgGwDy4CjYUzw+5wAGcEOXPOBTBJdwFcAJMEksOXAhfAJIHk8F82gxhytN+2AQAAAABJRU5ErkJggg=='
const panel: Panel = {
  dataUrl,
  text: 'sample panel text',
  nextIds: [2, 3],
  prevId: 1,
  id: 0,
}

const connectionClickAction = action('connection-click')
const newPanelClickAction = action('new-panel-click')

export const panelConnections = () => {
  const nextPanelCount = number('next-panel-count', 0, {
    range: true,
    min: 0,
    max: 2,
    step: 1,
  })
  const nextPanels = new Array(nextPanelCount).fill(panel)

  const showPrevPanel = boolean('prev-panel', false)
  const prevPanel = showPrevPanel ? panel : undefined

  return (
    <PanelConnections
      currentPanel={panel}
      nextPanels={nextPanels}
      prevPanel={prevPanel}
      onConnectionClick={connectionClickAction}
      onNewPanelClick={newPanelClickAction}
    />
  )
}
