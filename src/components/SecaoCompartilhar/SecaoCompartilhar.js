import React from 'react'
import styled from 'styled-components'
import iconeInsta from '../../img/insta.png'
import iconeFace from '../../img/face.png'
import iconeTwitter from '../../img/tt.png'

const CompartContainer = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 20px;
`

const Icones = styled.img`
    width: 15%;
    margin-right: 5px;
    margin-left: 15px;
`

 export class SecaoCompart extends React.Component {

	state = {
      iconFace: false,
      iconInsta: false,
      iconTT: false,
	}

    
    insta = () => {
        alert('Você Compartilhou no Instagram !');
    }

    face = () => {
        alert('Você Compartilhou no Facebook !');
    }

    tt = () => {
        alert('Você Compartilhou no Twitter !');
    }


	render() {

		return <CompartContainer>
			<Icones src={iconeInsta} onClick={this.insta}/>
            <Icones src={iconeFace} onClick={this.face}/>
            <Icones src={iconeTwitter} onClick={this.tt}/>
		</CompartContainer>
	}
}

export default SecaoCompart;
