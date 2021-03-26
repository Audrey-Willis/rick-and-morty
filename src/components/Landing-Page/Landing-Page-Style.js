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
	height:90vh;
	border:2px darkgreen solid;
	color:black;
}
.linkDivsText{
	width:70%;
}
.linkDivs h3{
	font-size:1.3rem;
}
.linkDivs p{
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
	font-size:1.2rem;
}
a:hover{
	transform:scale(1.1);
}
.landing-page-about{
	margin-bottom:20%;
}
.landing-page-about h2{
	font-size:2rem;
}
.landing-page-about p{
	font-size:1.5rem;
}

@media(max-width:800px){
.links{
	flex-direction:column;
}
.landing-page-about h2{
	font-size:1.2rem;
}
.landing-page-about p{
	font-size:1rem;
}
.linkDivs{
	width:80%;
	padding:2%;
 }
.linkDivsText{
	font-size:.9rem;
	width:50%;
}
.linkDivs .linkDivsText{
	font-size:1rem;
}
img{
	height:35vh;
	width:50%
 }
h2{
	font-size:1rem;
}
@media(max-width:500px){
.landing-page-about h2{
	font-size:1rem;
}
.landing-page-about p{
	font-size:.9rem;
}
.linkDivs{
	width:98%;
	margin-bottom:20%;
	height:auto;
	font-size:.7rem;
}
.linkDivs p{
	font-size:.9rem;
}
.linkDivs h3{
	font-size:1rem;
}
img{
	width:70%;
	height:30vh;
}
.linkDivs a{
	font-size:1rem;
}
.linkDivsText{
	width:98%
}
}
`;
