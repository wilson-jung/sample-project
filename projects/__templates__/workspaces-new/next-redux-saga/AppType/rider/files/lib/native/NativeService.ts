// @tada-shared/common 에 PROJECT_NAME 추가 필요
// @tada-shared/util-native 에 BRAZE_LOG_NAME, CLICK_LOG 추가 필요
import { PROJECT_NAME } from '@tada-shared/common'
import { NativeService, NativeLog } from '@tada-shared/util-native'

class <%= pascalCaseName %>NativeService extends NativeService {
  constructor() {
    super()
    this.hookHandleBack(() => {
      this.closeInAppBrowser.call(null)
      return true
    })
  }
}

export const <%= camelCaseName %>NativeService = new <%= pascalCaseName %>NativeService()

export const <%= camelCaseName %>NativeLog = new <%= pascalCaseName %>NativeLog(<%= camelCaseName %>NativeService, PROJECT_NAME.<%= camelCaseName %>)
