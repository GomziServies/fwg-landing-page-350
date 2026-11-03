/**
 * FG Group CRM tracking for this site: cookie banner, visitor tracker, and the link that makes an inquiry and the
 * visitor's browsing one lead. Site key 'fwg-landing-350' is registered in fg-api src/config/website-sources.js, which
 * sends this site's leads to the FWG section of the CRM. How it works: ./fg-crm-tracking.js
 */
import apiConfig from '../assets/config/apiConfig';
import { initCrmTracking } from './fg-crm-tracking';

initCrmTracking({
  apiBase: apiConfig.BASE_URL,
  siteKey: 'fwg-landing-350',
  brand: 'Fitness With Gomzi',
  accent: '#88c349',
  accentText: '#0f172a',
  profileKeys: [],
});
