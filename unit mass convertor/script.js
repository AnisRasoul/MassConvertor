function convertUnits() {
    const quantity = parseFloat(document.getElementById('quantity').value);
    const fromUnit = document.getElementById('fromUnit').value;
    const toUnit = document.getElementById('toUnit').value;

    // Define conversion factors
    const conversionFactors = {
        mg_to_g: 0.001,
        mg_to_kg: 0.000001,
        mg_to_t: 0.000000001,
        g_to_mg: 1000,
        g_to_kg: 0.001,
        g_to_t: 0.000001,
        kg_to_mg:1000000,
        kg_to_g: 1000,
        kg_to_t: 0.001,
        t_to_kg: 1000,
        t_to_g: 1000000,
        t_to_mg: 1000000000
    };

    // Check if the conversion factor exists
    const conversionKey = `${fromUnit}_to_${toUnit}`;
    if (conversionFactors.hasOwnProperty(conversionKey)) {
        const conversionFactor = conversionFactors[conversionKey];
        const result = quantity * conversionFactor;
        document.getElementById('result').textContent = result;
    } else {
        document.getElementById('result').textContent = 'Invalid units';
    }
}