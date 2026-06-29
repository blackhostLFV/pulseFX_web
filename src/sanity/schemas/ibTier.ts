import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'ibTier',
  title: 'Nivel IB',
  type: 'document',
  fields: [
    defineField({name: 'nombre', title: 'Nombre', type: 'string', description: 'IB FX / IB Pro / Master IB'}),
    defineField({name: 'comisionPamm', title: 'Comisión PAMM (%)', type: 'string'}),
    defineField({name: 'ventaMembresias', title: 'Venta membresías (%)', type: 'string', initialValue: '30%'}),
    defineField({name: 'pago', title: 'Pago', type: 'string', initialValue: 'Semanal'}),
    defineField({name: 'extra', title: 'Extra / bonos', type: 'string'}),
    defineField({name: 'popular', title: 'Destacado', type: 'boolean', initialValue: false}),
    defineField({name: 'orden', title: 'Orden', type: 'number'}),
  ],
})
