import { PageContainer } from '@pagesImpl/main/step1/container'
import Step1Impl from '@pagesImpl/main/step1/step1Impl'

export default function Step1() {
  return (
    <PageContainer.Provider>
      <Step1Impl />
    </PageContainer.Provider>
  )
}
