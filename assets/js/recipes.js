let recetas = [
    {
        nombre: "Ceviche peruano",
        ingredientes: ["pescado fresco", "jugo de limón", "cebolla morada", "ají", "cilantro", "tomate"],
        preparacion: "Corta el pescado en cubos y mézclalo con el jugo de limón. Agrega la cebolla, ají, cilantro y tomate. Deja marinar por 10 minutos antes de servir.",
        imagen: "https://www.gourmet.cl/wp-content/uploads/2024/01/CEVICHE.jpg",
        video: "https://youtu.be/iOe6dI2JhgU"
    },
    {
        nombre: "Tacos al pastor",
        ingredientes: ["carne de cerdo", "achiote", "piña", "tortillas de maíz", "cebolla", "cilantro", "salsa picante"],
        preparacion: "Marina la carne de cerdo con achiote y cocina a fuego lento. Sirve en tortillas de maíz con piña, cebolla, cilantro y salsa picante.",
        imagen: "https://www.comedera.com/wp-content/uploads/2017/08/tacos-al-pastor-receta.jpg",
        video: "https://youtu.be/VNlM2nO8Oxo"
    },
    {
        nombre: "Ropa vieja",
        ingredientes: ["carne de res", "tomate", "pimientos", "cebolla", "especias"],
        preparacion: "Cocina lentamente la carne de res hasta que esté muy blanda. Agrega el tomate, pimientos, cebolla y especias. Deshebra la carne y sirve.",
        imagen: "https://www.comedera.com/wp-content/uploads/2022/05/Ropa-vieja-shutterstock_1864014241.jpg",
        video: "https://www.youtube.com/embed/4-pePAZt9Nc"
    },
    {
        nombre: "Arepas de queso",
        ingredientes: ["harina de maíz", "queso fresco", "agua", "sal"],
        preparacion: "Mezcla la harina de maíz con agua y sal. Forma bolas y aplasta para crear las arepas. Rellena con queso fresco y cocina hasta que estén doradas.",
        imagen: "https://www.rama.com.co/-/media/Project/Upfield/Brands/Rama/Rama-CO/Assets/Recipes/sync-img/4e5a72af-0030-4dcd-9374-680995ed847c.png?rev=cadf25e001c946d2936f72116f72e11d&w=900",
        video: "https://youtu.be/iOe6dI2JhgU"
    },
    {
        nombre: "Empanadas",
        ingredientes: ["masa de trigo", "carne molida", "cebolla", "pimientos", "especias"],
        preparacion: "Prepara la masa y el relleno de carne. Envuelve el relleno en la masa y fríe o hornea las empanadas hasta que estén doradas.",
        imagen: "https://imag.bonviveur.com/empanadas-argentinas-de-carne-foto-cerca.jpg",
        video: "https://www.youtube.com/embed/VWVPnkYLEKg"
    },
    {
        nombre: "Mole poblano",
        ingredientes: ["chiles", "chocolate", "especias", "carne de pollo"],
        preparacion: "Prepara una salsa espesa con los chiles, chocolate y especias. Cocina el pollo en esta salsa hasta que esté muy tierno.",
        imagen: "https://laroussecocina.mx/wp-content/uploads/2017/12/mole-poblano-001-larousse-cocina_0-e1671586546996.jpg",
        video: "https://www.youtube.com/embed/5Jq06Ga_Bx4"
    },
    {
        nombre: "Sancocho",
        ingredientes: ["carnes", "tubérculos", "cebolla", "tomate", "cilantro"],
        preparacion: "Hierve las carnes y los tubérculos en un caldo sazonado con cebolla, tomate y cilantro. Deja que se cocine a fuego lento hasta que los ingredientes estén muy blandos.",
        imagen: "https://mojo.generalmills.com/api/public/content/geavWbc7i0eptb2tGb-CyA_gmi_hi_res_jpeg.jpeg?v=5f30c0a4&t=16e3ce250f244648bef28c5949fb99ff",
        video: "https://www.youtube.com/embed/WJhPj7r23Xo"
    },
    {
        nombre: "Lomo saltado",
        ingredientes: ["lomo de res", "cebolla", "tomate", "salsa de soja", "papas fritas"],
        preparacion: "Saltea las tiras de lomo de res con la cebolla y el tomate. Agrega salsa de soja y sirve con arroz y papas fritas.",
        imagen: "https://www.seriouseats.com/thmb/ph7YTcuM0eygiNrWanOhPRqKE4Q=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__2019__03__20190321-lomo-saltado-vicky-wasik-28-68ac118a03324091afed4205428ddf4e.jpg",
        video: "https://www.youtube.com/embed/4OdW7yKMdKE"
    },
    {
        nombre: "Tamales oaxaqueños",
        ingredientes: ["masa de maíz", "carne", "salsa", "hojas de plátano"],
        preparacion: "Prepara la masa de maíz y rellénala con carne y salsa. Envuelve en hojas de plátano y cocina al vapor.",
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQHJo6N_ShR3NP0n-wsA8IzLZm7p_OT2vwBw&s",
        video: "https://www.youtube.com/embed/9A-RwLhC6FI"
    },
    {
        nombre: "Puchero",
        ingredientes: ["carne", "verduras", "legumbres", "especias"],
        preparacion: "Cocina la carne, verduras y legumbres en un caldo con especias hasta que estén muy blandos y sabrosos.",
        imagen: "https://www.eldiario.net/portal/wp-content/uploads/2022/02/14-15-FOTO-1-3.jpg",
        video: "https://www.youtube.com/embed/vNfXR-QDQDc"
    },
    {
        nombre: "Ají de lengua",
        ingredientes: ["lengua de res", "ají", "crema", "especias"],
        preparacion: "Cocina la lengua de res hasta que esté muy suave. Prepara una salsa picante y cremosa con ají, crema y especias. Sirve la lengua con la salsa.",
        imagen: "https://i.ytimg.com/vi/26GIk5h-l3k/sddefault.jpg",
        video: "https://www.youtube.com/embed/QF_l4yoE4hI"
    },
    {
        nombre: "Picadillo",
        ingredientes: ["carne molida", "tomate", "cebolla", "ajo", "aceitunas"],
        preparacion: "Saltea la carne molida con la cebolla, ajo, tomate y aceitunas. Sazona con especias y sirve caliente.",
        imagen: "https://example.com/picadillo.jpg",
        video: "https://www.youtube.com/embed/l4kH8Aw4q4o"
    }
];

document.getElementById('busqueda').oninput = function(event) {
    var query = event.target.value.toLowerCase();
    var galeria = document.getElementById('galeria');
    galeria.innerHTML = '';

    for (var i = 0; i < recetas.length; i++) {
        var receta = recetas[i];
        var nombreReceta = receta.nombre.toLowerCase();
        var coincide = nombreReceta.indexOf(query) !== -1;

        if (coincide) {
            var tarjeta = document.createElement('div');
            tarjeta.className = 'tarjeta-receta';
            tarjeta.innerHTML = '<h3>' + receta.nombre + '</h3>' +
                                '<img src="' + receta.imagen + '" alt="Imagen de ' + receta.nombre + '">' +
                                '<button onclick="mostrarDetalle(\'' + receta.nombre + '\')">Ver Detalles</button>';
            galeria.appendChild(tarjeta);
        }
    }
};

function mostrarDetalle(nombre) {
    var detalle = document.getElementById('detalle-receta');
    detalle.innerHTML = '';
    for (var i = 0; i < recetas.length; i++) {
        if (recetas[i].nombre === nombre) {
            var receta = recetas[i];
            detalle.innerHTML = '<h2>' + receta.nombre + '</h2>' +
                                '<img src="' + receta.imagen + '" alt="Imagen de ' + receta.nombre + '">' +
                                '<h3>Ingredientes:</h3><ul>';
            for (var j = 0; j < receta.ingredientes.length; j++) {
                detalle.innerHTML += '<li>' + receta.ingredientes[j] + '</li>';
            }
            detalle.innerHTML += '</ul><h3>Preparación:</h3><p>' + receta.preparacion + '</p>' +
                                 '<h3>Video:</h3>' +
                                 '<iframe src="' + receta.video + '" allowfullscreen></iframe>';
            break;
        }
    }
}
// script.js

document.getElementById('menu-button').addEventListener('click', function() {
    var navMenu = document.getElementById('nav-menu');
    navMenu.classList.toggle('show');
});
