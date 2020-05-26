import React from 'react';
import { Performance } from '../../lib/apiClient';
import * as Styled from './style';

interface Props {
  performance: Performance;
}

export default function PerformanceDetails({ performance }: Props) {
  return (
    <>
      <Styled.Title>{performance.title}</Styled.Title>
      <Styled.Description
        dangerouslySetInnerHTML={{ __html: performance.description }}
      />
      <Styled.Label>
        Facebook:{' '}
        <a
          href={performance.artist.facebook_url}
          target="_blank"
          rel="noreferrer"
        >
          {performance.artist.facebook_url}
        </a>
      </Styled.Label>
      <Styled.Label>
        Instagram:{' '}
        <a
          href={performance.artist.instagram_url}
          target="_blank"
          rel="noreferrer"
        >
          {performance.artist.instagram_url}
        </a>
      </Styled.Label>
      <Styled.Label>Raw data:</Styled.Label>
      <Styled.Debug>{JSON.stringify(performance, null, 4)}</Styled.Debug>
    </>
  );
}
