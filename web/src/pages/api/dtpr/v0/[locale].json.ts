import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import locales from '../../../../../locales';

export const get: APIRoute = async function get ({ params, request }) {
  const locale = params.locale;
  
  const dtprElements = await getCollection('dtpr_elements');

  return {
    body: JSON.stringify({
      dtprElements: dtprElements
    })
  }
};

export function getStaticPaths () {
  const paths = Object.keys(locales).map((locale) => {
    return { params: { locale } } 
  });
  return paths;
}
