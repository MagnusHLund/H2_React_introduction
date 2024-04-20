import { useEffect, useState } from 'react'
import ShowNumber from './ShowNumber'

// This component is assignment 2, 3

const Timer: React.FC = () => {
  const [time, setTime] = useState(0)

  const fastForwardTime = () => {
    setTime(time + 1)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(time + 1)
    }, 1000)

    return () => clearInterval(interval)
  })

  return (
    <div>
      <ShowNumber numberToShow={time} />
      <button onClick={fastForwardTime}>Fast forward time</button>
    </div>
  )
}

export default Timer
