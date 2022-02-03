import { CLICK_LOG } from '@lib/analytics/log/ClickLog'
import { npsNativeService } from '@lib/native/NativeService'

interface Params {
  [key: string]: string
}

class NativeLog {
  click(componentName: CLICK_LOG, params?: Params) {
    npsNativeService.logEvent.call({
      eventName: 'click',
      params: { component_name: componentName, page_location: document.location.href, ...(params ?? {}) },
    })
  }

  pageView() {
    npsNativeService.logEvent.call({ eventName: 'page_view', params: { page_location: document.location.href } })
  }

  brazePageView() {
    const properties = Object.entries({ page_location: document.location.href }).map(([key, value]) => {
      return { key, value }
    })

    npsNativeService.logBrazeEvent.call({ event: { eventName: 'nps_page_view', properties } })
  }
}

export const nativeLog = new NativeLog()
