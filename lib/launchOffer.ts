// 48-hour Grand Opening discount window.
// Edit endsAt to extend or shorten the offer. After the deadline,
// isLaunchOfferActive() returns false and every discount surface
// (strikethrough, -30% chip, badge, countdown) auto-hides on next render.
export const LAUNCH_OFFER = {
  endsAt: "2026-05-27T20:00:00.000Z",
} as const;

export function isLaunchOfferActive(now: Date = new Date()): boolean {
  return now.getTime() < new Date(LAUNCH_OFFER.endsAt).getTime();
}
