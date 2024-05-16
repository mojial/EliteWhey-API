const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

// Middleware para parsear JSON
app.use(express.json());

app.use(cors({
  origin: 'http://localhost:4200'
}));


const products = [
      
        { "id": "1", "title": "Creatine Neutra 250g", "description":"Elite Whey Creatine es un suplemento de creatina con un 99.9% de pureza y una calidad muy alta. Gracias a sus propiedades podrás mejorar tu rendimiento deportivo a muchos niveles." , "photo":"https://i.imgur.com/IQv8UiV.png", "price": 24.90, "categoryId": 1, "rating": 4.3 },
        { "id": "2", "title": "Creatine Lollipop 300g", "description":"Elite Whey Creatine con sabor lollipop es un suplemento de creatina con un 99.9% de pureza y una calidad muy alta. Gracias a sus propiedades podrás mejorar tu rendimiento deportivo a muchos niveles.", "photo":"https://i.imgur.com/A52ZJsW.png", "price": 32.90,"categoryId": 1, "rating": 4.8 },
        { "id": "3", "title": "Creatine Creapure 500g", "description":"Elite Whey Creatine es un suplemento de creatina con un 99.9% de pureza y una calidad muy alta. Gracias a sus propiedades podrás mejorar tu rendimiento deportivo a muchos niveles.", "photo":"https://i.imgur.com/gjWCZRA.png", "price": 38.90,"categoryId": 1, "rating": 4.5 },
        { "id": "4", "title": "Creatine Monohydrate 250g", "description":"Elite Whey Creatine es un suplemento de creatina con un 99.9% de pureza y una calidad muy alta. Gracias a sus propiedades podrás mejorar tu rendimiento deportivo a muchos niveles.", "photo":"https://i.imgur.com/GrpaRzZ.png", "price": 26.90,"categoryId": 1, "rating": 4.7 },
        { "id": "5", "title": "Protein Black Choco 1kg", "description":"EliteWhey Protein Black Choco es un suplemento de proteína de concentrado de suero de leche, de alta calidad y que ha sido diseñada en variados sabores diferentes.", "photo":"https://i.imgur.com/HQcHtfQ.png", "price": 30.90,"categoryId": 2, "rating": 4.4 },
        { "id": "6", "title": "Protein Black Choco 2kg", "description":"EliteWhey Protein Black Choco es un suplemento de proteína de concentrado de suero de leche, de alta calidad y que ha sido diseñada en variados sabores diferentes.", "photo":"https://i.imgur.com/iaIfGHV.png", "price": 60.50,"categoryId": 2, "rating": 4.9 },
        { "id": "7", "title": "Protein White Choco 1kg", "description":"EliteWhey Protein White Choco es un suplemento de proteína de concentrado de suero de leche, de alta calidad y que ha sido diseñada en variados sabores diferentes.", "photo":"https://i.imgur.com/bjMM1Et.png", "price": 30.90,"categoryId": 2, "rating": 4.6 },
        { "id": "8", "title": "Protein White Choco 2kg", "description":"EliteWhey Protein White Choco es un suplemento de proteína de concentrado de suero de leche, de alta calidad y que ha sido diseñada en variados sabores diferentes.", "photo":"https://i.imgur.com/Wmofk3V.png", "price": 60.50,"categoryId": 2, "rating": 4.3 },
        { "id": "9", "title": "Protein Cookies 1kg", "description":"EliteWhey Protein Cookies es un suplemento de proteína de concentrado de suero de leche, de alta calidad y que ha sido diseñada en variados sabores diferentes.", "photo":"https://i.imgur.com/pZMGlwN.png", "price": 30.90,"categoryId": 2, "rating": 4.7 },
        { "id": "10", "title": "Protein Cookies 2kg", "description":"EliteWhey Protein Cookies es un suplemento de proteína de concentrado de suero de leche, de alta calidad y que ha sido diseñada en variados sabores diferentes.", "photo":"https://i.imgur.com/0chywWC.png", "price": 60.50,"categoryId": 2, "rating": 4.5 },
        { "id": "11", "title": "EAAS Cola 300g", "description":"EliteWhey EAAS Cola es un complemento a base de aminoácidos esenciales, con tirosina y cisteína añadidos. Favorece la síntesis de proteínas, optimiza la recuperación y favorece la ganancia de masa muscular. " , "photo":"https://i.imgur.com/O6ZwDUO.png", "price": 29.90, "categoryId": 3, "rating": 4.2 },
        { "id": "12", "title": "EAAS Lima 300g", "description":"EliteWhey EAAS Lima es un complemento a base de aminoácidos esenciales, con tirosina y cisteína añadidos. Favorece la síntesis de proteínas, optimiza la recuperación y favorece la ganancia de masa muscular. " , "photo":"https://i.imgur.com/lDIANGK.png", "price": 28.90, "categoryId": 3, "rating": 4.7 },
        { "id": "13", "title": "EAAS Strawberry 300g", "description":"EliteWhey EAAS Strawberry es un complemento a base de aminoácidos esenciales, con tirosina y cisteína añadidos. Favorece la síntesis de proteínas, optimiza la recuperación y favorece la ganancia de masa muscular. " , "photo":"https://i.imgur.com/iUUC9R4.png", "price": 30.90, "categoryId": 3, "rating": 4.9 },
        { "id": "14", "title": "EAAS Glutamina 300g", "description":"EliteWhey Glutamina es un complemento a base de aminoácidos esenciales, con tirosina y cisteína añadidos. Favorece la síntesis de proteínas, optimiza la recuperación y favorece la ganancia de masa muscular. " , "photo":"https://i.imgur.com/0YL1qxJ.png", "price": 31.90, "categoryId": 3, "rating": 4.1 },
        { "id": "15", "title": "EAAS Map 300g", "description":"EliteWhey Map 300g es un complemento a base de aminoácidos esenciales, con tirosina y cisteína añadidos. Favorece la síntesis de proteínas, optimiza la recuperación y favorece la ganancia de masa muscular. " , "photo":"https://i.imgur.com/fHog16F.png", "price": 32.90, "categoryId": 3, "rating": 4.3 },
        { "id": "16", "title": "EAAS Map 1000mg", "description":"EliteWhey Map 1000mg es un complemento a base de aminoácidos esenciales, con tirosina y cisteína añadidos. Favorece la síntesis de proteínas, optimiza la recuperación y favorece la ganancia de masa muscular. " , "photo":"https://i.imgur.com/dEIm8bn.png", "price": 34.90, "categoryId": 3, "rating": 4.4 },
        { "id": "17", "title": "Taurina 1000mg", "description":"EliteWhey Taurina 1000mg es un complemento a base de aminoácidos esenciales, con tirosina y cisteína añadidos. Favorece la síntesis de proteínas, optimiza la recuperación y favorece la ganancia de masa muscular. " , "photo":"https://i.imgur.com/Ls2bVt4.png", "price": 36.90, "categoryId": 3, "rating": 4.9 },
        { "id": "18", "title": "Highcarbs Banana 1.5kg", "description":"Highcarbs Banana es un suplemento nutricional especialmente formulado para proporcionar una fuente rápida y sostenida de carbohidratos de calidad junto con los beneficios nutricionales de plátanos naturales." , "photo":"https://i.imgur.com/gkypxx7.png", "price": 36.90, "categoryId": 4, "rating": 4.9 },
        { "id": "19", "title": "Highcarbs Chocomoneky 1.5kg", "description":"Highcarbs Chocomonkey es un suplemento nutricional especialmente formulado para proporcionar una fuente rápida y sostenida de carbohidratos de calidad junto con los beneficios nutricionales de plátanos naturales." , "photo":"https://i.imgur.com/XmBJvpY.png", "price": 36.90, "categoryId": 4, "rating": 4.9 },
        { "id": "20", "title": "Copos de Avena 800g", "description":"Los copos de avena es un suplemento formulado para brindar una dosis concentrada de nutrientes provenientes de los copos de avena, una fuente natural de energía y fibra." , "photo":"https://i.imgur.com/ZVjJ6Kq.png", "price": 36.90, "categoryId": 4, "rating": 4.9 },
        { "id": "21", "title": "Endurance RAW 800g", "description":"Endurance RAW es un suplemento diseñado específicamente para mejorar el rendimiento y la resistencia durante actividades físicas prolongadas." , "photo":"https://i.imgur.com/8gygDsy.png", "price": 36.90, "categoryId": 4, "rating": 4.9 },
        { "id": "22", "title": "Highcarbs Vanilla 1.5kg", "description":"Highcarbs Vanilla es un suplemento nutricional especialmente formulado para proporcionar una fuente rápida y sostenida de carbohidratos de calidad junto con los beneficios nutricionales de plátanos naturales." , "photo":"https://i.imgur.com/dT8XW5Z.png", "price": 36.90, "categoryId": 4, "rating": 4.9 },
        { "id": "23", "title": "HighCarbs Wildtrain 1.5kg", "description":"Highcarbs Wildtrain es un suplemento nutricional especialmente formulado para proporcionar una fuente rápida y sostenida de carbohidratos de calidad junto con los beneficios nutricionales de plátanos naturales. " , "photo":"https://i.imgur.com/7QRY3BZ.png", "price": 36.90, "categoryId": 4, "rating": 4.9 },
        { "id": "24", "title": "Fruit Punch Preworkout 300g", "description": "Sumérgete en una explosión de sabor y energía con Fruit Punch Preworkout. Esta deliciosa mezcla está diseñada para brindarte el impulso necesario para dominar tus entrenamientos, todo mientras disfrutas de un sabor refrescante y afrutado.", "photo": "https://i.imgur.com/Y5kAjKH.png", "price": 29.90, "categoryId": 5, "rating": 4.5 },
        { "id": "25", "title": "God Ki Preworkout 300g", "description": "Sumérgete en el poder de los dioses con God ki Preworkout. Esta deliciosa mezcla está diseñada para brindarte el impulso necesario para dominar tus entrenamientos, todo mientras disfrutas de un sabor refrescante y afrutado.", "photo": "https://i.imgur.com/CqtjxNZ.png", "price": 29.90, "categoryId": 5, "rating": 4.5 },
        { "id": "26", "title": "Gorilla Dance Preworkout 300g", "description": "Gorilla Dance Preworkout te dejará literalmente loco. Esta deliciosa mezcla está diseñada para brindarte el impulso necesario para dominar tus entrenamientos, todo mientras disfrutas de un sabor refrescante y afrutado.", "photo": "https://i.imgur.com/XnkcaXz.png", "price": 29.90, "categoryId": 5, "rating": 4.5 },
        { "id": "27", "title": "Lock In Preworkout 300g", "description": "Lock In preworkout significa centrate de verdad. Esta deliciosa mezcla está diseñada para brindarte el impulso necesario para dominar tus entrenamientos, todo mientras disfrutas de un sabor refrescante y afrutado.", "photo": "https://i.imgur.com/lRvVfjD.png", "price": 29.90, "categoryId": 5, "rating": 4.5 },
        { "id": "28", "title": "No Estimulos Preworkout 300g", "description": "Para aquellos que buscan un enfoque más suave pero efectivo en sus entrenamientos, llega No Estímulos Preworkout. Diseñado para aquellos que desean evitar los efectos secundarios de los estimulantes.", "photo": "https://i.imgur.com/eFyAmQ4.png", "price": 19.90, "categoryId": 5, "rating": 4.7 },
        { "id": "29", "title": "Rage Preworkout 300g", "description": "Sumérgete en una explosión de sabor y energía con Rage Preworkout. Esta deliciosa mezcla está diseñada para brindarte el impulso necesario para dominar tus entrenamientos, todo mientras disfrutas de un sabor refrescante y afrutado.", "photo": "https://i.imgur.com/MUEJblW.png", "price": 29.90, "categoryId": 5, "rating": 4.5 },
        { "id": "30", "title": "Venom Preworkout 300g", "description": "Venom Preworkout simplenete es venenoso. Esta deliciosa mezcla está diseñada para brindarte el impulso necesario para dominar tus entrenamientos, todo mientras disfrutas de un sabor refrescante y afrutado.", "photo": "https://i.imgur.com/BaIa32s.png", "price": 29.90, "categoryId": 5, "rating": 4.5 },
        { "id": "31", "title": "Wild Pump Preworkout 300g", "description": "Prepárate para experimentar una explosión de energía y potencia con Wild Pump Preworkout. Esta fórmula revolucionaria está diseñada para desencadenar una bomba muscular salvaje y proporcionarte el impulso necesario para dominar tus entrenamientos más desafiantes. Inspirado en la fuerza y la ferocidad de la naturaleza.", "photo": "https://i.imgur.com/KnSfL6k.png", "price": 36.90, "categoryId": 5, "rating": 4.2 },
        { "id": "32", "title": "Carb Stop 80g", "description": "Carb Stop es tu aliado perfecto en la búsqueda de un control efectivo de los carbohidratos. Diseñado para aquellos que desean mantener una ingesta moderada de carbohidratos sin comprometer la energía y la vitalidad.", "photo": "https://i.imgur.com/n3HZbqp.png", "price": 15.90, "categoryId": 6, "rating": 4.4 },
        { "id": "33", "title": "Picolinato De Cromo 120 Caps", "description": "El Picolinato de Cromo es un suplemento nutricional conocido por sus diversos beneficios para la salud, especialmente en el ámbito del control de peso y la regulación de los niveles de glucosa en sangre.", "photo": "https://i.imgur.com/xJFqU97.png", "price": 26.90, "categoryId": 6, "rating": 4.4 },
        { "id": "34", "title": "Essential Anticarb 80 Caps", "description": "Essential Anticarb es un suplemento innovador diseñado para respaldar un estilo de vida bajo en carbohidratos al tiempo que proporciona los nutrientes esenciales que tu cuerpo necesita para funcionar de manera óptima.", "photo": "https://i.imgur.com/52kMzPN.png", "price": 40.90, "categoryId": 6, "rating": 4.3 },
        { "id": "35", "title": "Cla Clarinol 1000mg", "description": "CLA Clarinol es un suplemento dietético que contiene ácido linoleico conjugado (CLA, por sus siglas en inglés) en la forma patentada de Clarinol. El CLA es un ácido graso omega-6 que se encuentra naturalmente en alimentos como la carne y los productos lácteos, pero en cantidades limitadas.", "photo": "https://i.imgur.com/1knJYZi.png", "price": 22.90, "categoryId": 6, "rating": 4.2 },
        { "id": "36", "title": "Choco Monkey Protein Bar 35g", "description": "¡Dale a tu día un impulso delicioso y nutritivo con la Choco Monkey Protein Bar! Esta barra de proteínas no solo es una delicia para el paladar, sino que también es una excelente manera de satisfacer tus antojos de chocolate mientras obtienes un impulso de proteínas de alta calidad.", "photo": "https://i.imgur.com/EaJtb4s.png", "price": 1.90, "categoryId": 7, "rating": 4.8 },
        { "id": "37", "title": "Fruits & Nuts Protein Bar 35g" ,"description":"Déjate seducir por la irresistible combinación de sabores y nutrientes de la Fruits & Nuts Protein Bar. Esta barra de proteínas no solo deleitará tu paladar con su exquisita mezcla de frutas y frutos secos, sino que también te proporcionará un impulso de energía y nutrición para enfrentar tus desafíos diarios con vitalidad y satisfacción." , "photo":"https://i.imgur.com/1WYcS1E.png", "price": 1.90, "categoryId": 7, "rating": 4.2 },
        { "id": "38", "title": "Strawberry Protein Bar 35g" ,"description":"Sumérgete en la frescura y el sabor natural de la Strawberry Protein Bar. Esta barra de proteínas está meticulosamente elaborada para ofrecerte una experiencia deliciosa y nutritiva que satisfará tus antojos y te ayudará a alcanzar tus objetivos de salud y fitness." , "photo":"https://i.imgur.com/29agmZR.png", "price": 1.90, "categoryId": 7, "rating": 4.5 },
        { "id": "39", "title": "Bomb Bar Protein Bar 35g" ,"description":"¡Prepárate para una explosión de sabor y nutrición con la Bomb Bar Protein Bar! Esta barra de proteínas está diseñada para ofrecerte un estallido de energía y satisfacción en cada bocado, convirtiéndola en la elección perfecta para tus necesidades de alimentación activa." , "photo":"https://i.imgur.com/trXfTDm.png", "price": 1.90, "categoryId": 7, "rating": 4.8 },
        { "id": "40", "title": "Crunchy Bar 35g" ,"description":"Experimenta la combinación perfecta de textura crujiente y sabor delicioso con la Crunchy Bar. Esta barra está diseñada para ofrecerte un momento de satisfacción y energía en cada bocado, convirtiéndola en una opción ideal para tus necesidades de alimentación activa y en movimiento." , "photo":"https://i.imgur.com/RzEudpr.png", "price": 1.90, "categoryId": 7, "rating": 4.2 },
        { "id": "41", "title": "Ice Roll bar 35g" ,"description":"Prepárate para una experiencia refrescante y deliciosa con la Ice Roll Bar. Esta barra única combina la indulgencia de un helado con la conveniencia de un snack portátil, creando el equilibrio perfecto entre sabor y frescura." , "photo":"https://i.imgur.com/4Iobxvw.png", "price": 1.90, "categoryId": 7,"rating": 4.9 },
        { "id": "42", "title": "Calcium + Vitamin D 120caps" ,"description":"El suplemento de Calcium + Vitamin D ofrece una combinación poderosa para mantener la salud ósea y general del cuerpo. La vitamina D es esencial para la absorción del calcio en el cuerpo, lo que lo convierte en un complemento ideal junto con el calcio para promover la salud ósea." , "photo":"https://i.imgur.com/DuKUy7V.png", "price": 24.90, "categoryId": 8,"rating": 4.9 },
        { "id": "43", "title": "Vitamin D 120caps" ,"description":"La vitamina D, también conocida como la 'vitamina del sol', es un nutriente esencial para la salud ósea y el bienestar general. Aunque se llama vitamina, la vitamina D en realidad actúa más como una hormona en el cuerpo, desempeñando una variedad de funciones importantes." , "photo":"https://i.imgur.com/Eb9Cliv.png", "price": 14.90, "categoryId": 8, "rating": 4.2 },
        { "id": "44", "title": "Ashwaghanda KSM66 500mg" ,"description":"Ashwagandha, también conocida como Withania somnifera, es una hierba adaptogénica que se ha utilizado durante siglos en la medicina ayurvédica para promover la salud y el bienestar general. KSM-66 es una forma patentada y altamente concentrada de extracto de ashwagandha que se ha vuelto popular en la comunidad de suplementos debido a su pureza y eficacia." , "photo":"https://i.imgur.com/2aOI8F9.png", "price": 23.90, "categoryId": 8, "rating":4.4 },
        { "id": "45", "title": "B Complex 60caps" ,"description":"El complejo B es un grupo de vitaminas solubles en agua que desempeñan roles importantes en el metabolismo celular, la función nerviosa, la salud de la piel y el cabello, y la producción de energía. El B Complex es un suplemento que contiene una combinación de varias vitaminas B esenciales, incluyendo B1 (tiamina), B2 (riboflavina), B3 (niacina), B5 (ácido pantoténico), B6 (piridoxina), B7 (biotina), B9 (ácido fólico) y B12 (cobalamina)." , "photo":"https://i.imgur.com/yVZ6ROs.png", "price": 8.90, "categoryId": 8, "rating": 4.6 },
        { "id": "46", "title": "Vitamin D3 90caps" ,"description":"La vitamina D3, también conocida como colecalciferol, es una forma de vitamina D que se produce naturalmente en la piel cuando está expuesta a la luz solar. También se puede obtener a través de ciertos alimentos y suplementos." , "photo":"https://i.imgur.com/ovKsv1c.png", "price": 12.90, "categoryId": 8,"rating": 5 },
        { "id": "47", "title": "Vitamin B12 90caps" ,"description":"La vitamina B12, también conocida como cobalamina, es una vitamina esencial que desempeña un papel crucial en varios procesos importantes en el cuerpo humano. Esta vitamina soluble en agua es necesaria para la formación de glóbulos rojos, el funcionamiento adecuado del sistema nervioso y la síntesis de ADN." , "photo":"https://i.imgur.com/dAn3T09.png", "price": 12.90, "categoryId": 8, "rating": 4.5 },
        { "id": "48", "title": "Multivitamin Essential 90caps" ,"description":"El Multivitamin Essential es un suplemento nutricional diseñado para proporcionar una amplia gama de vitaminas y minerales esenciales que tu cuerpo necesita para funcionar de manera óptima. Esta fórmula completa y equilibrada está diseñada para cubrir las necesidades diarias de nutrientes y apoyar la salud y el bienestar general." , "photo":"https://i.imgur.com/85pdYEK.png", "price": 24.90, "categoryId": 8, "rating":4.3 },
        { "id": "49", "title": "Omega 3 90caps" ,"description":"Los ácidos grasos omega-3 son grasas esenciales que el cuerpo humano necesita pero no puede producir por sí mismo, por lo que es necesario obtenerlos a través de la dieta o suplementos. El Omega 3 es un suplemento nutricional que proporciona una fuente concentrada de ácidos grasos omega-3, incluyendo EPA (ácido eicosapentaenoico) y DHA (ácido docosahexaenoico)." , "photo":"https://i.imgur.com/bv2mMvz.png", "price": 12.90, "categoryId": 8, "rating": 4.2 },
        { "id": "50", "title": "Thermo 10 90caps" ,"description":"Thermo 10 es un potente quemador de grasa diseñado para ayudarte a alcanzar tus objetivos de pérdida de peso de manera efectiva y segura. Esta fórmula avanzada combina una mezcla única de ingredientes naturales y potentes para aumentar el metabolismo, suprimir el apetito y aumentar los niveles de energía." , "photo":"https://i.imgur.com/pAyCoMC.png", "price": 23.50, "categoryId": 9, "rating": 4.2 },
        { "id": "51", "title": "L-carnitina 90caps" ,"description":"La L-carnitina es un suplemento popular entre aquellos que buscan apoyar sus objetivos de pérdida de peso y mejorar su rendimiento atlético. Cada cápsula de L-carnitina proporciona una forma pura y concentrada de este aminoácido, que desempeña un papel crucial en el metabolismo de las grasas y la producción de energía." , "photo":"https://i.imgur.com/52SAHe6.png", "price": 29.90, "categoryId": 9, "rating": 4.9 },
        { "id": "52", "title": "Evidenced Burner 90caps" ,"description":"Evidenced Burner es un quemador de grasa avanzado respaldado por la investigación científica más reciente. Esta fórmula única combina ingredientes cuidadosamente seleccionados que han demostrado en estudios clínicos su eficacia para ayudar en la pérdida de peso y la quema de grasa." , "photo":"https://i.imgur.com/jPWPrY0.png", "price": 24.90, "categoryId": 9, "rating": 4.1 },
        { "id": "53", "title": "Wild Ripped 90caps" ,"description":"Wild Ripped es un quemador de grasa de alta potencia diseñado para aquellos que buscan maximizar su rendimiento y alcanzar sus objetivos de definición muscular. Esta fórmula avanzada combina una cuidadosa selección de ingredientes naturales y potentes para ayudar a quemar grasa, aumentar la energía y mejorar el enfoque mental." , "photo":"https://i.imgur.com/pCDWmGy.png", "price": 34.90, "categoryId": 9, "rating": 4.1 },
        { "id": "54", "title": "Wild Ripped Low 90caps" ,"description":"Wild Ripped Low es un quemador de grasa de alta potencia diseñado para aquellos que buscan maximizar su rendimiento y alcanzar sus objetivos de definición muscular. Esta fórmula avanzada combina una cuidadosa selección de ingredientes naturales y potentes para ayudar a quemar grasa, aumentar la energía y mejorar el enfoque mental." , "photo":"https://i.imgur.com/185QBFU.png", "price": 12.90, "categoryId": 9, "rating": 4.8 },
        { "id": "55", "title": "Wild Burner 90caps", "description":"Wild Burner es un quemador de grasa de alta potencia diseñado para aquellos que buscan maximizar su rendimiento y alcanzar sus objetivos de definición muscular. Esta fórmula avanzada combina una cuidadosa selección de ingredientes naturales y potentes para ayudar a quemar grasa, aumentar la energía y mejorar el enfoque mental.", "photo":"https://i.imgur.com/1jlZW9i.png", "price": 13.90, "categoryId":9, "rating": 4.8 },
        { "id": "56", "title": "Evocarbs 2.0 3kg" ,"description":"Fórmula de carbohidratos con electrolitos. Especial deportistas. Apto para vegetarianos y veganos. Fuente de magnesio." , "photo":"https://i.imgur.com/xdn3Fig.png", "price": 17.90, "categoryId": 10, "rating": 4.8 },
        { "id": "57", "title": "Evolytes 500g" ,"description":"Sustituye a Electrolitos en polvo de RawSeries. ¡Fórmula mejorada! Con Sodio, Cloruro, Calcio, Potasio y Magnesio. Espectro completo de electrolitos para deportistas. Sin aditivos. Sin sabor. Aptos para veganos." , "photo":"https://i.imgur.com/aIWZAF6.png", "price": 30.50, "categoryId": 10, "rating": 4.9 },
        { "id": "58", "title": "Evotronic 500g" ,"description":"Sustituye a Electrolitos en polvo de RawSeries. ¡Fórmula mejorada! Con Sodio, Cloruro, Calcio, Potasio y Magnesio. Espectro completo de electrolitos para deportistas. Sin aditivos. Sin sabor. Aptos para veganos." , "photo":"https://i.imgur.com/J3SndKi.png", "price": 15.50, "categoryId": 10, "rating": 4.9 },
        { "id": "59", "title": "Energy Gel 50g" ,"description":"Gel energético de Carbohidratos. Con guaraná y cafeína. Con Dextrina cíclica y Palatinosa. Geles monodosis de 50g. Apto para veganos." , "photo":"https://i.imgur.com/9yB405R.png", "price": 2.45  , "categoryId": 10, "rating": 4.4}

];

  const categories = [
    { "id": "1", "name": "creatina" },
    { "id": "2", "name": "proteina" },
    { "id": "3", "name": "aminoacidos" },
    { "id": "4", "name": "hidratos" },
    { "id": "5", "name": "preentrenos" },
    { "id": "6", "name": "controldepeso" },
    { "id": "7", "name": "barritas" },
    { "id": "8", "name": "vitaminasminerales" },
    { "id": "9", "name": "quemagrasas" },
    { "id": "10", "name": "intraentrenos" }
  ]

  app.get('/', (req, res) => {
    res.send(`
      <!DOCTYPE html>
      <html lang="es">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>EliteWhey API</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            background-color: #f0f0f0;
            margin: 0;
            padding: 0;
          }
          .container {
            max-width: 600px;
            margin: 50px auto;
            padding: 20px;
            background-color: #fff;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
          }
          h1 {
            text-align: center;
            color: #333;
          }
          ul {
            list-style-type: none;
            padding: 0;
          }
          li {
            margin-bottom: 10px;
          }
          .icon {
            margin-right: 10px;
            margin-top: 10px;
            margin-left: 10px;
          }
          a {
            color: #3a496a; /* Cambia el color del texto del enlace */
            text-decoration: none; /* Quita el subrayado predeterminado */
          }
          a:hover {
            text-decoration: none; /* Añade subrayado al pasar el cursor */
          }
        </style>
      </head>
      <body>
        <div class="container">
          <h1>Bienvenido</h1>
          <p><img class="icon" width="30" height="30" src="https://img.icons8.com/fluency/50/fast-moving-consumer-goods.png" alt="fast-moving-consumer-goods"/>Para ver los productos <a href="/products">/products</a></p>
          <p><img class="icon" width="30" height="30" src="https://img.icons8.com/fluency/48/sorting-answers.png" alt="sorting-answers"/>Para ver las categorías <a href="/categories">/categories</a></p>
          <p><img width="30" height="30" src="https://img.icons8.com/fluency/30/shopping-basket.png" alt="shopping-basket"/>Para ver el carrito <a href="/api/cart">/cart</a></p>
        </div>
      </body>
      </html>
    `);
  });
  
// Rutas de navegación 

app.get('/products', (req, res) => {
  res.send(products);
})

app.get('/categories', (req, res) => {
    res.send(categories);
  })


app.listen(port, () => {
  console.log(`Para consultar con la api: http://localhost:${port}`)
})

// Ruta para obtener productos filtrados por categoryId
app.get('/products/category/:categoryId', (req, res) => {
  const categoryId = req.params.categoryId;
  const filteredProducts = products.filter(product => product.categoryId === Number(categoryId));
  res.json(filteredProducts);
});

// Ruta para obtener un producto por su ID
app.get('/products/:id', (req, res) => {
  const id = req.params.id;
  const product = products.find(product => product.id === id); // Comparar como strings
  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ message: 'Producto no encontrado' });
  }
});

// Rutas del carrito de compras

// Arreglo para almacenar los productos en la cesta
let cart = [];

// Agregar Producto a la Cesta
app.post('/api/cart', (req, res) => {
  const { userId, productId, quantity } = req.body;
  const productToAdd = products.find(product => product.id === productId);

  if (!productToAdd) {
    return res.status(404).json({ message: 'Producto no encontrado' });
  }

  cart.push({ userId, product: productToAdd, quantity });
  
  // Obtener los detalles de los productos en el carrito después de la operación
  const cartItems = cart.map(item => {
    const productDetails = products.find(product => product.id === item.product.id);
    return { ...item, productDetails };
  });
  
  res.status(201).json(cartItems);
});

// Obtener Cesta
app.get('/api/cart', (req, res) => {
  const { userId } = req.query;
  const userCart = cart.filter(item => item.userId === userId);
  res.json(userCart);
});

app.delete('/api/cart/:id', (req, res) => {
  const productId = req.params.id;

  // Buscar el índice del producto en el carrito por ID
  const index = cart.findIndex(item => item.product.id === productId);

  if (index !== -1) {
    // Si se encuentra el producto, eliminarlo del carrito
    cart.splice(index, 1);
    res.json({ message: 'Producto eliminado correctamente' });
  } else {
    // Si el producto no se encuentra en el carrito, devolver un mensaje de error
    res.status(404).json({ message: 'Producto no encontrado en la cesta' });
  }
});



// Actualizar Cantidad de Producto en la Cesta
app.put('/api/cart/product', (req, res) => {
  const { userId, productId, quantity } = req.body;
  const cartItem = cart.find(item => item.userId === userId && item.product.id === productId);

  if (!cartItem) {
    return res.status(404).json({ message: 'Producto no encontrado en la cesta' });
  }

  cartItem.quantity = quantity;
  res.json({ message: 'Cantidad de producto actualizada en la cesta' });
});


