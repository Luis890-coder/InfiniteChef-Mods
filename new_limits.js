// infiniteChefExtremeTemperatureMod.js
// Mod seguro para permitir calor até 3000°C e frio até -273°C

(function() {
    const LIMITE_MAX_CALOR = 3000;   // 3000°C
    const LIMITE_MIN_FRIO = -273;    // -273°C (zero absoluto)

    // Salva a função original de aquecimento/resfriamento
    const originalUpdateTemp = Game.updateTemp;

    // Sobrescreve a função
    Game.updateTemp = function(ingredient, deltaTemp) {
        // Aplica mudança de temperatura
        originalUpdateTemp.call(this, ingredient, deltaTemp);

        // Verifica se o ingrediente ultrapassou os limites
        if (ingredient.temperature > LIMITE_MAX_CALOR) {
            ingredient.temperature = LIMITE_MAX_CALOR;
        }
        if (ingredient.temperature < LIMITE_MIN_FRIO) {
            ingredient.temperature = LIMITE_MIN_FRIO;
        }
    };

    console.log(`Mod de Temperatura Extrema carregado! Máx: ${LIMITE_MAX_CALOR}°C, Mín: ${LIMITE_MIN_FRIO}°C`);
})();
