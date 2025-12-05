# Perfume E-commerce - Proyecto Final

Proyecto SPA de e-commerce construido con React + Vite + Firebase (Firestore).

## Características
- Listado dinámico de productos desde Firestore.
- Detalle de producto con ItemCount.
- Carrito de compras administrado con React Context.
- Checkout que genera una orden en Firestore y devuelve su ID.
- Routing con React Router (SPA, sin recargas).
- CSS puro, responsive y elegante (paleta: blanca y negra).

## Ejecutar localmente
1. Instalar dependencias:
```bash
npm install
```
2. Ejecutar en modo desarrollo:
```bash
npm run dev
```

## Firebase
La configuración de Firebase está en `src/firebase/firebaseConfig.js`. Asegúrate que tu proyecto de Firestore tenga las colecciones `products` y que `orders` pueda escribirse.

## Estructura
Se respetó la estructura recomendada: components, containers, pages, context, firebase, styles.

