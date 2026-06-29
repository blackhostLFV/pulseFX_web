import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'siteSettings',
  title: 'Ajustes del sitio',
  type: 'document',
  fields: [
    defineField({name: 'marca', title: 'Marca', type: 'string', initialValue: 'PulseFX'}),
    defineField({name: 'whatsapp', title: 'WhatsApp', type: 'string'}),
    defineField({name: 'email', title: 'Email de soporte', type: 'string'}),
    defineField({name: 'instagram', title: 'Instagram', type: 'string'}),
    defineField({name: 'twitter', title: 'X / Twitter', type: 'string'}),
    defineField({name: 'avisoRiesgo', title: 'Aviso de riesgo (footer)', type: 'text', rows: 4}),
  ],
})
