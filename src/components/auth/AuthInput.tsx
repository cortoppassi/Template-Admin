interface AuthIputProps {
    label: string
    valor: any
    obrigatorio?: boolean
    tipo: 'text' | 'email' | 'password'
    valorMudou : (novoValor: any) => void
}

import React from 'react'

export default function AuthInput(props: AuthIputProps) {
  return (
    <div>
        <label className='flex flex-col'>{props.label}</label>
            <input 
                type={props.tipo ?? 'text'}
                value={props.valor}
                onChange={e => props.valorMudou?.(e.target.value)}
                required={props.obrigatorio}
            />
            
       
    </div>
  )
}
