const images = [
  'meme1.jpg',
  'meme2.jpg',
  'meme3.jpg'
];

function get_random_image(){
  randomIndex = Math.floor(Math.random() * images.length);
  selected_image = image_array[random_index]
  setTimeout(get_random_image, 3000);
  document.getElementById('meme')
  const imgElement = document.getElementById('randomImage'); 
  imgElement.src = images[randomIndex]; 
}




