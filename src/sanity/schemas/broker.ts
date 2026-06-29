import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'broker',
  title: 'Broker aliado',
  type: 'document',
  fields: [
    defineField({name: 'nombre', title: 'Nombre', type: 'string', validation: (r) => r.required()}),
    defineField({name: 'logo', title: 'Logo', type: 'image', options: {hotspot: true}}),
    defineField({name: 'orden', title: 'Orden', type: 'number'}),
  ],
})
