import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { useDrag, useDrop } from 'react-dnd';

import DateLine from 'components/subcomponents/DateLine';

import {
  DateContainer,
} from 'globalStyles';

import {
  IssueCardOuterWrapper,
  IssueCardWrapper,
  IssueCardMiddleLayer,
  IssueCardBottomLayer,
  IssueCardTitle,
  AvatarWrapper,
  ContentWrapper,
  AvatarImage,
  TitleWrapper,
} from './IssueCard.styles';

const type = 'CARD';

const IssueCard = ({
  avatarLink,
  title,
  created,
  updated,
  onClick,
  id,
  handleDrag,
  handleDrop,
}) => {
  const ref = useRef(null);

  const [, drop] = useDrop({
    accept: type,
    hover(item) {
      const draggedId = item.id;
      const hoveredId = id;

      if (draggedId === hoveredId) {
        return;
      }

      handleDrag({ draggedId, hoveredId });
    },
    drop() {
      handleDrop();
    },
  });

  const [{ isDragging }, drag] = useDrag({
    item: { type, id },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  drag(drop(ref));

  return (
    <IssueCardOuterWrapper
      ref={ref}
      isDragging={isDragging}
    >
      <IssueCardWrapper
        onClick={onClick}
        isDragging={isDragging}
      >
        <IssueCardMiddleLayer />
        <IssueCardBottomLayer />
        <AvatarWrapper>
          <AvatarImage
            avatarURL={avatarLink}
          />
        </AvatarWrapper>
        <ContentWrapper>
          <TitleWrapper>
            <IssueCardTitle>
              {title}
            </IssueCardTitle>
          </TitleWrapper>
          <DateContainer>
            <DateLine
              isCreated
              date={created}
            />
            <DateLine
              date={updated}
            />
          </DateContainer>
        </ContentWrapper>
      </IssueCardWrapper>
    </IssueCardOuterWrapper>
  );
};

IssueCard.propTypes = {
  avatarLink: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  created: PropTypes.string.isRequired,
  updated: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  handleDrag: PropTypes.func.isRequired,
  handleDrop: PropTypes.func.isRequired,
};

export default IssueCard;
