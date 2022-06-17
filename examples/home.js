let slide=document.querySelector('.slide');
let image=['img1','img2','img3'];
let index=0;
function next()
{
    if(index<image.length-1)
    {
        index+=1;
    }
    else
    {
        index=0;
    }
    if(index==0)
    {
      slide.innerHTML='<img src="./img_slide1.jpg" alt="">';
    }
  if(index==1)
  {
    slide.innerHTML='<img src="./img_slide2.jpg" alt="">';
  }
  if(index==2)
  {
    slide.innerHTML='<img src="./img_slide3.jpg" alt="">';
  }
  setTimeout(()=>{},3000);
}
function prev()
{
    if(index==0)
    {
        index=image.length-1;
    }
    else
    {
        index-=1;
    }
    if(index==0)
    {
      slide.innerHTML='<img src="./img_slide1.jpg" alt="">';
    }
  if(index==1)
  {
    slide.innerHTML='<img src="./img_slide2.jpg" alt="">';
  }
  if(index==2)
  {
    slide.innerHTML='<img src="./img_slide3.jpg" alt="">';
  }
  setTimeout(()=>{},3000);
}

setInterval(next, 3000);