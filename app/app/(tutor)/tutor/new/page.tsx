import appConstants from '@/config/constants'
import { redirect } from 'next/navigation'

export default async function NewPage (): Promise<void> {
  redirect(appConstants.TUTOR_ROUTE)
}
