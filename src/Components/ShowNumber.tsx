interface ShowNumberProps {
  numberToShow: number
}

// Assignment 8

const ShowNumber: React.FC<ShowNumberProps> = ({ numberToShow }) => {
  return <h1>{numberToShow}</h1>
}

export default ShowNumber
