import Form from '../Form'
import Alert from '../Alert'
import { createContext, useMemo, useState } from 'react'

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

  const value = useMemo(
    () => ({ formName, formEmail, setValues }),
    [formName, formEmail]
  )

  return (
    <div>
      <formSubmitContext.Provider value={value}>
        <Form title="Personal information" />
        <Alert output={`name: ${formName} Email: ${formEmail}`} />
      </formSubmitContext.Provider>
    </div>
  )
}

export default FormSection
