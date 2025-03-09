const measurementKelvin = function(){
    const measurement = {
        type: 'temp',
        unit: 'celsius',
        value: Number(prompt('Degree Celsius'))
    };

    const kelvin = measurement.value + 273;
    return kelvin;
}

console.log(measurementKelvin());
