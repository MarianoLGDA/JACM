import { supabase } from "@/lib/supabase";
export const getQuantity = async (productId: number) => {
    const { data, error } = await supabase.from('product_inventory').select('quantity').eq('product_id', productId).single();
    if (error) {
        console.error('Error fetching quantity:', error);
        return 0;
    }
    return data.quantity;
}

export const products = [
    {
        id: 1,
        name: "\"Sátiro\" • Edición limitada",
        image: "/_DSC3102.jpg",
        price: "$1800.00 MXN",
        quantity: 33,
        description: "Impresión de alta calidad",
        size: "40 x 50 cm.",
        firma: "• Firmado y numerado por el artista.",
        impresion: "• Impreso por Negro Mate Ediciones S.L. con tintas Ultrachrome Pro 12 en papel Hahnemühle Albrecht Dürer 210 gms.",
        autenticidad:"• Esta obra incluye un Certificado de Autenticidad.",
        envio: "• Envíos internacionales. (Permitir un período de hasta 3 semanas para empaquetado y manejo).",
        paquete: "• Esta obra se envía enrollada en un tubo de cartón para su mayor protección.",
        costo_envio: "• (El costo de envío no está incluido en el precio).",
    },
    {
        id: 2,
        name: "\"Estudio de Velázquez\" • Dibujo",
        image: "/dibujo1.jpg",
        price: "$1500.00 MXN",
        quantity: 1,
        description: "Pastel sobre papel",
        size: "A4",
        autenticidad:"• Esta obra incluye un Certificado de Autenticidad.",
        envio: "• Envíos internacionales. (Permitir un período de hasta 3 semanas para empaquetado y manejo).",
        paquete: "• Esta obra se envía enrollada en un tubo de cartón para su mayor protección.",
        costo_envio: "• (El costo de envío no está incluido en el precio).",
    },
    {
        id: 3,
        name: "\"Estudio de mujer\" • Dibujo",
        image: "/dibujo2.jpg",
        price: "$1500.00 MXN",
        quantity: 1,
        description: "Pastel sobre papel",
        size: "A4",
        autenticidad:"• Esta obra incluye un Certificado de Autenticidad.",
        envio: "• Envíos internacionales. (Permitir un período de hasta 3 semanas para empaquetado y manejo).",
        paquete: "• Esta obra se envía enrollada en un tubo de cartón para su mayor protección.",
        costo_envio: "• (El costo de envío no está incluido en el precio).",
    },
    {
        id: 4,
        name: "\"Retrato de Johan\" • Dibujo",
        image: "/dibujo3.jpg",
        price: "$1500.00 MXN",
        quantity: 1,
        description: "Pastel sobre papel",
        size: "A4",
        autenticidad:"• Esta obra incluye un Certificado de Autenticidad.",
        envio: "• Envíos internacionales. (Permitir un período de hasta 3 semanas para empaquetado y manejo).",
        paquete: "• Esta obra se envía enrollada en un tubo de cartón para su mayor protección.",
        costo_envio: "• (El costo de envío no está incluido en el precio).",
    },
    {
        id: 5,
        name: "\"Estudio de Ribera\" • Dibujo",
        image: "/dibujo4.jpg",
        price: "$1500.00 MXN",
        quantity: 1,
        description: "Pastel sobre papel",
        size: "A4",
        autenticidad:"• Esta obra incluye un Certificado de Autenticidad.",
        envio: "• Envíos internacionales. (Permitir un período de hasta 3 semanas para empaquetado y manejo).",
        paquete: "• Esta obra se envía enrollada en un tubo de cartón para su mayor protección.",
        costo_envio: "• (El costo de envío no está incluido en el precio).",
    },
    {
        id: 6,
        name: "\"Estudio de Tiziano\" • Dibujo",
        image: "/Tiziano.jpg",
        price: "$1500.00 MXN",
        quantity: 1,
        description: "Pastel sobre papel",
        size: "A4",
        autenticidad:"• Esta obra incluye un Certificado de Autenticidad.",
        envio: "• Envíos internacionales. (Permitir un período de hasta 3 semanas para empaquetado y manejo).",
        paquete: "• Esta obra se envía enrollada en un tubo de cartón para su mayor protección.",
        costo_envio: "• (El costo de envío no está incluido en el precio).",
    },
    {
        id: 7,
        name: "Prueba de Stripe",
        image: "/Tiziano.jpg",
        price: "$10.00 MXN",
        quantity: 1,
        description: "Pastel sobre papel",
        size: "A4",
        autenticidad:"• Esta obra incluye un Certificado de Autenticidad.",
        envio: "• Envíos internacionales. (Permitir un período de hasta 3 semanas para empaquetado y manejo).",
        paquete: "• Esta obra se envía enrollada en un tubo de cartón para su mayor protección.",
        costo_envio: "• (El costo de envío no está incluido en el precio).",
    }

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

// Helpers para obtener inventario en vivo desde Supabase y fusionarlo con el catálogo estático

type InventoryRow = { product_id: number; quantity: number }

export async function fetchInventoryMap(): Promise<Record<number, number>> {
    const { data, error } = await supabase
        .from('product_inventory')
        .select('product_id, quantity')

    if (error || !data) return {}

    const map: Record<number, number> = {}
    for (const row of data as InventoryRow[]) {
        map[row.product_id] = row.quantity
    }
    return map
}

export async function getProductsWithInventory(): Promise<Product[]> {
    const inventory = await fetchInventoryMap()
    return products.map(p => ({
        ...p,
        quantity: inventory[p.id] ?? p.quantity ?? 0,
    }))
}

export async function getProductByIdWithInventory(id: number): Promise<Product | undefined> {
    const inventory = await fetchInventoryMap()
    const base = products.find(p => p.id === id)
    if (!base) return undefined
    return { ...base, quantity: inventory[id] ?? base.quantity ?? 0 }
}
