interface FormProps {
  title: string
}

const Form: React.FC<FormProps> = ({ title }) => {
  return (
    <div>
      <h2>{title}</h2>
      <form>
        <input type="text" name="name" placeholder="Name" />
        <input type="text" name="email" placeholder="email" />
        <input type="submit" placeholder="submit" />
      </form>
    </div>
  )
}

export default Form
