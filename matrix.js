const inventarios = [
    ['codigo', 'nombre de producto', 'precio compra', 'estado'],
    ['b115',   'cartucheras',            23.56,      'SUFICIENET'],
];

for (let i = 0; i < 2; i++) {
    for (let j = 0; j < 4; j++) {
        console.log(inventarios[i][j])
    }
}