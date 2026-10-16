// Edit this file to update your Premonly website. Use only information you can verify.
// Any blank/unverified metric is hidden from public visitors.
window.PREMONLY_SITE = Object.freeze({
  discordUrl: 'https://discord.gg/sxxYK4DYwJ',
  supportEmail: 'support@premonly.com',
  // Put a real, verifiable Discord member count here and set confirmed: true.
  community: { members: null, confirmed: false },
  // Example: { approved: 16, reviewed: 20, period: 'Jan–Sep 2026', verified: true }
  // This will be hidden unless all required values are supplied and verified.
  appealOutcomes: { approved: null, reviewed: null, period: '', verified: false },
  // Advertised price and stock status supplied by the owner. Confirm before publishing.
  // Turn enabled off whenever stock is no longer available.
  promo: {
    enabled: true,
    confirmed: true, // Set false until you verify stock and the starting price
    badge: 'NEW STOCK',
    message: 'Premonetized YouTube channels available',
    startingPriceUSD: 249,
    linkText: 'Get channel details',
    url: '#availability'
  },
  availability: {
    updatedAt: '', // e.g. '2026-10-16' (manually reviewed date)
    channels: 'New stock announced · From $249 · Confirm in Discord',
    gmail: 'Confirm in Discord',
    appeals: 'Ask for a slot'
  }
});
