import { EducationSection } from '../components/EducationSection'
import { usePageTitle } from '../usePageTitle'

export default function Education() {
  usePageTitle('Education & Achievements | Ramika Dinan Dayananda')
  return <EducationSection asPage />
}
