import 'antd/dist/antd.css';
import { Card, Col, Row, Layout,Typography,Menu } from 'antd';
import { UnorderedListOutlined, ProfileOutlined } from '@ant-design/icons';
import React from "react";
import Link from "next/dist/client/link";
import axios from "axios";

const {Title} = Typography;

const { Header, Footer } = Layout;

export default function Articulos(){
  const [paginas, setPaginas] = React.useState([]);

  React.useEffect(()=> {
    const fetchPaginas = async () => {
      const respuesta = await axios.get('https://jsonplaceholder.typicode.com/posts', {params: {
        per_page: 10
      }});
      console.log("Recibiendo...");
      setPaginas(respuesta.data);
    };

    fetchPaginas();
  }, []);


    return(
      <Layout>
        <Header>
        <Menu theme='dark' mode="horizontal">

          <Menu.Item key="perfil" icon={<ProfileOutlined />}>
            <a href='/perfil'>Perfil</a>
          </Menu.Item>
          
        </Menu>
        </Header>

        <Title style={{ textAlign: 'center'}}>Artículos</Title>
        <div>
            {paginas.map(pagina =>{
              
              return(
                <Link href={`/articulos/[id]`} as={`/articulos/${pagina.id}`} key={pagina.id}>
               
               <div>
                <a>
                  <Row gutter={16} align="center">
                    <Col span={20}>
                      <Card title={pagina.title} 
                      bordered={true}
                      >
                        {pagina.body}
                      </Card>
                    </Col>
                  </Row>
                </a>
                  <br/>
                </div>
                
                </Link>
              )
            })}


        </div>
        
    <Footer style={{ textAlign: 'center', marginTop:302 }}>©2022 Created by Blessco</Footer>
      </Layout>
    )
}
  