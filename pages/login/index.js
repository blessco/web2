import React, {useState} from 'react';
import 'antd/dist/antd.css';
import { Input, Space, Button, Alert, Layout, Menu, Typography } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone, HomeOutlined, SaveOutlined } from '@ant-design/icons';

const { Title } = Typography;
const { Header, Content, Footer } = Layout;

export default function Login(){

const [userlog, setUserlog] = useState("");
const [passlog, setPasslog] = useState("");
const [flag, setFlag] = useState(false);
const [flag2, setFlag2] = useState(false);

function handleLogin (e){
  e.preventDefault();

  let user = localStorage.getItem("Usuario").replace(/"/g,"");
  let pass = localStorage.getItem("Contraseña").replace(/"/g,"");
  
  if(!userlog || !passlog){
    setFlag(true);
    console.log("vacio");
  }else if(userlog !== user || passlog !== pass){
    setFlag2(true);
  }else{
    alert("Has iniciado sesion exitosamente");
    window.location.href="../perfil";
    setFlag(false);
  }

}
      
    return (

      <Layout className="layout">
    <Header>
    <Menu theme='dark' mode="horizontal">
          <Menu.Item key="inicio" icon={<HomeOutlined />}>
          <a href='/inicio'>Inicio</a>
          </Menu.Item>
          <Menu.Item key="registro" icon={<SaveOutlined />}>
            <a href='/registro'>Registrar</a>
          </Menu.Item>
          
        </Menu>
    </Header>
    <Content style={{ padding: '0 50px', textAlign: 'center', marginTop:250 }}>
    
      <div>
      
      <form onSubmit={handleLogin}>
        <Title>Iniciar Sesión</Title>
        <div>
          <div>
            
            <label>Usuario: </label>
              <br/>
              <Input
                style={{ width: 200}}
                className='form-control'
                id="usuario" 
                onChange={(event) => setUserlog(event.target.value)}
                />
              <br/><br/>
            <label>Contraseña: </label>
            <br/>
            <Space direction="vertical">
              <Input.Password
                id="contraseña"
                iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                onChange={(event) => setPasslog(event.target.value)}
              />
            </Space>
            <br/><br/>
            <Button 
              style={{boxShadow:'5px 5px 10px #001529'}}
              type="primary"
              onClick={handleLogin}
              >
                Iniciar sesión
              </Button>
          </div>   

        </div>
        
      </form>
      
     
    </div>
    {flag && (  
          <Alert
          style={{ width: 200, margin:'auto', marginTop:20}}
          message="¡Ingresa los datos!"
          type="warning"
          showIcon
          closable
          />
    )}

    {flag2 && (  
          <Alert
          style={{ width: 200, margin:'auto', marginTop:20}}
          message="Datos incorrectos"
          type="error"
          showIcon
          closable
        />
    )}
    </Content>
    <Footer style={{ textAlign: 'center', marginTop:302 }}>©2022 Created by Blessco</Footer>
  </Layout>

    
    )
 
}

