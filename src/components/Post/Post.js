import React from "react";
import styled from "styled-components";
import { IconeComContador } from "../IconeComContador/IconeComContador";
import iconeCoracaoBranco from "../../img/favorite-white.svg";
import iconeCoracaoPreto from "../../img/favorite.svg";
import iconeFavoritoOn from "../../img/favOn.png";
import iconeFavoritoOf from "../../img/favOf.png";
import iconeCompartilhar from "../../img/compartilhar.png";
import iconeComentario from "../../img/comment_icon.svg";
import { SecaoComentario } from "../SecaoComentario/SecaoComentario";
import { SecaoCompart } from "../SecaoCompartilhar/SecaoCompartilhar";


const PostContainer = styled.div`
  border: 1px solid gray;
  width: 300px;
  margin: 20px 10px;
  border-radius: 10px;
  background-color: whitesmoke;
`;

const PostHeader = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  padding-left: 10px;
`;

const PostFooter = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  padding: 0 10px;
  justify-content: space-between;
`;

const UserPhoto = styled.img`
  height: 30px;
  width: 30px;
  margin-right: 10px;
  border-radius: 50%;
`;

const PostPhoto = styled.img`
  width: 100%;
  height: 250px;
`;

class Post extends React.Component {
  state = {
    curtido: false,
    favorito: false,
    numeroCurtidas: 0,
    comentando: false,
    numeroComentarios: 0,
    compartilhar: false,
  };

  onClickCurtida = () => {
    this.setState({
      curtido: !this.state.curtido,
    });
  };

  onClickCompartilhar = () => {
    this.setState({
      compartilhar: !this.state.compartilhar,
    });
  };

  onClickComentario = () => {
    this.setState({
      comentando: !this.state.comentando,
    });
  };

  onClickFavorito = () => {
    this.setState({
      favorito: !this.state.favorito,
    });

    if (!this.state.favorito) alert("Post Adicionado aos Favoritos");
  };

  aoEnviarComentario = () => {
    this.setState({
      comentando: false,
      numeroComentarios: this.state.numeroComentarios + 1,
    });
  };

  render() {
    if (this.state.curtido) {
      this.state.numeroCurtidas = 1;
    } else {
      this.state.numeroCurtidas = 0;
    }

    let iconeCurtida;

    if (this.state.curtido) {
      iconeCurtida = iconeCoracaoPreto;
    } else {
      iconeCurtida = iconeCoracaoBranco;
    }

    let iconeFavorito;

    if (this.state.favorito) {
      iconeFavorito = iconeFavoritoOf;
    } else {
      iconeFavorito = iconeFavoritoOn;
    }

    let componenteComentario;

    if (this.state.comentando) {
      componenteComentario = (
        <SecaoComentario aoEnviar={this.aoEnviarComentario} />
      );
    }

    let componenteCompartilhar;

    if (this.state.compartilhar) {
      componenteCompartilhar = <SecaoCompart />;
    }

    return (
      <>
        <PostContainer>
          <PostHeader>
            <UserPhoto src={this.props.fotoUsuario} alt={"Imagem do usuario"} />
            <p>{this.props.nomeUsuario}</p>
          </PostHeader>

          <PostPhoto src={this.props.fotoPost} alt={"Imagem do post"} />

          <PostFooter>
            <IconeComContador
              icone={iconeCurtida}
              onClickIcone={this.onClickCurtida}
              valorContador={this.state.numeroCurtidas}
            />

            <IconeComContador
              icone={iconeComentario}
              onClickIcone={this.onClickComentario}
              valorContador={this.state.numeroComentarios}
            />

            <IconeComContador
              icone={iconeFavorito}
              onClickIcone={this.onClickFavorito}
              // valorContador={this.state.numeroComentarios}
            />

            <IconeComContador
              icone={iconeCompartilhar}
              onClickIcone={this.onClickCompartilhar}
              // valorContador={this.state.numeroComentarios}
            />
          </PostFooter>

          {componenteComentario}
          {componenteCompartilhar}
        </PostContainer>
      </>
    );
  }
}

export default Post;
