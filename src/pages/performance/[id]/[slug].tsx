import Head from 'next/head';
import React from 'react';
import Link from 'next/link';
import { NextPageContext } from 'next';
import Wrapper from '../../../components/Wrapper';
import { getPerformance, Performance } from '../../../lib/apiClient';
import PerformanceDetails from '../../../components/PerformanceDetails';

interface Props {
  performance: Performance;
}

function PerformancePage({ performance }: Props) {
  return (
    <>
      <Head>
        <title>Performance - {performance.title}</title>
        <meta
          property="og:title"
          content={`Performance - ${performance.title}`}
          key="title"
        />
      </Head>
      <Wrapper>
        <PerformanceDetails performance={performance} />
        <Link href="/">
          <a>Back to homepage</a>
        </Link>
      </Wrapper>
    </>
  );
}

PerformancePage.getInitialProps = async (ctx: NextPageContext) => {
  const id = parseInt((ctx.query.id as unknown) as string, 10);
  const performance = await getPerformance(id);
  return {
    performance,
  };
};

export default PerformancePage;
