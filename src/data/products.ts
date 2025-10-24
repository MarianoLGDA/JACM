export const products = [
    {
        id: 1,
        name: "\"Sátiro\" • Edición limitada",
        image: "/_DSC3102.jpg",
        price: "$1777 MXN",
        quantity: 33,
        description: "Impresión de alta calidad",
        size: "40 x 50 cm.",
        firma: "• Firmado y numerado por el artista.",
        impresion: "• Impreso por Negro Mate Ediciones S.L. con tintas Ultrachrome Pro 12 en papel Hahnemühle Albrecht Dürer 210 gms.",
        autenticidad:"• Cada impresión incluye un Certificado de Autenticidad.",
        envio: "• Envíos internacionales. (Permitir un período de hasta 3 semanas para empaquetado y manejo).",
        paquete: "• Las impresiones se envían enrolladas en un tubo de cartón para su mayor protección.",
        costo_envio: "• (El costo de envío no está incluido en el precio).",
    },
    {
        id: 2,
        name: "\"Estudio de Velázquez\" • Dibujo",
        image: "/dibujo1.jpg",
        price: "$1500.00 MXN",
        quantity: 1,
        description: "Dibujo de Velázquez",
        size: "100x100 cm",
    },
    {
        id: 3,
        name: "\"Estudio de mujer\" • Dibujo",
        image: "/dibujo2.jpg",
        price: "$1750.00 MXN",
        quantity: 1,
        description: "Dibujo de mujer",
        size: "100x100 cm",
    },
    {
        id: 4,
        name: "\"Retrato de Johan\" • Dibujo",
        image: "/dibujo3.jpg",
        price: "$1750.00 MXN",
        quantity: 1,
        description: "Dibujo de Johan",
        size: "100x100 cm",
    },
    {
        id: 5,
        name: "\"Estudio de Ribera\" • Dibujo",
        image: "/dibujo4.jpg",
        price: "$1750.00 MXN",
        quantity: 1,
        description: "Dibujo de Ribera",
        size: "100x100 cm",
    },
    {
        id: 6,
        name: "\"Estudio de Tiziano\" • Dibujo",
        image: "/Tiziano.jpg",
        price: "$1750.00 MXN",
        quantity: 1,
        description: "Dibujo de Tiziano",
        size: "100x100 cm",
    },
]

export type Product = {
    id: number
    name: string
    image: string
    price: string
    quantity: number
    description: string
    size: string
    firma?: string
    impresion?: string
    autenticidad?: string
    envio?: string
    paquete?: string
    costo_envio?: string
}
