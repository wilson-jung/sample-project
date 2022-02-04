import React, { ChangeEvent, useCallback, useRef, useState, VoidFunctionComponent } from 'react'
import { apiSlice } from '@features/api/__state__/api.slice'
import styled from '@emotion/styled'
import { useEffectOnce } from 'react-use'
import { useRouter } from 'next/router'

export const Login: VoidFunctionComponent = () => {
  const [authenticate] = apiSlice.useAuthenticateMutation()
  const [state, setState] = useState({
    email: 'haley@vcnc.co.kr',
    password: '1231231',
  })
  const inputRef = useRef<HTMLInputElement>(null)
  const router = useRouter()

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target
    setState(prevState => ({
      ...prevState,
      [id]: value,
    }))
  }
  const handleSubmitClick = useCallback(
    (event: React.MouseEvent) => {
      event.preventDefault()
      authenticate({ email: state.email, password: state.password })
        .unwrap()
        .then(() => {
          router.push('/')
        })
        .catch(() => {
          alert('로그인 실패')
        })
    },
    [authenticate, router, state.email, state.password]
  )

  useEffectOnce(() => {
    inputRef.current?.focus()
  })

  return (
    <Form>
      <Header>로그인페이지</Header>
      <div>
        <Input type="email" id="email" value={state.email} placeholder="ID" onChange={handleChange} ref={inputRef} />
        <Input type="password" id="password" value={state.password} placeholder="Password" onChange={handleChange} />
      </div>
      <Button type="submit" onClick={handleSubmitClick}>
        로그인
      </Button>
    </Form>
  )
}

const Form = styled.form`
  padding: 25px;
`

const Header = styled.h1`
  font-size: 28px;
  margin-bottom: 10px;
`

const Input = styled.input`
  border: 1px solid black;
  padding: 5px;
  display: block;
  width: 100%;
  font-size: 24px;
  margin-bottom: 10px;
`

const Button = styled.button`
  padding: 5px;
  color: white;
  background-color: dodgerblue;
  font-weight: bold;
  width: 100%;
  font-size: 24px;
`
