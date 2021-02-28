import styled from "styled-components";

export const LandingPageStyle = styled.div`
	margin:5%;
	text-align:center;
.links{
	display:flex;
	justify-content:space-evenly;
	align-items:center;
}
.linkDivs{
	display:flex;
	flex-direction:column;
	justify-content:space-around;
	align-items:center;
	width:50%;
	margin:2%;
	padding:3%;
	height:80vh;
	border:2px darkgreen solid;
	color:black;
}
.linkDivsText{
	width:70%;
	font-size:.8rem;
}
.linkDivs h3{
	font-size:1.2rem;
}
.quoteDiv{
	background-color:sandybrown;
}
.characterDiv{
	background-color:gold;
}
img{
	width:70%;
	height:40vh;
}
a{
	text-decoration:none;
	color:darkgreen;
}
a:hover{
	font-size:1.2rem;
}
h2{
	Font-size:1.2rem;
}

@media(max-width:800px){
.links{
	flex-direction:column;
}
.linkDivs{
	width:80%;
	padding:2%;
 }
.linkDivsText{
	font-size:.9rem;
	width:50%;
}
img{
	height:35vh;
	width:50%
 }
h2{
	font-size:1rem;
}
@media(max-width:500px){
	font-size:.8rem;
.linkDivs{
	width:90%;
}
img{
	width:70%;
	height:30vh;
}
.linkDivsText{
	width:70%
}
}
`;