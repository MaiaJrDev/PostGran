import React from "react";
import styled from "styled-components";
import Post from "./components/Post/Post";

const Header = styled.section`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  h2 {
    display: flex;
    height: 50%;
    color: #bc2a8d;
    text-shadow: 1px 1px black;
    font-size: 3em;
    align-items: flex-end;
  }
  h1 {
    color: #8a3ab9;
    font-size: 5em;
    text-shadow: 1px 1px black;
  }

  div {
    display: flex;
    justify-content: center;
    margin-left: 100px;
  }
`;

const MainContainer = styled.div`
  display: flex;
  width: 15%;
  font-weight: bold;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  box-shadow: 1px 1px 5px gray;
  margin: 20px 0;
  border-radius: 15%;

  button {
    background: blueviolet;
    width: 100px;
    height: 40px;
    color: #fff;
    border: 1px solid #eee;
    border-radius: 20px;
    box-shadow: 5px 5px 5px #eee;
    text-shadow: none;
  }

  input{
    width: 70%;
    height: 10%;
    border-radius: 5px;
    box-shadow: 1px 1px 5px  black;
    border: 1px solid gray;
    margin: 5px 0;
  }
`;

const DivBody = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  background-image: linear-gradient(to right, #8a3ab9, #e95950, #fccc63);
`;

class App extends React.Component {
  state = {
    pessoas: [
      {
        id: 1,
        nomeUsuario: "Paulinha",
        fotoUsuario: "https://picsum.photos/50/50",
        fotoPost: "https://picsum.photos/200/150",
      },
      {
        id: 2,
        nomeUsuario: "Chijo",
        fotoUsuario: "https://picsum.photos/200",
        fotoPost: "https://picsum.photos/200/151",
      },
      {
        id: 3,
        nomeUsuario: "Indio",
        fotoUsuario: "https://picsum.photos/50",
        fotoPost: "https://picsum.photos/200/300",
      },
    ],

    nomeUsuario: "",
    fotoUsuario: "",
    fotoPost: "",
  };
  
  componentDidUpdate(){
    console.log(this.state.pessoas);
  }
  adicionaPessoa = () => {

    if(this.state.nomeUsuario === '' || this.state.fotoUsuario === '' || this.state.fotoPost === ''){
      alert('Preencha Os Campos Corretamente !');
      return;
    }

    const novaPessoa = {
      id: Date.now(),
      nomeUsuario: this.state.nomeUsuario,
      fotoUsuario: this.state.fotoUsuario,
      fotoPost: this.state.fotoPost,
    };

    console.log(novaPessoa);

    const novoPessoas = [novaPessoa, ...this.state.pessoas];

    this.setState({ pessoas: novoPessoas });
    this.setState({ nomeUsuario: "", fotoUsuario: "", fotoPost: "" });
  };

  onChangeNome = (event) => {
    this.setState({ nomeUsuario: event.target.value });
  };

  onChangeUser = (event) => {
    this.setState({ fotoUsuario: event.target.value });
  };

  onChangePost = (event) => {
    this.setState({ fotoPost: event.target.value });
  };

  exluirPost = (id, nome) => {
    if(!alert(`Quer Mesmo Deletar o Post De ${nome} ?`)){

    const novaLista = this.state.pessoas.filter((item) => {
      
      if (item.id === id){
        return false
      }else{
        return true
      }
    })
     this.setState({pessoas: novaLista});
    }else{
      return ;
    }
   
  };


  render() {
    const NovoPost = this.state.pessoas.map((pessoa) => {

      return (
        <Post
          identificador={() => this.exluirPost(pessoa.id, pessoa.nomeUsuario)}
          nomeUsuario={pessoa.nomeUsuario}
          fotoUsuario={pessoa.fotoUsuario}
          fotoPost={pessoa.fotoPost}
        />
      );
    });

    return (
      <>
        <Header>
          <div>
            <h1>Post </h1>
            <h2>Gran</h2>
          </div>
          <MainContainer>
            <h3>Criar novo Post</h3>
            Nome :
            <input
              type="text"
              value={this.state.nomeUsuario}
              onChange={this.onChangeNome}
              placeholder={"Seu Nome"}
            />
            Sua Foto:
            <input
              type="url"
              value={this.state.fotoUsuario}
              onChange={this.onChangeUser}
              placeholder={"Link Da Imagem"}
            />
            Foto do Post:
            <input
              type="url"
              value={this.state.fotoPost}
              onChange={this.onChangePost}
              placeholder={"Link Da Imagem"}
            />
            <br />
            <button onClick={this.adicionaPessoa}>Enviar</button>
            <br />
          </MainContainer>
        </Header>

        <DivBody>{NovoPost}</DivBody>
      </>
    );
  }
}

export default App;
