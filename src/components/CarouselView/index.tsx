import React, { useState, useRef, useEffect } from 'react';
import debounce from 'lodash.debounce';
import * as Styled from './style';

interface Props {
  items: React.ReactNode[];
}

export const RESIZE_DEBOUNCE_MS = 50;

const CarouselView = ({ items }: Props) => {
  const [currentItem, setCurrentItem] = useState<number>(0);
  const [availableWidth, setAvailableWidth] = useState<number>(0);
  const containerRef = useRef<HTMLElement>(null);

  const totalItems = items.length;
  const hasNextSlide = currentItem + 1 < totalItems;
  const hasPrevSlide = currentItem > 0;
  const rowWidth = availableWidth * totalItems;
  const rowOffset = -1 * availableWidth * currentItem;

  useEffect(() => {
    const handleResize = debounce(() => {
      setAvailableWidth(containerRef.current.offsetWidth);
    }, RESIZE_DEBOUNCE_MS);
    setAvailableWidth(containerRef.current.offsetWidth);

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <Styled.Container ref={(ref) => (containerRef.current = ref)}>
        <Styled.Row
          style={{
            width: rowWidth,
            transform: `translateX(${rowOffset}px)`,
          }}
        >
          {items.map((item, index) => (
            <Styled.Item
              style={{ width: availableWidth }}
              key={`carousel_item_${index}`}
            >
              {item}
            </Styled.Item>
          ))}
        </Styled.Row>
      </Styled.Container>
      <button
        name="prev"
        disabled={!hasPrevSlide}
        onClick={() => setCurrentItem(currentItem - 1)}
      >
        Prev
      </button>
      <button
        name="next"
        disabled={!hasNextSlide}
        onClick={() => setCurrentItem(currentItem + 1)}
      >
        Next
      </button>
    </>
  );
};

export default CarouselView;
