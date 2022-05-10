import { Card, Col, Row, Layout, Typography, Menu } from 'antd';
import 'antd/dist/antd.css';
import { HomeOutlined, ProfileOutlined,UnorderedListOutlined } from '@ant-design/icons';


const {Title} = Typography;
const { Header, Footer, Content } = Layout;

export default function page({pagina}){

    return (

      <Layout>
      <Header>  
      <Menu theme='dark' mode="horizontal">

          <Menu.Item key="articulos" icon={<UnorderedListOutlined />}>
            <a href='/articulos'>Articulos</a>
          </Menu.Item>
          <Menu.Item key="perfil" icon={<ProfileOutlined />}>
            <a href='/perfil'>Perfil</a>
          </Menu.Item>
          
        </Menu>
      </Header>
      <Content style={{ padding: '0 50px', textAlign: 'center', marginTop: 100 }}>

      <Title>
        Atículo #{pagina.id} 
      </Title>

            <div>
                  <Row gutter={16}  align="center" style={{marginTop: 100 }}>
                    <Col span={15}>
                      <Card title={pagina.title} bordered={true}>
                        {pagina.body}
                      </Card>
                    </Col>
                  </Row>
            </div>


      </Content>
      <Footer style={{ textAlign: 'center', marginTop: 405 }}>©2022 Created by Blessco</Footer>
    </Layout>
            
        
    )
    
} 


export async function getServerSideProps({ params }){
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.page}`)
    const pagina = await res.json();

    return{
        props:{
            pagina
        }
    }
  }