import 'intersection-observer'
import { ResizeObserver } from '@juggle/resize-observer'

if (typeof window !== 'undefined' && typeof window.ResizeObserver === 'undefined') {
  window.ResizeObserver = ResizeObserver
}
