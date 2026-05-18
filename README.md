# 🛍️ POLANCO STORE - Tienda Online Premium

Una tienda online moderna, elegante y profesional para venta de ropa, desarrollada con **HTML5, CSS3 y JavaScript puro** (sin frameworks).

## 📋 Características

✅ **Diseño Premium y Moderno**
- Colores: Rojo (#E63946), Negro (#1A1A1A), Blanco (#FFFFFF)
- Efectos Glow rojo y sombras modernas
- Tipografía elegante y profesional
- Diseño futurista con animaciones suaves

✅ **Funcionalidades Completas**
- Header fijo con navegación
- Menú hamburguesa responsivo
- Carrito de compras dinámico
- Filtrado de productos por categoría
- Barra de búsqueda
- Galería moderna
- Formulario de contacto con validación
- Botón volver arriba

✅ **Diseño Responsive**
- Optimizado para móviles (480px+)
- Tablets (768px+)
- Computadoras (1024px+)

✅ **Animaciones Interactivas**
- Efectos hover en productos
- Transiciones suaves
- Animaciones al scroll
- Notificaciones elegantes

✅ **Accesibilidad**
- Alt en imágenes
- Labels en formularios
- Buen contraste de colores
- Navegación clara por teclado

## 📁 Estructura del Proyecto

```
polanco-store/
│
├── index.html              # Página principal HTML5
├── css/
│   └── style.css          # Estilos CSS3 completos
├── js/
│   └── script.js          # JavaScript interactivo
├── img/                   # Carpeta para imágenes
├── video/                 # Carpeta para videos
└── README.md             # Este archivo
```

## 🚀 Cómo Usar

### 1. Abrir la página
Simplemente abre el archivo `index.html` en tu navegador web.

### 2. Personalizar productos
En el archivo `js/script.js`, modifica el array `products`:

```javascript
{
    id: 1,
    name: 'Camisa Premium',
    category: 'Hombre',
    price: 49.99,
    image: 'img/camisa1.jpg',
    description: 'Camisa moderna y elegante'
}
    // Agregar más productos...
```

### 3. Cambiar colores
En el archivo `css/style.css`, modifica las variables CSS en la sección `:root`:

```css
:root {
    --primary-red: #E63946;      /* Color principal rojo */
    --dark-red: #A4161A;         /* Rojo oscuro */
    --black: #1A1A1A;            /* Negro */
    --white: #ffffff;            /* Blanco */
}
```

### 4. Agregar imágenes reales
Reemplaza los emojis con imágenes reales en la función `createProductCard()`:

```javascript
<div class="product-image">
    {
        <img src="img/" alt="Camiseta Premium Rojo">
    }
</div>
```

## 🎨 Secciones

### Header
- Logo POLANCO STORE con glow rojo
- Menú de navegación fijo
- Barra de búsqueda
- Carrito con contador
- Botón de inicio de sesión
- Menú hamburguesa en móvil

### Hero (Banner Principal)
- Título principal: "La moda que define tu estilo"
- Subtítulo descriptivo
- Botones de acción (Comprar Ahora, Ver Catálogo)
- Fondo elegante con formas animadas

### Categorías
- 6 categorías principales
- Tarjetas interactivas con hover effect
- Filtrado al hacer click

### Ofertas Especiales
- Descuentos llamativos
- Precios originales y con descuento
- Diseño destacado

### Productos
- Grid responsivo de 12 productos
- Tarjetas premium con zoom y glow
- Filtro por categoría
- Búsqueda de productos
- Botones para carrito y compra directa

### Galería
- 6 espacios para galería visual
- Diseño con CSS Grid
- Efectos hover

### Nosotros
- Información de la tienda
- Características principales
- Diseño profesional

### Contacto
- Formulario con validación JavaScript
- Campos: Nombre, Email, Teléfono, Mensaje
- Información de contacto
- Efectos profesionales

### Footer
- Redes sociales
- Enlaces rápidos
- Métodos de pago
- Información legal
- Diseño moderno

## 🛒 Funcionalidades del Carrito

1. **Agregar al carrito** - Aumenta la cantidad si el producto ya existe
2. **Ver carrito** - Modal lateral mostrando todos los productos
3. **Eliminar producto** - Quita items del carrito
4. **Calcular total** - Suma automática de precios
5. **Persistencia** - Guarda en localStorage

## 🔍 Búsqueda y Filtrado

- **Búsqueda**: Busca por nombre, categoría o descripción
- **Filtrado**: Filtra por categoría seleccionada
- **Notificaciones**: Mensajes amigables en la esquina

## 📱 Responsive Design

Puntos de quiebre:
- 480px (móvil pequeño)
- 768px (tablets)
- 1024px (desktop)

Cambios principales en móvil:
- Menú hamburguesa
- Productos en grid adaptable
- Texto más legible
- Botones más grandes

## 🎭 Animaciones

- Fade-in al scroll
- Zoom al hacer hover
- Glow rojo en elementos principales
- Transiciones suaves (0.3s)
- Bounce en botones flotantes
- Parallax en hero

## 🔧 Personalización

### Cambiar nombre de tienda
1. Modifica `<h1>` en el header (index.html)
2. Actualiza en meta description
3. Cambia en footer

### Agregar más categorías
1. Agrega en el array de productos
2. Crea tarjeta en sección categorías
3. El filtro funcionará automáticamente

### Cambiar tipografía
En `style.css` línea 20:
```css
font-family: 'Tu Fuente', sans-serif;
```

## 📞 Contacto y Soporte

Para personalizar aún más la tienda:
1. Modifica los datos en `js/script.js`
2. Cambia estilos en `css/style.css`
3. Agrega tus propios emojis o imágenes

## 🌟 Características Especiales

✨ **Efectos Premium**
- Glow rojo en elementos principales
- Sombras modernas y elegantes
- Gradientes lineales
- Bordes redondeados

✨ **Interactividad**
- Menú dinámico
- Carrito en tiempo real
- Filtrado instantáneo
- Validación de formularios

✨ **Performance**
- Código limpio y optimizado
- Sin dependencias externas
- Carga rápida
- Animaciones suaves

## 📝 Notas Importantes

1. Los emojis se usan como placeholders - reemplaza con imágenes reales
2. El formulario muestra mensajes pero no envía datos (puedes integrar con backend)
3. El carrito se guarda en localStorage del navegador
4. Todos los colores son personalizables

## 🎓 Ejemplo de Agregar Producto

```javascript
{
    id: 13,
    name: 'Chaqueta Leather Premium',
    category: 'Hombre',
    price: 199.99,
    emoji: '🧥',
    description: 'Chaqueta de cuero genuino de alta calidad'
}
```

## 🚀 Próximos Pasos

1. Reemplaza emojis con imágenes reales
2. Integra con un backend para pedidos reales
3. Añade sistema de pago (Stripe, PayPal)
4. Implementa autenticación de usuarios
5. Agrega panel de administración
6. Integra con base de datos

## 💻 Compatibilidad

✅ Chrome/Edge
✅ Firefox
✅ Safari
✅ Opera
✅ Todos los navegadores modernos

## 📄 Licencia

Proyecto personal - Uso libre

---

**¡Disfruta tu tienda online POLANCO STORE!** 🎉

Diseñado con ❤️ para ser elegante, profesional y modern.
