function colorMixer(color1, color2) {
    let result;

    switch (color1) {
        case 'red':
            switch (color2) {
                case 'blue':
                    result = 'purple';
                    break;
                case 'yellow':
                    result = 'orange';
                    break;
                default:
                    result = 'Invalid color combination';
            }
            break;
        case 'blue':
            switch (color2) {
                case 'red':
                    result = 'purple';
                    break;
                case 'yellow':
                    result = 'green';
                    break;
                default:
                    result = 'Invalid color combination';
            }
            break;
        case 'yellow':
            switch (color2) {
                case 'red':
                    result = 'orange';
                    break;
                case 'blue':
                    result = 'green';
                    break;
                default:
                    result = 'Invalid color combination';
            }
            break;
        default:
            result = 'Invalid color combination';
    }

    console.log("Result:", result);
}

colorMixer('red', 'blue'); 
colorMixer('blue', 'yellow'); 
colorMixer('red', 'green'); 
