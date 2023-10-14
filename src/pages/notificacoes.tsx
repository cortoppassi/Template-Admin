import Layout from '@/components/template/Layout'
import useAppData from '@/data/hook/useAppData'

export default function notificacoes() {
  const {alternarTema} = useAppData()
  return (
    <Layout titulo="Notificações"
      subtitulo="Aqui você irá gerenciar as suas notificações">
        <button onClick={alternarTema}>Alternar Tema</button>
    </Layout>
  )
}
