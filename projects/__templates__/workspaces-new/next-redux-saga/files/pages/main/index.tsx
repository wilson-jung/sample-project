import { PageContainer } from '@pagesImpl/main/container'
import MainImpl from '@pagesImpl/main/mainImpl'

export default function Main() {
  return (
    <PageContainer.Provider>
      <MainImpl />
    </PageContainer.Provider>
  )
}
