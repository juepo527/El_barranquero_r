import React from 'react'
import './menu.css'

function Menu() {
  return (
    <div className='general'>
     <h1 className='tprincipal'>¡Este es nuestro menu del dia!</h1> 
     <div className='cards'>
     <div class="card">
  <img src="https://news.mongabay.com/wp-content/uploads/sites/20/2017/03/1-meat.jpg"class="card-img-top" alt='...'></img>
  <div class="card-body">
  <p class="card-text">Recien sacado del amazonas</p>
  </div>
</div>
<div class="card2">
  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Svi%C3%B0.jpg/640px-Svi%C3%B0.jpg"class="card-img-top2" alt='...'></img>
  <div class="card-body">
  <p class="card-text2">Recien sacado del amazonas</p>
  </div>
</div>
<div class="card3">
  <img src="https://www.ecestaticos.com/imagestatic/clipping/4f6/20b/4f620b9309d19e1151c091502f67acc5/la-comida-mas-extrema-del-mundo.jpg?mtime=1623023524"class="card-img-top3" alt='...'></img>
  <div class="card-body">
  <p class="card-text3">Recien sacado del amazonas</p>
  </div>
</div>
<div class="card4">
  <img src="https://cdn0.recetasgratis.net/es/posts/3/1/8/pulpo_cocido_55813_orig.jpg"class="card-img-top4" alt='...'></img>
  <div class="card-body">
  <p class="card-text4">Recien sacado del amazonas</p>
  </div>
</div>

</div>
    </div>
    
  )
}

export default Menu