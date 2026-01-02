import React from 'react'

const ClassContent = ({ activeClass }) => {
  // Senin HTML'indeki veriler burada
  const data = {
    yoga: {
      title: 'Why Choose Yoga?',
      desc: 'Yoga is not just about flexibility; it is a journey of the self. Improve your balance, strength, and mental focus with our expert instructors.',
      schedule: [
        'Saturday - Sunday: 8:00am - 10:00am',
        'Monday - Tuesday: 10:00am - 12:00pm',
        'Wednesday - Friday: 3:00pm - 6:00pm',
      ],
      img: '/images/yoga.png',
    },
    group: {
      title: 'Energy of the Group',
      desc: 'Push your limits with the motivation of a team! Group classes are designed to keep your heart rate up and your spirits high.',
      schedule: [
        'Saturday - Sunday: 12:00pm - 2:00pm',
        'Monday - Tuesday: 6:00pm - 8:00pm',
        'Wednesday - Friday: 7:00am - 9:00am',
      ],
      img: '/images/group.png',
    },
    solo: {
      title: 'Personal Focus (Solo)',
      desc: 'Get 1-on-1 attention from our trainers. A program tailored specifically to your body type and fitness goals.',
      schedule: [
        'Every Day: By Appointment',
        'Flexible Hours: 06:00am - 11:00pm',
      ],
      img: '/images/solo.png',
    },
    stretching: {
      title: 'Recovery & Stretching',
      desc: 'Essential for injury prevention. Relax your muscles and improve your range of motion after intense workouts.',
      schedule: [
        'Monday: 9:00am - 10:00am',
        'Wednesday: 9:00am - 10:00am',
        'Friday: 5:00pm - 6:00pm',
      ],
      img: '/images/stret.png', 
    },
  }

  const current = data[activeClass]

  return (
    <div className="class-content active">
      <div className="text-col">
        <h3>{current.title}</h3>
        <p>{current.desc}</p>
        
        <h4 className="schedule-title">Weekly Schedule</h4>
        <ul className="schedule-list">
          {current.schedule.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
      
      <div className="img-col">
        <img src={current.img} alt={current.title} />
      </div>
    </div>
  )
}

export default ClassContent