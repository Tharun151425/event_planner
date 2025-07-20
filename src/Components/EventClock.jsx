import { useState, useEffect } from 'react';
import styles from './EventClock.module.css';

const EventClock = () => {
  const [time, setTime] = useState(new Date());
  
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);
  
  const hours = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();
  
  // Calculate rotation angles
  const hourRotation = (hours % 12) * 30 + minutes * 0.5; // 30 degrees per hour + slight adjustment for minutes
  const minuteRotation = minutes * 6; // 6 degrees per minute
  const secondRotation = seconds * 6; // 6 degrees per second
  
  return (
    <div className={styles.clockContainer}>
      <div className={styles.clock}>
        <div className={styles.hourMarkers}>
          {[...Array(12)].map((_, i) => (
            <div 
              key={i} 
              className={styles.hourMarker} 
              style={{ transform: `rotate(${i * 30}deg)` }}
            />
          ))}
        </div>
        <div className={styles.minuteMarkers}>
          {[...Array(60)].map((_, i) => (
            i % 5 !== 0 && (
              <div 
                key={i} 
                className={styles.minuteMarker} 
                style={{ transform: `rotate(${i * 6}deg)` }}
              />
            )
          ))}
        </div>
        <div 
          className={styles.hourHand} 
          style={{ transform: `rotate(${hourRotation}deg)` }}
        />
        <div 
          className={styles.minuteHand} 
          style={{ transform: `rotate(${minuteRotation}deg)` }}
        />
        <div 
          className={styles.secondHand} 
          style={{ transform: `rotate(${secondRotation}deg)` }}
        />
        <div className={styles.centerPin} />
        <div className={styles.digitalTime}>
          {hours.toString().padStart(2, '0')}:
          {minutes.toString().padStart(2, '0')}:
          {seconds.toString().padStart(2, '0')}
        </div>
      </div>
    </div>
  );
};

export default EventClock;