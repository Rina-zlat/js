let weather = {
    temperature: 20,
    description: 'солнечно',
};

if (weather.temperature <= 0) {
    console.log(`Сегодня ${weather.description}. Температура воздуха ${weather.temperature} градусов. Наденьте теплую куртку.`);
}
else {
    console.log(`Сегодня ${weather.description}. Температура воздуха ${weather.temperature} градусов.`);
}


