function cookieExpiryDate() {
	date = new Date();
	return (new Date(date.setDate(date.getYear()+10))).toGMTString();
}
function createXMLHttpRequest(url,dv){
	xmlhttp=""
	if(window.ActiveXObject){
		try{
		xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");
		}catch(e){
		xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
		}}
		else if(window.XMLHttpRequest){
			xmlhttp = new XMLHttpRequest();
				if (xmlhttp.overrideMimeType){ xmlhttp.overrideMimeType("text/xml");}
		}
		if(!xmlhttp){ window.alert("Do not support XMLHttpRequest!");}
		xmlhttp.onreadystatechange=XHRChanged;
		xmlhttp.open("POST", url,false);
		xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
		xmlhttp.send(dv);
}
function XHRChanged(){	//handle return value xmlhttp.responseText
	if (xmlhttp.readyState==4){
		getBack(xmlhttp.responseText);}
}
function xmlText(xtext){
	var xmlDoc="";
	if (window.ActiveXObject){	//For IE browser
		xmlDoc=new ActiveXObject("Microsoft.XMLDOM");
		xmlDoc.async=false;
		xmlDoc.loadXML(xtext);
	} else if (document.implementation && document.implementation.createDocument){	//For FireFox
		try{
			var parser = new DOMParser();
			var xmlDoc = parser.parseFromString(xtext,"text/xml");
		}catch(e){
			try{	//Chrome safari Opera
				var xmlhttp = new window.XMLHttpRequest();
				xmlhttp.open("GET",xtext,false);
				xmlhttp.send(null);
				xmlDoc = xmlhttp.responseXML;
			}catch(e){
				alert(e.message);
			}
		}
	}else {return null;}
	return xmlDoc;
}
function xmlFile(xfile){
	var xmlDoc="";
	if (window.ActiveXObject){	//For IE browser
		xmlDoc=new ActiveXObject("Microsoft.XMLDOM");
		xmlDoc.async=false;
		xmlDoc.load(xfile);
	} else if (document.implementation && document.implementation.createDocument){	//For FireFox
		try{
			xmlDoc = document.implementation.createDocument('', '', null);
			xmlDoc.async = false;
			xmlDoc.load(xfile)
		}catch(e){
			try{	//Chrome safari Opera
				var xmlhttp = new window.XMLHttpRequest();
				xmlhttp.open("GET",xfile,false);
				xmlhttp.send(null);
				xmlDoc = xmlhttp.responseXML;
			}catch(e){
				alert(e.message);
			}
		}
	}else {return null;}
	return xmlDoc;
}
var txmlDoc=xmlFile("config.xml");
var tnode=txmlDoc.getElementsByTagName("dbtype");
var foldpath=tnode[0].childNodes[0].nodeValue+"/";




/*
	var xmlDoc=xmlFile("config.xml");
	var xmlDoc=	xmlText("<root><dbtype>mssq</dbtype></root>");
	node=xmlDoc.getElementsByTagName("dbtype")
	alert(node[0].childNodes[0].nodeValue)
*/