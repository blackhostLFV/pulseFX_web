import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'historia',
  title: 'Historia / Testimonio',
  type: 'document',
  fields: [
    defineField({name: 'quote', title: 'Testimonio', type: 'text', rows: 3, validation: (r) => r.required()}),
    defineField({name: 'nombre', title: 'Nombre', type: 'string'}),
    defineField({name: 'rol', title: 'Rol / Ruta', type: 'string', description: 'Ej. Copy Trading · Gold'}),
    defineField({name: 'destacada', title: 'Historia destacada', type: 'boolean', initialValue: false}),
    defineField({name: 'orden', title: 'Orden', type: 'number'}),
  ],
})
