import { useContext, useState } from 'react'
import { formSubmitContext } from './Sections/FormSection'

interface FormProps {
  title: string
}

const Form: React.FC<FormProps> = ({ title }) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const submitContext = useContext(formSubmitContext)
  const handleSubmit = (event) => {
    event.preventDefault()
    submitContext.setValues(name, email)
  }

  return (
    <div>
      <h2>{title}</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          name="email"
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input type="submit" placeholder="submit" />
      </form>
    </div>
  )
}

export default Form
