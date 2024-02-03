import Layout from '../components/template/Layout'
import Card from '../components/Card'
import Princing from '../pages/insertCoins/Pricing'

export default function Home() {
  return (
    <Layout titulo="Página Inicial" subtitulo="Estamos construindo um template Admin!">
      <Princing/>
    </Layout>
  )
}
