import React, { useState } from 'react';

function Tags() {
    
    return (
      <div>
        <h2>What do you fancy like eating today?</h2>
        <ul class="tags">
            <li><a href="?tag=Tacos">Tacos</a></li>
            <li><a href="?tag=Hot dog">Hot dog</a></li>
            <li><a href="?tag=Pizza">Pizza</a></li>
            <li><a href="?tag=Vegetarian">Vegetarian</a></li>
            <li><a href="?tag=Burger">Burger</a></li>
            <li><a href="?tag=Bowl">Bowl</a></li>
            <li><a href="?tag=Vegan">Vegan</a></li>
            <li><a href="?tag=Ice Cream">Ice Cream</a></li>
            <li><a href="">Anything!</a></li>
        </ul>
      </div>
    );
  }
  
  export default Tags;