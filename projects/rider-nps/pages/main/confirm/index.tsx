import { PageContainer } from '@pagesImpl/main/confirm/container'
import ConfirmImpl from '@pagesImpl/main/confirm/confirmImpl'

export default function Confirm() {
  return (
    <PageContainer.Provider>
      <ConfirmImpl />
    </PageContainer.Provider>
  )
}
