import React from 'react'
import TrainerCard from './TrainerCard'

const TrainerList = () => {
  const trainers = [
    {
      id: 1,
      name: 'Jane Doe',
      role: 'Yoga Instructor',
      image: '/images/yogaco.png',
    },
    {
      id: 2,
      name: 'John Smith',
      role: 'Group Specialist',
      image: '/images/groupco.png',
    },
    {
      id: 3,
      name: 'Emily Rose',
      role: 'Personal Trainer',
      image: '/images/soloco.png',
    },
    {
      id: 4,
      name: 'Mike Brown',
      role: 'Stretching Expert',
      image: '/images/stretco.png',
    },
  ]

  return (
    <div className="trainers-container">
      {trainers.map((trainer) => (
        <TrainerCard
          key={trainer.id}
          image={trainer.image}
          name={trainer.name}
          role={trainer.role}
        />
      ))}
    </div>
  )
}

export default TrainerList