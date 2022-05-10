import axios from "axios";
import { Component } from "react";
import 'antd/dist/antd.css';
import { Input, Space, Select, Layout, Menu, Button, Typography } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone,LoginOutlined,HomeOutlined } from '@ant-design/icons';

const { Title } = Typography;
const { Option } = Select;
const { Header, Content, Footer } = Layout;

function handleChange(value) {
  console.log(`selected ${value}`);
  localStorage.setItem("País", value);
}

  
  class Registro extends Component {
    state ={
      paises:[]
    }
    

    componentDidMount(){
      axios
      .get('https://restcountries.com/v2/all')
      .then((response)=>{
        console.log(response);
        this.setState({paises: response.data})
      })
      .catch((error)=>{
        console.log(error);
      });
    }
    render(){

    const itemNuevo = () =>{
     let Nombre = document.getElementById("nombre").value;
     let Apellido = document.getElementById("apellido").value;
     let Cedula = document.getElementById("cedula").value;
     let Edad = document.getElementById("edad").value;
     let Usuario = document.getElementById("usuario").value;
     let Contraseña = document.getElementById("contraseña").value;

      localStorage.setItem("Nombre",Nombre);
      localStorage.setItem("Apellido",Apellido);
      localStorage.setItem("Cédula",Cedula);
      localStorage.setItem("Edad",Edad);
      localStorage.setItem("Usuario",Usuario);
      localStorage.setItem("Contraseña",Contraseña);

      let datos= [];
      datos.push(localStorage)
      let datosJSON = JSON.stringify(datos);
      localStorage.setItem("Datos", datosJSON)


      alert("Has guardado los datos exitosamente",
      window.location.href="../login");
            
    }

    return (
    
      <Layout className="layout">
      <Header>
      <Menu theme='dark' mode="horizontal">
          <Menu.Item key="inicio" icon={<HomeOutlined />}>
          <a href='/inicio'>Inicio</a>
          </Menu.Item>
          <Menu.Item key="login" icon={<LoginOutlined />}>
            <a href='/login'>Login</a>
          </Menu.Item>
          
        </Menu>
      </Header>
      <Content style={{ padding: '0 50px', textAlign: 'center', marginTop:150 }}>
        
    <div>

      <form>
        <div>
            <Title>Registro</Title>
        <div>
            <div>

              <label>Nombre: </label>
              <br />
              <Input
                style={{ width: 200 }}
                className='form-control'
                id="nombre" />
              <br />

              <label>Apellido: </label>
              <br />
              <Input
                style={{ width: 200 }}
                className='form-control'
                id="apellido" />
              <br />

              <label>Cédula: </label>
              <br />
              <Input
                style={{ width: 200 }}
                className='form-control'
                id="cedula" />
              <br />

              <label>Edad: </label>
              <br />
              <Input
                style={{ width: 200 }}
                className='form-control'
                id="edad" />
              <br />

              <label>País: </label>
              <br />
              <Select 
              onChange={handleChange}
              style={{ width: 200 }} 
              id="pais"
              >
                <Option></Option>
              {this.state.paises.map(elemento =>(
                <Option key={elemento.name}>{elemento.name}</Option>
              )
              )}
              </Select>
                
              <br />

              <label>Usuario: </label>
              <br />
              <Input
                style={{ width: 200 }}
                className='form-control'
                id="usuario" />
              <br />

              <label>Contraseña: </label>
              <br />
              <Space direction="vertical">
                <Input.Password
                  id="contraseña"
                  iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                />
              </Space>
              <br/><br/>

              <Button 
              style={{boxShadow:'5px 5px 10px #001529'}}
              type="primary"
              onClick={itemNuevo}
              >
                Registrar
              </Button>

            </div>
          </div>
        </div>
      </form>  
    </div>
      </Content>
      <Footer style={{ textAlign: 'center', marginTop:155 }}>©2022 Created by Blessco</Footer>
    </Layout>
    
    
    )
  }
}

export default Registro;




