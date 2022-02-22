import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Built with Docusaurus, Powered by React',
    Svg: require('../../static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Docusaurus was designed from the ground up to be easily installed and
        used to get your website up and running quickly.
      </>
    ),
  },
  {
    title: 'Navigate Easily',
    Svg: require('../../static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        With a custom sidebar and navigable categories, rest assured you won't get lost. 
      </>
    ),
  },
  {
    title: 'By Nafall',
    Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Thanks for visiting, let me know if this helped you in any way. ♥
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
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
