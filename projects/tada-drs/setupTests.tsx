import '@testing-library/jest-dom'
import '@testing-library/jest-dom/extend-expect'
import 'jest-canvas-mock'
import fetchMock from 'jest-fetch-mock'

fetchMock.enableMocks()

// eslint-disable-next-line global-require
jest.mock('next/router', () => require('next-router-mock'))

jest.mock('next/image', () => ({ src, alt }: { src: string; alt: string }) => <img src={src} alt={alt} />)
