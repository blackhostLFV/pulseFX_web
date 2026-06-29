import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'plan',
  title: 'Membresía / Plan',
  type: 'document',
  fields: [
    defineField({name: 'nombre', title: 'Nombre', type: 'string', description: 'Silver / Gold'}),
    defineField({name: 'precioAnual', title: 'Precio anual (USDT)', type: 'number'}),
    defineField({name: 'bonoCuentaReal', title: 'Bono en cuenta real (USDT)', type: 'number'}),
    defineField({name: 'popular', title: 'Destacado (POPULAR)', type: 'boolean', initialValue: false}),
    defineField({name: 'estrategias', title: 'Estrategias incluidas', type: 'string', description: 'Ej. 1 estrategia / hasta 3'}),
    defineField({name: 'canalesVip', title: 'Canales VIP', type: 'string'}),
    defineField({name: 'features', title: 'Características', type: 'array', of: [{type: 'string'}]}),
    defineField({name: 'orden', title: 'Orden', type: 'number'}),
  ],
})
