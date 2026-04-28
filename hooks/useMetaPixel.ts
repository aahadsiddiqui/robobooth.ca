import { useCallback } from 'react';

type MetaUserData = Record<string, string | undefined>;
const USA_CITIES = ['Chicago'];

export const useMetaPixel = () => {
  // Pixel/tracking integrations removed. Keep a stable API as no-ops.
  const trackLead = useCallback((_source: string, _location?: string, _userData?: MetaUserData) => {}, []);
  const trackFormSubmission = useCallback((_formType: string, _location?: string, _userData?: MetaUserData) => {}, []);
  const trackPackageView = useCallback((_packageType: string) => {}, []);
  const trackContactClick = useCallback((_page: string, _location?: string) => {}, []);
  const trackBookingInquiry = useCallback((_eventType: string, _location?: string, _userData?: MetaUserData) => {}, []);
  const trackVideoView = useCallback((_videoType: string) => {}, []);
  const trackGalleryView = useCallback((_galleryType: string) => {}, []);
  const trackPhoneClick = useCallback((_page: string, _location?: string) => {}, []);
  const trackEmailClick = useCallback((_page: string, _location?: string) => {}, []);
  const trackLocationBasedEvent = useCallback((_eventName: string, _city: string, _additionalParams?: Record<string, any>) => {}, []);

  return {
    trackLead,
    trackFormSubmission,
    trackPackageView,
    trackContactClick,
    trackBookingInquiry,
    trackVideoView,
    trackGalleryView,
    trackPhoneClick,
    trackEmailClick,
    trackLocationBasedEvent,
    USA_CITIES,
  };
}; 