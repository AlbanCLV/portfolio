// src/components/specific/Timeline.js
import React from 'react';
import styles from './Timeline.module.scss';
import { motion } from 'framer-motion';

export default function Timeline({ formations }) {
  return (
    <div className={styles.timelineWrapper}>
      <ul className={styles.timelineList}>
        {formations.map((formation) => (
          <motion.li
            key={formation.id}
            className={styles.timelineItem}
            whileHover={{ scale: 1.03, boxShadow: "0 6px 32px 0 rgba(0,0,0,0.18)" }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <img
              src={require('../../utils/assetPath').default(`/assets/images/${formation.logo}`)}
              alt={formation.school}
              className={styles.logo}
            />
            <div className={styles.textBlock}>
              <div className={styles.school}>
                {formation.link ? (
                  <a
                    href={formation.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.companyLink}
                  >
                    {formation.school}
                  </a>
                ) : (
                  formation.school
                )}
              </div>
              <div className={styles.title}>{formation.title}</div>
              <div className={styles.year}>{formation.year}</div>
              {formation.description && (
                <div className={styles.description}>{formation.description}</div>
              )}
            </div>
          </motion.li>
        ))}
      </ul>
    </div>
  );
}