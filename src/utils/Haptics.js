import { Haptics, ImpactStyle, NotificationType } from "@capacitor/haptics";

function run(p) { p.catch(() => { }); };

export const Haptics = {
	// Impact
	light: () => run(Haptics.impact({ style: ImpactStyle.Light })),
	medium: () => run(Haptics.impact({ style: ImpactStyle.Medium })),
	strong: () => run(Haptics.impact({ style: ImpactStyle.Heavy })),

	// Notification
	success: () => run(Haptics.notification({ type: NotificationType.Success })),
	warning: () => run(Haptics.notification({ type: NotificationType.Warning })),
	error: () => run(Haptics.notification({ type: NotificationType.Error })),

	// Misc
	vibrate: (duration = 300) => run(Haptics.vibrate({ duration })),
	selection: () => run(Haptics.selectionChanged()),
};

