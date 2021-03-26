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
	margin-bottom:20%;

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
.image-text h1{
	font-size:3rem;
}
.image-text h2{
	font-size:2.5rem;
}
@media(max-width:800px){
img{
	height:40vh;
}
.image-text h1{
	font-size:1.5rem;
}
.image-text h2{
	font-size:1.2rem;
}
}
@media(max-width:500px){
img{
	height:30vh;
}
.image-text h1{
	font-size:1.2rem;
}
.image-text h2{
	font-size:1rem;
}
h3{
	font-size:1rem;
}
}
`;