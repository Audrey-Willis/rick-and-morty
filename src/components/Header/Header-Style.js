import styled from 'styled-components';


export const HeaderStyle = styled.div`
	position:relative;
	text-align:center;
	display:flex;
	flex-direction:column;
	justify:content:center;
	align-items:center;
	font-family:cursive;
	color:black;
	margin:5%;

img{
	height: 50vh;
	width:95%;
}
.image-text{
	position:absolute;
	display:flex;
	flex-direction:column;
	justify-content:center;
	align-items:center;
	width:90%;
}
@media(max-width:800px){
	img{
		height:40vh;
	}
	.image-text{
	font-size:.7rem;
	}
}
@media(max-width:500px){
	img{
		height:30vh;
	}
	.image-text{
		font-size:.6rem;
	}
}
`;