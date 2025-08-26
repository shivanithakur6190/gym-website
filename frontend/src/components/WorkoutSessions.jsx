import React from "react";

const WorkoutSessions = () => {
  return (
    <section className="workout_session">
      <div className="wrapper">
        <h1>TOP WORKOUT SESSIONS</h1>
        <p>
          Discover our most popular workout sessions designed to boost your energy, strength, and endurance. Join our expert trainers and take your fitness to the next level!
        </p>
        <img src="/img5.jpg" alt="workout" />
      </div>

      <div className="wrapper">
        <h1>FEATURED BOOTCAMPS</h1>
        <p>
          Our featured bootcamps are crafted to challenge you, push your limits, and achieve incredible results in just a few weeks. Check out the latest programs below!
        </p>
        <div className="bootcamps">
          <div>
            <h4>HIIT Blast</h4>
            <p>
              A high-intensity interval training session to burn calories fast and increase your stamina. Perfect for all fitness levels!
            </p>
          </div>
          <div>
            <h4>Strength & Tone</h4>
            <p>
              Focus on building lean muscle and toning your body with our guided strength workouts. Get stronger and feel amazing!
            </p>
          </div>
          <div>
            <h4>Yoga & Flexibility</h4>
            <p>
              Enhance your flexibility, balance, and mental focus with our relaxing and energizing yoga sessions.
            </p>
          </div>
          <div>
            <h4>Bootcamp Challenge</h4>
            <p>
              Push yourself with our ultimate bootcamp challenge. Cardio, strength, and endurance all in one powerful workout!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkoutSessions;
