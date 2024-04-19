interface AlertProps {
  output: string
}

const Alert: React.FC<AlertProps> = ({ output }) => {
  return (
    <div>
      <p>{output}</p>
    </div>
  )
}

export default Alert
