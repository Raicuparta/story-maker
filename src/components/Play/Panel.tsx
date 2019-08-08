import React from 'react'
import {
  useFirestoreDoc,
} from 'reactfire'

import {
  PanelImage,
  PanelWrapper,
  CurrentPanelColumn,
  PanelText,
} from './Play.style'

import { Column } from '../UI'

interface Props {
  reference: firebase.firestore.DocumentReference
  showNext?: boolean
}

const Panel: React.FC<Props> = ({ reference, showNext = false }) => {
  const panel = useFirestoreDoc<firebase.firestore.DocumentSnapshot>(reference).data()

  if (!panel) {
    return (
      <p> Panel Not Found </p>
    )
  }

  return (
    <>
      {panel && (
        <CurrentPanelColumn>
          <PanelWrapper>
            <PanelImage
              src={panel.dataUrl}
              alt={panel.text}
            />
            <PanelText>
              {panel.text}
            </PanelText>
          </PanelWrapper>
        </CurrentPanelColumn>
      )}
      {showNext && (
        <Column>
          {panel.next && panel.next.map((reference: firebase.firestore.DocumentReference) => (
            <Panel
              key={reference.id}
              reference={reference}
            />
          ))}
        </Column>
      )}
    </>
  )
}

export default Panel
