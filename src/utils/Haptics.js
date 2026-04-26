import { Haptics as H, ImpactStyle, NotificationType } from "@capacitor/Haptics";

function run(p) {
	p.catch(() => { });
}

export const Haptics = {
	// Impact
	light: function () {
		run(H.impact({ style: ImpactStyle.Light }));
	},
	medium: function () {
		run(H.impact({ style: ImpactStyle.Medium }));
	},
	strong: function () {
		run(H.impact({ style: ImpactStyle.Heavy }));
	},

	// Notification
	success: function () {
		run(H.notification({ type: NotificationType.Success }));
	},
	warning: function () {
		run(H.notification({ type: NotificationType.Warning }));
	},
	error: function () {
		run(H.notification({ type: NotificationType.Error }));
	},

	// Misc
	vibrate: function (duration = 300) {
		run(H.vibrate({ duration }));
	},
	selection: function () {
		run(H.selectionChanged());
	}
};

