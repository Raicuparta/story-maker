import styled, { css } from 'styled-components/macro';

import Colors from './Colors';

export const Wrapper = styled.div`
  border: 3px solid ${Colors.secondaryVariant};
  border-radius: 5px;
  margin: 5px;
  flex: 1;
  height: 100%;
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
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
  position: relative;
  left: -280px;
  bottom: 181px;
  border-radius: 50px;
  border: 20px solid ${Colors.secondaryVariant};
  overflow: hidden;
  width: fit-content;
  transform: scale(0.2);
`

export const Thumbnail = styled.div`
  /* transform: scale(0.2); */
  width: fit-content;
`

export const TextPreview = styled.div`
  font-size: 40px;
  width: 360px;
  height: 50px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  background: ${Colors.primaryVariant};
  padding: 20px;
`