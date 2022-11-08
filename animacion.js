var colordefondo;
colordefondo= parseInt(prompt("ingrese un número del 1 al 4:"));

if(colordefondo==1){
    document.write('<img src="https://www.wamanadventures.com/blog/wp-content/uploads/2019/07/Maravilla-Monta%C3%B1a-de-Colores-Waman-Adventures-1.jpg" alt="">')
}
else if(colordefondo==2){
    document.write('<img src="https://www.certus.edu.pe/wp-content/uploads/2021/07/logo-certus-compartir.jpg" alt="">')
}
else if(colordefondo==3){
    document.write('<img src="https://tipsparatuviaje.com/wp-content/uploads/2019/07/machu-picchu.jpg" alt="">')
}
else if(colordefondo==4){
    document.write('<img src="https://peru.info/Portals/0/Images/Productos/6/87-imagen-1416182822018.jpg" alt="">')
}
else{
    document.write('<img src="http://3.bp.blogspot.com/-ZPoKdL1PREw/UC04pJPvdTI/AAAAAAAAClw/O_GMs5Ib51A/s1600/Chau%2BPer%25C3%25BA.jpg" alt="">')
}


for(var i=1;i<=1;i++){
    document.body.innerHTML+="<marquee behavior='alternate' height='300' SCROLLAMOUNT=5 direction='down'> <div id='circulo'></div> </marquee>"
}