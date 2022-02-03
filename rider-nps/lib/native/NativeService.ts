import { PROJECT_NAME } from '@tada-shared/common'
import { NativeService, NativeLog } from '@tada-shared/util-native'

class NpsNativeService extends NativeService {
  constructor() {
    super()
    this.hookHandleBack(() => {
      this.closeInAppBrowser.call(null)
      return true
    })
  }
}

export const npsNativeService = new NpsNativeService()
export const npsNativeLog = new NativeLog(npsNativeService, PROJECT_NAME.nps)
