import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: <a href="/getting-started/start-building">Quick Start</a>,
    Svg: require('@site/static/img/gettingstarted.svg').default,
    description: (
      <>
        Designed to be completed in 15-30 mins. It provides you quick, hands on experience to build your first app on Appsmith.
      </>
    ),
  },
  {
    title: <a href="getting-started/setup">Deploy</a>,
    Svg: require('@site/static/img/deploy-appsmith.svg').default,
    description: (
      <>
        Install Appsmith on your own infrastructure. Go
        ahead and choose from the popular deployment options to <code>deploy</code> Appsmith.
      </>
    ),
  },
  {
    title: 'Core Concepts',
    Svg: require('@site/static/img/coreconcepts.svg').default,
    description: (
      <>
        Everything you need to know about Appsmith fundamentals.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
