export const GTM_ID = process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID;

export function pageview(url) {
  pushToDataLayer({
    event: 'pageview',
    page: url,
  });
}

export function event(eventName, eventData) {
  pushToDataLayer({
    event: eventName,
    ...eventData,
  });
}

function pushToDataLayer(data) {
  try {
    window.dataLayer.push(data);
  } catch {
    console.warn(`Could not push ${data.event || 'event'} to dataLayer. Is dataLayer initialized?`);
  }
}
