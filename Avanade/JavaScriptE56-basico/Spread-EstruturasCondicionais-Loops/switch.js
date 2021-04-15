switch (fruta) {
    case 'banana':
        console.log('R$ 3,00 /kg');
        break;
    case 'mamão':
    case 'pera':
        console.log('R$ 2,00 /kg');
        break;
    default:
        console.log('Fruta não existente');
        break;
}