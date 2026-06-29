import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'faq',
  title: 'FAQ',
  type: 'document',
  fields: [
    defineField({name: 'pregunta', title: 'Pregunta', type: 'string', validation: (r) => r.required()}),
    defineField({name: 'respuesta', title: 'Respuesta', type: 'text', rows: 4, validation: (r) => r.required()}),
    defineField({name: 'orden', title: 'Orden', type: 'number'}),
  ],
})
