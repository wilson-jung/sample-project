import { PageContainer } from '@pagesImpl/main/step2/container'
import Step2Impl from '@pagesImpl/main/step2/step2Impl'

export default function Step1() {
  return (
    <PageContainer.Provider>
      <Step2Impl />
    </PageContainer.Provider>
  )
}
