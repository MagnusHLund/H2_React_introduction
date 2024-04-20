interface HelloWorldProps {
  text?: string
}

const HelloWorld: React.FC<HelloWorldProps> = ({ text = 'Hello world!' }) => {
  return <b>{text}</b>
}

export default HelloWorld
