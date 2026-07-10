

/*--- modal comida ----*/
const platos = {
    /*principales */
    ternera: {
        titulo: 'TERNERA BRASEADA',
        desc: 'Nuestra clásica Colita de Cuadril en cocción lenta en cerveza, acompañada de Vegetales y Papas Españolas.',
        efectivo: '$16.800',
        tarjeta: '$21.000'
    },
    bondiola: {
        titulo: 'BONDIOLA DE CERDO',
        desc: 'Bondiolita extra tierna en reducción de nuestra cerveza y jugo de cocción. Acompañado de Batatas Fritas.',
        efectivo: '$15.900',
        tarjeta: '$19.875'
    },
    pollo: {
        titulo: 'PECHUGA DE POLLO',
        desc: 'Con papas cuadrille. Opción: crema de Verdeo, al Limón o a la Suiza.',
        efectivo: '$14.900',
        tarjeta: '$18.625'
    },

    /*--- hamburguesas ---*/
    king: {
    titulo: 'KING',
    desc: 'Doble Medallones 150gr de Carne, Doble Cheddar, Cebolla Caramelizada, Bacon, Huevo Frito, aderezo King. Para chuparse los dedos. Acompañada con papas fritas.',
    efectivo: '$15.900',
    tarjeta: '$19.875'
    },
    extrema: {
    titulo: 'EXTREMA',
    desc: 'Doble Medallón 150gr de Carne, Cheddar, Muzzarella, Bacon y Lactonesa de Hierbas. Acompañada con papas fritas.',
    efectivo: '$14.900',
    tarjeta: '$18.625'
    },
    completa: {
    titulo: 'COMPLETA',
    desc: 'Medallón 150gr de Carne, Lechuga, Tomate, Jamón, Muzzarella Gratinada, Huevo Frito y Mayonesa. Acompañada con papas fritas.',
    efectivo: '$13.900',
    tarjeta: '$17.375'
    },
    vegetariana: {
    titulo: 'VEGETARIANA',
    desc: 'Medallón 150gr (Calabaza, Garbanzos y Verdeo), Rúcula, Tomate, Queso fundido y Lactonesa de Hierbas. Acompañada con papas fritas.',
    efectivo: '$13.900',
    tarjeta: '$17.375'
    },
    cheese: {
    titulo: 'CHEESE',
    desc: 'Medallón 150gr de Carne, Graten de Muzza, Cebollitas Caramelizadas y BBQ. Acompañada con papas fritas.',
    efectivo: '$11.900',
    tarjeta: '$14.875'
    },

    /*---- pizzas ----*/
    pizza_texas: {
    titulo: 'TEXAS KING',
    desc: 'Salsa de Tomate, Muzzarella, Ternera Braseada, 4 Huevos Fritos y lluvia de Panceta. ¡¡EXPLOSIVA!!',
    efectivo4: '$17.500', tarjeta4: '$21.875',
    efectivo8: '$23.900', tarjeta8: '$29.875'
},
pizza_green: {
    titulo: 'GREEN',
    desc: 'Salsa de Tomate, Muzzarella, Espinaca, Bechamel y lluvia de Quesos.',
    efectivo4: '$15.900', tarjeta4: '$19.875',
    efectivo8: '$22.900', tarjeta8: '$28.625'
},
pizza_rucula: {
    titulo: 'RÚCULA',
    desc: 'Salsa de Tomate, Muzzarella, Rúcula, Tomates Cherry, Aceite de Oliva y lluvia de Quesos.',
    efectivo4: '$15.900', tarjeta4: '$19.875',
    efectivo8: '$22.900', tarjeta8: '$28.625'
},
pizza_pollo: {
    titulo: 'POLLO A LA CREMA',
    desc: 'Salsa de Tomate, Muzzarella, Pollo Laqueado a la Crema de Verdeo.',
    efectivo4: '$15.500', tarjeta4: '$19.375',
    efectivo8: '$21.900', tarjeta8: '$27.375'
},
pizza_especial: {
    titulo: 'ESPECIAL',
    desc: 'Salsa de Tomate, Muzzarella, Jamón, Huevo, Aceitunas y Morrón.',
    efectivo4: '$14.400', tarjeta4: '$18.000',
    efectivo8: '$19.900', tarjeta8: '$24.875'
},
pizza_napolitana: {
    titulo: 'NAPOLITANA',
    desc: 'Salsa de Tomate, Muzzarella, Rodajas de Tomate, Ajo y Orégano.',
    efectivo4: '$13.500', tarjeta4: '$16.875',
    efectivo8: '$18.900', tarjeta8: '$23.625'
},
pizza_fugazza: {
    titulo: 'FUGAZZA',
    desc: 'Salsa de Tomate, Muzzarella, Cebolla Caramelizada.',
    efectivo4: '$12.800', tarjeta4: '$16.000',
    efectivo8: '$17.900', tarjeta8: '$22.375'
},
pizza_muzza: {
    titulo: 'MUZZARELLA',
    desc: 'Salsa Tomate, Muzzarella, Orégano y Aceitunas.',
    efectivo4: '$11.900', tarjeta4: '$14.875',
    efectivo8: '$15.900', tarjeta8: '$19.875'
},

/* milanesas */

mil_kingbeer: {
    titulo: 'KING BEER',
    desc: 'Salsa de tomate, muzzarella, panceta y dos huevos fritos. Acompañada con papas fritas.',
    efectivo: '$16.800',
    tarjeta: '$21.000'
},
mil_especial: {
    titulo: 'ESPECIAL',
    desc: 'Salsa de tomate, muzzarella, jamón, huevo, aceitunas y morrón. Acompañada con papas fritas.',
    efectivo: '$15.900',
    tarjeta: '$19.875'
},
mil_napolitana: {
    titulo: 'NAPOLITANA',
    desc: 'Salsa de tomate, muzzarella, rodajas de tomates y ajo. Acompañada con papas fritas.',
    efectivo: '$15.500',
    tarjeta: '$19.375'
},
mil_gratinada: {
    titulo: 'GRATINADA CON MUZZA',
    desc: 'Milanesa gratinada con muzzarella. Acompañada con papas fritas.',
    efectivo: '$14.900',
    tarjeta: '$18.625'
},
mil_sola: {
    titulo: 'MILANESA',
    desc: 'Milanesa sola con papas fritas.',
    efectivo: '$14.400',
    tarjeta: '$18.000'
},

/* picadads */

pic_ciudad: {
    titulo: 'CIUDAD',
    desc: 'Milanesa, Bastones de Muzza Rebozados...',
    efectivo4: '$29.800', tarjeta4: '$37.250',
    efectivo8: '$52.800', tarjeta8: '$66.000',
    size1: '2 PERSONAS',
    size2: '4 PERSONAS'
},
pic_premium: {
    titulo: 'TABLA PREMIUM',
    desc: 'Milanesa, Tiritas de Pollo Crujientes...',
    efectivo4: '$33.900', tarjeta4: '$42.375',
    efectivo8: '$57.500', tarjeta8: '$71.875',
    size1: '2 PERSONAS',
    size2: '4 PERSONAS'
},
pic_parrillita: {
    titulo: 'PARRILLITA',
    desc: 'Tiritas de Pollo, Cerdo, Ternera...',
    efectivo4: '$34.900', tarjeta4: '$43.625',
    efectivo8: '$58.900', tarjeta8: '$73.625',
    size1: '2 PERSONAS',
    size2: '4 PERSONAS'
},

/* sandwiches */
sand_ternera: {
    titulo: 'TERNERA BRASEADA',
    desc: 'Colita de Cuadril en cocción lenta desmechada, doble muzza gratinada, cebollita caramelizada con nuestra lactonesa de hierbas. Acompañado de Papas Fritas.',
    efectivo: '$15.900',
    tarjeta: '$19.875'
},
sand_bondiola: {
    titulo: 'BONDIOLA BRASEADA',
    desc: 'Bondiola extra tierna desmechada, cebollita caramelizada, cheddar y nuestra salsa BBQ. Acompañado con Papas Fritas.',
    efectivo: '$14.900',
    tarjeta: '$18.625'
},
sand_pollo: {
    titulo: 'POLLO',
    desc: 'Pollo desmechado laqueado a la crema, mix de quesos fundidos, láminas de panceta y lactonesa de hierbas. Acompañado de Papas Fritas.',
    efectivo: '$13.900',
    tarjeta: '$17.375'
},
sand_milanesa: {
    titulo: 'MILANESA KING',
    desc: 'Milanesa gratinada con queso, lechuga, tomate y lactonesa de hierbas. Acompañado con Papas Fritas.',
    efectivo: '$13.900',
    tarjeta: '$17.375'
},
sand_charly: {
    titulo: 'CHARLY KING',
    desc: 'Para compartir. Pan de miga Artesanal, Ternera Braseada, jamón cocido, muzzarella fundida, tomate, huevo estrellado, con nuestra mayonesa King.',
    efectivo: '$22.900',
    tarjeta: '$28.625'
},

/* carlitos */
carl_charly: {
    titulo: 'CHARLY KING',
    desc: 'Para compartir. Pan de miga Artesanal, Ternera Braseada, jamón cocido, muzzarella fundida, tomate, huevo estrellado, con nuestra mayonesa King.',
    efectivo: '$22.900',
    tarjeta: '$28.625'
},
carl_clasico: {
    titulo: 'CLÁSICO',
    desc: 'Jamón, Queso y BBQ. Con papas fritas.',
    efectivo: '$13.900',
    tarjeta: '$17.375'
},
carl_tostado: {
    titulo: 'TOSTADO',
    desc: 'Jamón, Queso y Mayonesa. Con papas fritas.',
    efectivo: '$13.900',
    tarjeta: '$17.375'
},

/* tapeos */
tap_papasking: {
    titulo: 'PAPAS KING',
    desc: 'Papas, huevos revueltos, baño cremoso de cheddar, lluvia de panceta y un toque fresco de verdeo.',
    efectivo: '$13.900', tarjeta: '$17.375'
},
tap_papascream: {
    titulo: 'PAPAS CREAM',
    desc: 'Papas con Crema, Panceta y Verdeo.',
    efectivo: '$13.900', tarjeta: '$17.375'
},
tap_papascheddar: {
    titulo: 'PAPAS CON CHEDDAR',
    desc: 'Papas fritas con cheddar.',
    efectivo: '$11.900', tarjeta: '$14.875'
},
tap_papasfritas: {
    titulo: 'PAPAS FRITAS',
    desc: 'Papas fritas clásicas.',
    efectivo: '$9.900', tarjeta: '$12.375'
},
tap_pollo: {
    titulo: 'TIRAS DE POLLO CRUJIENTES',
    desc: 'Pollo rebozado bien crujiente y sabroso, acompañado con gajos de limón y dip de salsa BBQ.',
    efectivo: '$14.800', tarjeta: '$18.500'
},
tap_bastones: {
    titulo: 'BASTONES DE MUZZA REBOZADOS',
    desc: 'Muzzarelitas rebozadas, crocantes por fuera y bien gratinadas por dentro, acompañadas con nuestra salsa especial BBQ.',
    efectivo: '$14.800', tarjeta: '$18.500'
},
tap_rabas: {
    titulo: 'RABAS',
    desc: 'Con Salsa Tártara y Limón.',
    efectivo: '$18.900', tarjeta: '$23.625'
},
tap_queso: {
    titulo: 'PLATO DE QUESO',
    desc: 'Condimentado al oliva, ají molido y pimienta negra.',
    efectivo: '$9.900', tarjeta: '$12.375'
},
tap_aceitunas: {
    titulo: 'DIP ACEITUNAS',
    desc: 'Dip de aceitunas.',
    efectivo: '$7.500', tarjeta: '$9.375'
},
tap_mani: {
    titulo: 'DIP MANÍ',
    desc: 'Dip de maní.',
    efectivo: '$2.800', tarjeta: '$3.500'
},

/* vegetariano */
veg_ensalada: {
    titulo: 'ENSALADA DE LA HUERTA',
    desc: 'Rúcula, Lechuga, Cherry, Garbanzos, Croutons, Queso en Hebras y Mix de Semillas.',
    efectivo: '$14.900',
    tarjeta: '$18.625'
},

/* vegano */
vegan_medallones: {
    titulo: '2 MEDALLONES CON ENSALADA',
    desc: '2 Medallón de hamburguesa veggie (Calabaza caramelizada, Garbanzos y Verdeo) ensalada 3 gustos.',
    efectivo: '$15.900',
    tarjeta: '$19.875'
},
vegan_ensalada: {
    titulo: 'ENSALADA VEGANA',
    desc: 'Rúcula, Lechuga, Cherry, Garbanzos, Croutons y Mix de Semillas.',
    efectivo: '$14.800',
    tarjeta: '$18.500'
},

/* celiaco */
cel_pizza: {
    titulo: 'PIZZA MUZZARELLA',
    desc: 'Pizzeta 4 porciones. Sin TACC.',
    efectivo: '$15.900',
    tarjeta: '$19.875'
},
cel_empanadas: {
    titulo: 'EMPANADAS',
    desc: '3 Unidades. Jamón y Queso / Verdura. Sin TACC.',
    efectivo: '$9.900',
    tarjeta: '$12.375'
},
cel_cerveza: {
    titulo: 'CERVEZA CELÍACO',
    desc: 'Botella 500cc. Sin TACC.',
    efectivo: '$7.500',
    tarjeta: '$9.375'
},
cel_sidra: {
    titulo: 'SIDRA 1888',
    desc: 'Botella 500cc sin TACC.',
    efectivo: '$8.800',
    tarjeta: '$11.000'
},

/* combos */
combo_cheese: {
    titulo: 'HAMBURGUESA CHEESE',
    desc: 'Hamburguesa Cheese + 1 Pinta a elección. De Domingo a Jueves, no válido vísperas o feriados.',
    efectivo: '$15.900',
    tarjeta: '$19.875'
},
combo_papas: {
    titulo: 'PAPAS CHEDDAR',
    desc: 'Papas con Cheddar + 2 Pintas a elección. De Domingo a Jueves, no válido vísperas o feriados.',
    efectivo: '$19.900',
    tarjeta: '$24.875'
},
combo_pollo: {
    titulo: 'TIRITAS DE POLLO CRUJIENTES',
    desc: 'Tiritas de Pollo Crujientes + 2 Pintas a elección. De Domingo a Jueves, no válido vísperas o feriados.',
    efectivo: '$22.800',
    tarjeta: '$28.500'
},
combo_pizza: {
    titulo: 'PIZZA MUZZA 8 PORCIONES',
    desc: 'Pizza Muzzarella 8 Porciones + 4 Pintas a elección. De Domingo a Jueves, no válido vísperas o feriados.',
    efectivo: '$31.900',
    tarjeta: '$39.875'
},

/* postres */
post_brownie: {
    titulo: 'BROWNIE CON AMERICANA',
    desc: 'Clásico postre de chocolate con helado de Crema, infaltable para cerrar la cena.',
    efectivo: '$6.400',
    tarjeta: '$8.000'
},
post_flan: {
    titulo: 'FLAN',
    desc: 'Con Dulce o Crema.',
    efectivo: '$4.800',
    tarjeta: '$6.000'
},
post_helado2: {
    titulo: 'HELADO 2 BOCHAS',
    desc: 'Chocolate, Americana, Frutilla o Vainilla.',
    efectivo: '$5.900',
    tarjeta: '$7.375'
},
post_helado1: {
    titulo: 'HELADO 1 BOCHA',
    desc: 'Chocolate, Americana, Frutilla o Vainilla.',
    efectivo: '$3.900',
    tarjeta: '$4.875'
},

/* cervezas artesanales */
cerv_golden: {
    titulo: 'GOLDEN ALE',
    desc: 'Rubia, maltosa, de color dorado brillante, de bajo amargor y cuerpo liviano.',
    ibu: '18', alc: '5.4',
    efectivo4: '$2.900', tarjeta4: '$3.625',
    efectivo8: '$4.400', tarjeta8: '$5.500',
    size1: 'MEDIA PINTA', size2: 'PINTA'
},
cerv_honey: {
    titulo: 'COLD HONEY',
    desc: 'Delicada, suave con notas dulces de miel, resultado de una armónica combinación de maltas claras, miel pura y mucho amor.',
    ibu: '16', alc: '5.3',
    efectivo4: '$2.900', tarjeta4: '$3.625',
    efectivo8: '$4.400', tarjeta8: '$5.500',
    size1: 'MEDIA PINTA', size2: 'PINTA'
},
cerv_imaking: {
    titulo: 'IPA KING',
    desc: 'Nuestra Reyna de la casa, dorada, de sabor ligeramente cítrico y un exquisito aroma a frutas tropicales, super aromática y amargor marcado a lúpulo.',
    ibu: '58', alc: '6',
    efectivo4: '$2.900', tarjeta4: '$3.625',
    efectivo8: '$4.400', tarjeta8: '$5.500',
    size1: 'MEDIA PINTA', size2: 'PINTA'
},
cerv_mosaic: {
    titulo: 'IPA MOSAIC',
    desc: 'Cerveza de color Amarillo, con Lúpulos Americanos y con perfiles a Frutos Tropicales para lograr el amargor justo.',
    ibu: '43', alc: '5.4',
    efectivo4: '$2.900', tarjeta4: '$3.625',
    efectivo8: '$4.400', tarjeta8: '$5.500',
    size1: 'MEDIA PINTA', size2: 'PINTA'
},
cerv_citra: {
    titulo: 'IPA CITRA',
    desc: 'Cerveza Rubia Lúpulada con Perfiles Cítricos y amargor equilibrado. Doble adición de Lúpulos en Dry Hop que le da ese Aroma tan Destacado.',
    ibu: '43', alc: '5.4',
    efectivo4: '$2.900', tarjeta4: '$3.625',
    efectivo8: '$4.400', tarjeta8: '$5.500',
    size1: 'MEDIA PINTA', size2: 'PINTA'
},
cerv_scottish: {
    titulo: 'SCOTTISH EXPORT',
    desc: 'Cerveza de color ámbar, de suave sabor a caramelo, elaborada con una combinación de 4 maltas, que la da un carácter maltosa, con notas tostadas.',
    ibu: '22', alc: '5.5',
    efectivo4: '$2.900', tarjeta4: '$3.625',
    efectivo8: '$4.400', tarjeta8: '$5.500',
    size1: 'MEDIA PINTA', size2: 'PINTA'
},
cerv_amber: {
    titulo: 'TRIPLE A (AMBER)',
    desc: 'Nuestra triple A es color Rojo cobrizo, suntuosa, acaramelada, de carácter maltosa por sus 5 estilos de maltas, con recuerdos herbales.',
    ibu: '24', alc: '5.5',
    efectivo4: '$2.900', tarjeta4: '$3.625',
    efectivo8: '$4.400', tarjeta8: '$5.500',
    size1: 'MEDIA PINTA', size2: 'PINTA'
},
cerv_stout: {
    titulo: 'CHOCO STOUT',
    desc: 'Muy cremosa, de cuerpo pleno, con notas a chocolate, de sabor levemente dulce, que contrasta con tonos tostados a café.',
    ibu: '32', alc: '5.4',
    efectivo4: '$2.900', tarjeta4: '$3.625',
    efectivo8: '$4.400', tarjeta8: '$5.500',
    size1: 'MEDIA PINTA', size2: 'PINTA'
},

/* cervezas industriales */
cerv_corona: {
    titulo: 'CORONA',
    desc: 'Botella 330cc.',
    efectivo: '$5.900',
    tarjeta: '$7.375'
},
cerv_balde: {
    titulo: 'PROMO BALDE',
    desc: '6 Botellas Corona (5 + 1 Sin Cargo).',
    efectivo: '$29.500',
    tarjeta: '$36.875'
},
cerv_stella: {
    titulo: 'STELLA ARTOIS',
    desc: 'Pinta de 500cc.',
    efectivo: '$5.900',
    tarjeta: '$7.375'
},
cerv_bohemian: {
    titulo: 'PATAGONIA BOHEMIAN',
    desc: 'Pinta de 500cc.',
    efectivo: '$6.300',
    tarjeta: '$7.875'
},
cerv_247: {
    titulo: 'PATAGONIA 24.7',
    desc: 'Pinta de 500cc.',
    efectivo: '$6.300',
    tarjeta: '$7.875'
},

/* tragos */
trag_mojito: {
    titulo: 'MOJITO',
    desc: 'Ron, Hierba Buena, Azúcar y Soda.',
    efectivo: '$5.500',
    tarjeta: '$6.875'
},
trag_cuba: {
    titulo: 'CUBA LIBRE',
    desc: 'Ron, Coca Cola y Limón.',
    efectivo: '$5.500',
    tarjeta: '$6.875'
},
trag_daiquiri: {
    titulo: 'DAIQUIRI',
    desc: 'Ron, Limón, Azúcar. Opción: Frutilla o Durazno.',
    efectivo: '$5.500',
    tarjeta: '$6.875'
},
trag_campari_orange: {
    titulo: 'CAMPARI ORANGE',
    desc: 'Campari, Jugo y Rodaja de Naranja.',
    efectivo: '$5.500',
    tarjeta: '$6.875'
},
trag_campari_tonica: {
    titulo: 'CAMPARI TÓNICA',
    desc: 'Campari, Tónica y Rodaja de Naranja.',
    efectivo: '$5.500',
    tarjeta: '$6.875'
},
trag_fernet: {
    titulo: 'FERNET CON COLA',
    desc: 'Fernet Branca y Coca Cola.',
    efectivo: '$5.500',
    tarjeta: '$6.875'
},
trag_caipirinha: {
    titulo: 'CAIPIRINHA',
    desc: 'Cachaca, Lima y Azúcar.',
    efectivo: '$5.500',
    tarjeta: '$6.875'
},
trag_caipiroska: {
    titulo: 'CAIPIROSKA',
    desc: 'Vodka, Lima y Azúcar.',
    efectivo: '$5.500',
    tarjeta: '$6.875'
},
trag_sex: {
    titulo: 'SEX ON THE BEACH',
    desc: 'Vodka, Licor de Durazno, Granadina y Jugo de Naranja.',
    efectivo: '$5.500',
    tarjeta: '$6.875'
},
trag_negroni: {
    titulo: 'NEGRONI',
    desc: 'Gin, Vermut, Campari y Rodaja de Naranja.',
    efectivo: '$5.900',
    tarjeta: '$7.375'
},
trag_caipiroska_esp: {
    titulo: 'CAIPIROSKA ESPECIAL',
    desc: 'Vodka, Lima y Azúcar. Opcional Maracuyá o Frutos Rojos.',
    efectivo: '$5.900',
    tarjeta: '$7.375'
},

/* vermutería */
verm_carpano: {
    titulo: 'CARPANO ROSSO',
    desc: 'Opción: Tónica o Pomelo.',
    efectivo: '$4.900',
    tarjeta: '$6.125'
},
verm_cynar: {
    titulo: 'CYNAR',
    desc: 'Opción: Tónica o Pomelo.',
    efectivo: '$4.900',
    tarjeta: '$6.125'
},
verm_gancia: {
    titulo: 'GANCIA BATIDO',
    desc: 'Con hielo y limón.',
    efectivo: '$4.900',
    tarjeta: '$6.125'
},

}

function abrirModal(id) {
    const p = platos[id];
    document.getElementById('modal-titulo').textContent = p.titulo;
    document.getElementById('modal-desc').textContent = p.desc;
    
    // Después de modal-desc
const modalIbu = document.getElementById('modal-ibu');
if (p.ibu) {
    modalIbu.innerHTML = `IBU: <strong>${p.ibu}</strong> &nbsp;|&nbsp; ALC: <strong>${p.alc}%</strong>`;
    modalIbu.style.display = 'block';
} else {
    modalIbu.style.display = 'none';
}

    const precios = document.getElementById('modal-precios');

    if (p.efectivo4) {
    precios.innerHTML = `
    <div class="precio-seccion">
        <div class="precio-seccion-titulo">${p.size1 || '4 PORCIONES'}</div>
        <div class="precio-fila">
            <div class="precio-box efectivo">
                <span class="precio-label">EFECTIVO</span>
                <span class="precio-valor">${p.efectivo4}</span>
            </div>
            <div class="precio-box tarjeta">
                <span class="precio-label">TARJETA</span>
                <span class="precio-valor">${p.tarjeta4}</span>
            </div>
        </div>
    </div>
    <div class="precio-seccion">
        <div class="precio-seccion-titulo">${p.size2 || '8 PORCIONES'}</div>
        <div class="precio-fila">
            <div class="precio-box efectivo">
                <span class="precio-label">EFECTIVO</span>
                <span class="precio-valor">${p.efectivo8}</span>
            </div>
            <div class="precio-box tarjeta">
                <span class="precio-label">TARJETA</span>
                <span class="precio-valor">${p.tarjeta8}</span>
            </div>
        </div>
    </div>
`;
} else {
    precios.innerHTML = `
        <div class="precio-box efectivo">
            <span class="precio-label">EFECTIVO</span>
            <span class="precio-valor">${p.efectivo}</span>
        </div>
        <div class="precio-box tarjeta">
            <span class="precio-label">TARJETA</span>
            <span class="precio-valor">${p.tarjeta}</span>
        </div>
    `;
}

    document.getElementById('modal').classList.add('active');
}

function cerrarModal() {
    document.getElementById('modal').classList.remove('active');
}

// activación de categoría en el carrusel al hacer scroll en las secciones
const secciones = document.querySelectorAll('.menu-section');
const cards = document.querySelectorAll('.categoria-card');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const id = entry.target.id;
            cards.forEach(c => c.classList.remove('active'));
            const cardActiva = document.querySelector(`.categoria-card[href="#${id}"]`);
            if (cardActiva) {
                cardActiva.classList.add('active');
                cardActiva.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
            }
        }
    });
}, {
    threshold: 0.3  
});

secciones.forEach(s => observer.observe(s));
