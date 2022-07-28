import Layout from '@c/Layout'
import { Title } from '@c/Title'

export default function ErrorPage() {
  return (
    <Layout title="404 Error Page">
      <Title>404</Title>
      <h3>Nothing to see here!</h3>
    </Layout>
  )
}