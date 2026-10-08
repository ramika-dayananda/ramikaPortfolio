import { ContactSection } from '../components/ContactPanel'
import { usePageTitle } from '../usePageTitle'

export default function Contact() {
  usePageTitle('Contact | Ramika Dinan Dayananda')
  return <ContactSection asPage />
}
