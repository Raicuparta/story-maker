import React, {
  Suspense,
} from 'react'
import { useFirestoreDoc } from 'reactfire'

import {
  PanelImage,
  PanelWrapper,
  CurrentPanelColumn,
  PanelText,
} from './Play.style'

import { Column, Button } from '../UI'

interface Props {
  reference: firebase.firestore.DocumentReference
  onNextClick?: (panelReference: firebase.firestore.DocumentReference) => void
}

const Panel: React.FC<Props> = React.memo(({
  reference,
  onNextClick,
}) => {
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
      {onNextClick && (
        <Column>
          {panel.next && panel.next.map((reference: firebase.firestore.DocumentReference) => (
            <Button
              key={reference.id}
              onClick={() => onNextClick(reference)}
            >
              {/* Should be SuspenseWithPerf but I couldn't get it to work properly. */}
              <Suspense fallback={'loading...'}>
                <Panel reference={reference} />
              </Suspense>
            </Button>
          ))}
        </Column>
      )}
    </>
  )
})

export default Panel
