import React, { useState, useMemo } from 'react';
import Head from 'next/head';
import { getReleases, Release } from '../lib/apiClient';
import Wrapper from '../components/Wrapper';
import ToggleButton from '../components/ToggleButton';
import GridView from '../components/GridView';
import CarouselView from '../components/CarouselView';
import ProductCard from '../components/ProductCard';

interface Props {
  releases: Release[];
}

enum ViewMode {
  Grid = 'grid',
  Carousel = 'carousel',
}

const IndexPage = ({ releases }: Props) => {
  const [viewMode, setViewMode] = useState<ViewMode>(ViewMode.Grid);
  const ViewComponent = viewMode === ViewMode.Grid ? GridView : CarouselView;
  const releasesList = useMemo(
    () =>
      releases.map((releases, index) => (
        <ProductCard
          product={releases.product}
          isFree={releases.is_free}
          key={`release_card_${index}`}
        />
      )),
    [releases],
  );

  return (
    <>
      <Head>
        <title>Performances</title>
        <meta property="og:title" content="Performances" key="title" />
      </Head>
      <Wrapper
        toolbar={
          <ToggleButton<ViewMode>
            id="viewMode"
            leftLabel="Grid"
            rightLabel="Carousel"
            leftValue={ViewMode.Grid}
            rightValue={ViewMode.Carousel}
            value={viewMode}
            onChange={setViewMode}
          />
        }
      >
        <ViewComponent items={releasesList} />
      </Wrapper>
    </>
  );
};

IndexPage.getInitialProps = async () => {
  const releases = await getReleases();
  return {
    releases,
  };
};

export default IndexPage;
