// write cool JS hwere!!

const baseColors = [ 
    '#9e0142',
    '#d53e4f',
    '#f46d43',
    '#fdae61',
    '#fee08b',
    '#abdda4',
    '#66c2a5',
    '#3288bd',
    '#5e4fa2'
  ];




  createTiles()




function createTiles(){

    const myAppElement=document.getElementById("app");

    const colorHeadline = document.createElement('h1');
    colorHeadline.innerText = 'Color Palette';
    myAppElement.appendChild(colorHeadline);


    const myColorElement = document.createElement('section');
    myColorElement.id="colors"
   
    myAppElement.appendChild(myColorElement);
    
    baseColors.forEach(color => {
        const colorBox = document.createElement('div');
        colorBox.classList.add('color-box');
        colorBox.style.backgroundColor = color;
        colorBox.textContent = color;
        myColorElement.appendChild(colorBox);
      });
}

// write cool JS hwere!!
