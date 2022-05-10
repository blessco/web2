import { Image, Layout, Button, Descriptions, Menu  } from 'antd';
import { HomeOutlined, UnorderedListOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';

const {  Header, Content, Footer} = Layout;

function Perfil (){

     if (typeof window !== 'undefined'){

      let nombre = window.localStorage.getItem("Nombre");
      let apellido = window.localStorage.getItem("Apellido");
      let edad = window.localStorage.getItem("Edad");
      let pais = localStorage.getItem("País");
      let cedula = window.localStorage.getItem("Cédula");
      let usuario = window.localStorage.getItem("Usuario");

      return(

        <Layout className="layout">
    <Header>

    <Menu theme='dark' mode="horizontal">
          <Menu.Item key="articulos" icon={<UnorderedListOutlined />}>
            <a href='/articulos'>Articulos</a>
          </Menu.Item>
          
          
        </Menu>

    </Header>
    <Content style={{ padding: '0 50px', textAlign: 'center'}}>
        
      <div className='perfil'>
          <br/>
          <Image
          width={300}
          src ="https://www.cinemascomics.com/wp-content/uploads/2022/03/henry-cavill.jpg"
          />
          

          <div>
            <br/>
            <Descriptions title={`¡Bienvenido! ${nombre} este es tu perfil.`}>
            <Descriptions.Item label={<b>Nombre de usuario</b>}>{usuario}</Descriptions.Item>
            <Descriptions.Item label={<b>Cédula</b>}>{cedula}</Descriptions.Item>
            <Descriptions.Item label={<b>Edad</b>}>{edad}</Descriptions.Item>
            <Descriptions.Item label={<b>País de origen</b>}>{pais}</Descriptions.Item>
            <Descriptions.Item label={<b>Nombre completo</b>}>{nombre} {apellido}</Descriptions.Item>
            </Descriptions>
            <br/><br/>
          </div>  

            <Button
              style={{boxShadow:'5px 5px 10px #001529'}}
              type="primary"
              onClick={cerrarSesion}
              className='boton-logout'
            >
              Cerrar Sesión 
            </Button> 
      </div>
    
    </Content>
    <Footer style={{ textAlign: 'center', marginTop: 340 }}>©2022 Created by Blessco</Footer>
  </Layout>
        
  
);
function cerrarSesion(){
  localStorage.clear(),
  window.location.href="/"
}
        
    
  }
 
}
  

export default Perfil;

