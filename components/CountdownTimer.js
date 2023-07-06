import React from "react";
import DateTimeDisplay from "./DateTimeDisplay";
import { useCountdown } from "./useCountdown";
import styles from "./countdown.module.scss";

const ExpiredNotice = () => {
  return (
    <div className={styles.expiredNotice}>
      <span>Expired!!!</span>
      <p>Please select a future date and time.</p>
    </div>
  );
};

const ShowCounter = ({ days, hours, minutes, seconds }) => {
  return (
    <div className={styles.showCounter}>
      <div className={styles.countdownLink}>
        <DateTimeDisplay value={days} type={"Days"} />
        <hr />
        <DateTimeDisplay value={hours} type={"Hours"} />
        <hr />
        <DateTimeDisplay value={minutes} type={"Mins"} />
        <hr />
        <DateTimeDisplay value={seconds} type={"Seconds"} />
      </div>
    </div>
  );
};

const CountdownTimer = ({ targetDate }) => {
  const [days, hours, minutes, seconds] = useCountdown(targetDate);

  if (days + hours + minutes + seconds <= 0) {
    return <ExpiredNotice />;
  } else {
    return (
      <ShowCounter
        days={days}
        hours={hours}
        minutes={minutes}
        seconds={seconds}
      />
    );
  }
};

export default CountdownTimer;
