/*  This is a test map to load  */
var testmap = {
    nome: "Mapa de Teste",
    size: {
        x: 10,
        y: 10
    },
    ambient: {
        light: 0x999999
    },
    tiledata: [
        ['grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass'],
        ['grass', 'snow', 'snow', 'snow', 'snow', 'snow', 'snow', 'snow', 'snow', 'grass'],
        ['grass', 'snow', 'snow', 'snow', 'snow', 'snow', 'snow', 'snow', 'snow', 'grass'],
        ['grass', 'snow', 'snow', 'snow', 'snow', 'snow', 'snow', 'snow', 'snow', 'grass'],
        ['grass', 'snow', 'snow', 'snow', 'snow', 'snow', 'snow', 'snow', 'snow', 'grass'],
        ['grass', 'snow', 'snow', 'snow', 'snow', 'snow', 'snow', 'snow', 'snow', 'grass'],
        ['grass', 'snow', 'snow', 'snow', 'snow', 'snow', 'snow', 'snow', 'snow', 'grass'],
        ['grass', 'snow', 'snow', 'snow', 'snow', 'snow', 'snow', 'snow', 'snow', 'grass'],
        ['grass', 'snow', 'snow', 'snow', 'snow', 'snow', 'snow', 'snow', 'snow', 'grass'],
        ['grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass']
    ],
    objectdata: [{
            nome: 'Caixa 1',
            texture: 'box1',
            type: 'box',
            position: {
                x: 500,
                y: 500,
            },
            size: {
                width: 200,
                height: 200,
                depth: 200
            }
        }, {
            nome: 'Luz 1',
            type: 'spotlight',
            position: {
                x: 0,
                y: 500,
                z: 100
            },
            targetpos: {
                x: 0,
                y: 0,
                z: 0
            }
        }, {
            nome: 'Luz 2',
            type: 'spotlight',
            color: 0xFFFFFF,
            position: {
                x: 150,
                y: 0,
                z: 100
            },
            targetpos: {
                x: 500,
                y: 500,
                z: 0
            }
        }, {
            nome: 'Luz 3',
            type: 'pointlight',
            color: 0xff0040,
            intensity: 4,
            distance: 250,
            position: {
                x: 450,
                y: 200,
                z: 100
            }
        }

    ]
}
