import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: <a href="/getting-started/start-building">Quick Start</a>,
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Designed to be completed in 15-30 mins. It provides you quick, hands on experience to build your first app on Appsmith.
      </>
    ),
  },
  {
    title: <a href="getting-started/setup">Deploy Appsmith</a>,
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Install Appsmith on your own infrastructure. Go
        ahead and choose from the popular deployment options to <code>deploy</code> Appsmith.
      </>
    ),
  },
  {
    title: 'Advanced Concepts',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Create complex workflows with the help of advanced concepts like Custom Authentication, Access control, and more.
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
