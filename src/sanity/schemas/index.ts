// Registro de esquemas Sanity para PulseFX.
// En sanity.config.ts:  schema: { types: schemaTypes }
import estrategia from './estrategia'
import plan from './plan'
import pammTier from './pammTier'
import ibTier from './ibTier'
import broker from './broker'
import historia from './historia'
import faq from './faq'
import promocion from './promocion'
import siteSettings from './siteSettings'

export const schemaTypes = [
  estrategia, plan, pammTier, ibTier, broker, historia, faq, promocion, siteSettings,
]
