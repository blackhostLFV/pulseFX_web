import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'estrategia',
  title: 'Estrategia',
  type: 'document',
  fields: [
    defineField({name: 'nombre', title: 'Nombre', type: 'string', validation: (r) => r.required()}),
    defineField({name: 'par', title: 'Par', type: 'string', description: 'Ej. XAU/USD, BTC/USD'}),
    defineField({name: 'modalidad', title: 'Modalidad', type: 'string', initialValue: 'Copy'}),
    defineField({name: 'profit90d', title: 'Profit 90d', type: 'string', description: 'Ilustrativo, ej. +18.4%'}),
    defineField({name: 'winRate', title: 'Win rate', type: 'string'}),
    defineField({name: 'drawdown', title: 'Drawdown', type: 'string', initialValue: 'Bajo'}),
    defineField({name: 'operaciones', title: 'Operaciones', type: 'string'}),
    defineField({name: 'descripcion', title: 'Descripción', type: 'text', rows: 3}),
    defineField({name: 'orden', title: 'Orden', type: 'number'}),
  ],
  orderings: [{title: 'Orden', name: 'orden', by: [{field: 'orden', direction: 'asc'}]}],
})
