import styled, { css } from 'styled-components/macro';

import Colors from './Colors';

export const Wrapper = styled.div`
  border: 3px solid ${Colors.secondaryVariant};
  border-radius: 5px;
  margin: 5px;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  position: relative;
  overflow: auto;
  margin-bottom: 20px;
`

export const Node = styled.div<{ isSelected: boolean }>`
  width: 20px;
  height: 20px;
  background: ${Colors.secondary};
  border-radius: 100%;
  border: 5px solid ${Colors.primary};
  cursor: pointer;

  :hover {
    border-color: ${Colors.secondaryVariant};
  }

  ${({ isSelected }) => isSelected && css`
    border-color: ${Colors.primaryVariant};
    :hover {
      border-color: ${Colors.primaryVariant};
    }
  `}
`
export const Preview = styled.div`
  border-radius: 10px;
  border: 5px solid ${Colors.secondaryVariant};
  overflow: hidden;
  position: relative;
  right: 122px;
  bottom: 5px;
  width: 100px;
`

export const TextPreview = styled.div`
  font-size: 10px;
  height: 10px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  background: ${Colors.primaryVariant};
  padding: 5px;
  margin-top: -5px;
`

export const NodeRow = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
`

export const NodeFork = styled.div`
  display: flex;
  flex: 1;
`
