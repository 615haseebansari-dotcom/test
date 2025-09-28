import { useLocation } from 'react-router-dom';
import { getSEOData } from '../utils/seo';

export function useSEO() {
  const location = useLocation();
  const seoData = getSEOData(location.pathname);
  
  return seoData;
}