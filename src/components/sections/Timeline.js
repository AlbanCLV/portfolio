import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import Card from '../ui/Card';
import './Timeline.scss';

const TimelineItem = ({ item, index, type }) => {
  const isExperience = type === 'experience';

  return (
    <motion.div
      className="timeline-item"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
    >
      <div className="timeline-item__marker">
        <div className="timeline-item__dot"></div>
      </div>
      
      <div className="timeline-item__content">
        <Card>
          <div className="timeline-item__header">
            <h3 className="timeline-item__title">
              {isExperience ? item.position : item.degree}
            </h3>
            <span className="timeline-item__period">{item.period}</span>
          </div>
          
          <h4 className="timeline-item__subtitle">
            {isExperience ? item.company : item.school}
          </h4>
          
          <p className="timeline-item__description">
            {item.description}
          </p>
          
          <div className="timeline-item__tags">
            {isExperience ? (
              item.technologies?.map((tech) => (
                <span key={tech} className="timeline-item__tag">
                  {tech}
                </span>
              ))
            ) : (
              item.subjects?.map((subject) => (
                <span key={subject} className="timeline-item__tag">
                  {subject}
                </span>
              ))
            )}
          </div>
        </Card>
      </div>
    </motion.div>
  );
};

const Timeline = ({ items, type = 'experience' }) => {
  return (
    <div className="timeline">
      <div className="timeline__line"></div>
      {items.map((item, index) => (
        <TimelineItem 
          key={item.id} 
          item={item} 
          index={index} 
          type={type}
        />
      ))}
    </div>
  );
};

TimelineItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    company: PropTypes.string,
    school: PropTypes.string,
    position: PropTypes.string,
    degree: PropTypes.string,
    period: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    technologies: PropTypes.arrayOf(PropTypes.string),
    subjects: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
  index: PropTypes.number.isRequired,
  type: PropTypes.oneOf(['experience', 'formation']).isRequired,
};

Timeline.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  type: PropTypes.oneOf(['experience', 'formation']),
};

export default Timeline;