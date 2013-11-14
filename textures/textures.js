var textures = {
    floor: [
        THREE.ImageUtils.loadTexture('textures/floor1.jpg'),
        THREE.ImageUtils.loadTexture('textures/floor2.jpg'),
        THREE.ImageUtils.loadTexture('textures/floor3.jpg'),
        THREE.ImageUtils.loadTexture('textures/floor4.jpg'),
        THREE.ImageUtils.loadTexture('textures/floor5.jpg'),
        THREE.ImageUtils.loadTexture('textures/floor6.jpg'),
        THREE.ImageUtils.loadTexture('textures/floor7.jpg'),
        THREE.ImageUtils.loadTexture('textures/floor8.jpg')
    ],
    wall: [
        THREE.ImageUtils.loadTexture('textures/wall.png'),
        THREE.ImageUtils.loadTexture('textures/wall2.png'),
        THREE.ImageUtils.loadTexture('textures/wall3.png')
    ],
    box1: THREE.ImageUtils.loadTexture('textures/box1.png'),
    grass: THREE.ImageUtils.loadTexture('textures/grass.jpg'),
    sand: THREE.ImageUtils.loadTexture('textures/sand.png'),
    snow: THREE.ImageUtils.loadTexture('textures/snow.jpg'),
    particle: THREE.ImageUtils.loadTexture('textures/particle.png')
};

var global_materials = {
    floor1: new THREE.MeshPhongMaterial({
        map: textures.floor[0],
        color: 0xffffff,
        ambient: 0x444444,
        perPixel: true
    }),
    floor2: new THREE.MeshPhongMaterial({
        map: textures.floor[1],
        color: 0xffffff,
        ambient: 0x444444,
        perPixel: true
    }),
    floor3: new THREE.MeshPhongMaterial({
        map: textures.floor[2],
        color: 0xffffff,
        ambient: 0x444444,
        perPixel: true
    }),
    floor4: new THREE.MeshPhongMaterial({
        map: textures.floor[3],
        color: 0xffffff,
        ambient: 0x444444,
        perPixel: true
    }),
    floor5: new THREE.MeshPhongMaterial({
        map: textures.floor[4],
        color: 0xffffff,
        ambient: 0x444444,
        perPixel: true
    }),
    floor6: new THREE.MeshPhongMaterial({
        map: textures.floor[5],
        color: 0xffffff,
        ambient: 0x444444,
        perPixel: true
    }),
    floor7: new THREE.MeshPhongMaterial({
        map: textures.floor[6],
        color: 0xffffff,
        ambient: 0x444444,
        perPixel: true
    }),
    floor8: new THREE.MeshPhongMaterial({
        map: textures.floor[7],
        color: 0xffffff,
        ambient: 0x444444,
        perPixel: true
    }),
    wall1: new THREE.MeshPhongMaterial({
        map: textures.wall[0],
        color: 0xffffff,
        ambient: 0x444444,
        perPixel: true
    }),
    wall2: new THREE.MeshPhongMaterial({
        map: textures.wall[1],
        color: 0xffffff,
        ambient: 0x444444,
        perPixel: true
    }),
    wall3: new THREE.MeshPhongMaterial({
        map: textures.wall[2],
        color: 0xffffff,
        ambient: 0x444444,
        perPixel: true
    }),
    sand: new THREE.MeshPhongMaterial({
        map: textures.sand,
        color: 0xffffff,
        ambient: 0x444444,
        perPixel: true
    }),
    snow: new THREE.MeshPhongMaterial({
        map: textures.snow,
        color: 0xffffff,
        ambient: 0x444444,
        perPixel: true
    }),
    grass: new THREE.MeshPhongMaterial({
        map: textures.grass,
        color: 0xffffff,
        ambient: 0x444444,
        perPixel: true
    })
};
