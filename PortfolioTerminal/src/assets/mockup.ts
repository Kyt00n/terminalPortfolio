/** 
*
* Eryk Olsza 2023
*
* https://github.com/Kyt00n
*
**/

/////////////////////////////
enum Menu {
    //Portfolio Top Page
    TOP,
    //A few facts about me
    ABOUT_ME,
    //Preview of some of my projects
    PROJECTS,
    //Preview of some of my skills
    SKILLS,
    //my contact details
    CONTACT_ME
}
/////////////////////////////
const gui = new dat.GUI()
const parameters = {
    materialColor: '#ffeded'
}

gui
    .addColor(parameters, 'materialColor')
    .onChange(() => {
        material.color.set(parameters.materialColor)
})

const canvas = document.querySelector('canvas.webgl')
// Scene
const scene = new THREE.Scene()

const textureLoader = new THREE.TextureLoader()
const matcapTexture = textureLoader.load('textures/matcaps/7.png')
const gradientTexture = textureLoader.load('/textures/gradients/3.jpg')
gradientTexture.magFilter = THREE.NearestFilter
const material = new THREE.MeshToonMaterial({color: parameters.materialColor, gradientMap: gradientTexture})
const wordCloud = new THREE.Mesh()
const fontLoader = new FontLoader()