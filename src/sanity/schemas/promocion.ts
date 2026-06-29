import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'promocion',
  title: 'Promoción',
  type: 'document',
  fields: [
    defineField({name: 'titulo', title: 'Título', type: 'string', validation: (r) => r.required()}),
    defineField({name: 'descripcion', title: 'Descripción', type: 'text', rows: 3}),
    defineField({name: 'ctaTexto', title: 'Texto del botón', type: 'string'}),
    defineField({name: 'ctaEnlace', title: 'Enlace del botón', type: 'string'}),
    defineField({name: 'vigente', title: 'Vigente', type: 'boolean', initialValue: true}),
    defineField({name: 'orden', title: 'Orden', type: 'number'}),
  ],
})
