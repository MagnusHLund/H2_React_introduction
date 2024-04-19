import Form from '../Form'
import Alert from '../Alert'
import { createContext, useState } from 'react'

type formSubmitContextType = {
  formName: string | undefined
  formEmail: string | undefined
  setValues: (newNameValue: string, newEmailValue: string) => void
}

export const formSubmitContext = createContext<formSubmitContextType>({
  formName: '',
  formEmail: '',
  setValues: () => {},
})

const FormSection: React.FC = () => {
  const [formName, setFormName] = useState('')
  const [formEmail, setFormEmail] = useState('')

  const setValues = (newNameValue: string, newEmailValue: string) => {
    setFormName(newNameValue)
    setFormEmail(newEmailValue)
  }

  // TODO: Use the Use memo hook, to optimize the useContext provider
  return (
    <div>
      <formSubmitContext.Provider value={{ formName, formEmail, setValues }}>
        <Form title="Personal information" />
        <Alert output={`name: ${formName} Email: ${formEmail}`} />
      </formSubmitContext.Provider>
    </div>
  )
}

export default FormSection
