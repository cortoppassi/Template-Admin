import AuthInput from '@/components/auth/AuthInput'
import React, { useState } from 'react'

export default function autenticação() {
  const [modo, setModo] = useState<'login' | 'cadastro' >('')
  const [email, setEmail]=useState('')
  const [senha, setSenha]=useState('')
  return (
    <div>
      autenticação
      <AuthInput 
        label='E-mail'
        tipo='email'
        valor={email}
        valorMudou={setEmail}
        obrigatorio
        />
        <AuthInput 
        label='Senha'
        tipo='password'
        valor={senha}
        valorMudou={setSenha}
        obrigatorio
        />
    </div>
  )
}
