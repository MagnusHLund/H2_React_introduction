import Form from '../Form'
import Alert from '../Alert'

const FormSection: React.FC = () => {
  return (
    <div>
      <Form title="Personal information" />
      <Alert output="placeholder message" />
    </div>
  )
}

export default FormSection
