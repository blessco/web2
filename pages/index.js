import 'antd/dist/antd.css';
import {Layout, Button, Typography } from 'antd';



const { Header, Content, Footer } = Layout;
const { Title } = Typography;

export default function Inicio(){
  return(

      
  <Layout className="layout">
    <Header></Header>
    <Content style={{ padding: '0 50px', textAlign: 'center',  marginTop:75 }}>

      <Title>INICIO</Title>
      <Title>¡Bienvenido!</Title>

            <a href='./registro'>
            <Button 
            style={{ marginTop:200, width: 150, height: 70, boxShadow:'5px 5px 10px #001529'}}
            type="primary">
              Registrar
            </Button>
            </a>

            <a href='./login'>
            <Button
            style={{marginLeft:50 ,width: 150, height: 70, boxShadow:'5px 5px 10px #001529'}}
            type="primary">
              Iniciar Sesión 
            </Button>
            </a>
    </Content>
    <Footer style={{ textAlign: 'center', marginTop:300}}>Ant Design ©2022 Created by Blessco</Footer>
  </Layout>
);


}