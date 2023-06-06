import styled from "styled-components";

const Wrapper=styled.div`

.box {}
.box-base,
.box-side,
.box-side_rt {
	word-wrap: break-word;
}
.box-base {
	display: block;
}
.box-side {
	float: left;
}
.box-side_rt {
	float: right;
}
.box-ct {}
.box_ym .box-ct {
	width: 300px;
	padding: 0 10px;
}


.markplace {
	margin: 0 0 10px;
	padding: 0 0 0 35px;
}
.markplace-mark {
	background: url(../img/map-flag.png) no-repeat 0 0;
	width: 22px;
	height: 32px;
	float: left;
	font-weight: bold;
	color: #fff;
	text-align: center;
	margin: 5px 0 0 -35px;
	padding: 1px 0 0;
}
.markplace-in {
	padding: 5px;
}
.markplace-ct {
	background: #fff;
	-webkit-border-radius: 5px;
	-moz-border-radius: 5px;
	-ms-border-radius: 5px;
	border-radius: 5px;
	position: relative;
}
.markplace-ct:hover {
	box-shadow: 0 0 5px rgba(0,0,0,.5);
}
.markplace-ct:hover .markplace-hide {
	display: block;
	box-shadow: 0 4px 5px rgba(0,0,0,.5);
}
.markplace-hide {
	background: #fff;
	width: 100%;
	-webkit-border-radius: 5px;
	-moz-border-radius: 5px;
	-ms-border-radius: 5px;
	border-radius: 5px;
	position: absolute;
	top: 100%;
	display: none;
	margin: -8px 0 0;
	z-index: 2;
}
.markplace-title {
	font-weight: bold;
	display: block;
	color: #000;
}
.markplace-addr {
	margin: 0;
}
.markplace-foot {}
.markplace-lnk {
	color: #000;
}


.clearfix {
	-height: 1%;
	*zoom: 1;
	display: table;
}
.clearfix:after {
	content: '. .';
	line-height: 0.05em;
	font-size: 0.05em;
	display: block;
	word-spacing: 99in;
	height: 0;
	overflow: hidden;
}
.ymaps-b-select{
      position: absolute;
    right: 10vmin;
    top: 15vmin;
}
`

export{
    Wrapper
}