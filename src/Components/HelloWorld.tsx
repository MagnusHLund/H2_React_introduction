interface HelloWorldProps {
  text?: string
}

const HelloWorld: React.FC<HelloWorldProps> = ({ text = 'Hello world!' }) => {
  return (
    <>
      {/* Alternatively put it as 1 HTML Element, but I wanted to show the use of react fragments */}
      <b>Assignment 1:</b>
      <b>{text}</b>
    </>
  )
}

export default HelloWorld
