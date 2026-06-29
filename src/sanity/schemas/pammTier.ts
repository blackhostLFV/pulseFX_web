import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'pammTier',
  title: 'Nivel PAMM',
  type: 'document',
  fields: [
    defineField({name: 'nombre', title: 'Nombre', type: 'string', description: 'PAMM-FX / Investor / Enterprise'}),
    defineField({name: 'rango', title: 'Rango de capital', type: 'string', description: 'Ej. 50 – 19,999 USDT'}),
    defineField({name: 'lockup', title: 'Lock-up', type: 'string'}),
    defineField({name: 'feePulsefx', title: 'Fee PulseFX (%)', type: 'string'}),
    defineField({name: 'tuParte', title: 'Parte del cliente (%)', type: 'string'}),
    defineField({name: 'drawdownRef', title: 'Drawdown ref. (%)', type: 'string'}),
    defineField({name: 'retiroMin', title: 'Retiro mínimo', type: 'string'}),
    defineField({name: 'popular', title: 'Destacado', type: 'boolean', initialValue: false}),
    defineField({name: 'orden', title: 'Orden', type: 'number'}),
  ],
})
