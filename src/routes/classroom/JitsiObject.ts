export const jitsiObject = {
	api: undefined as any,
	par: undefined as Array<string> | undefined,
	// par: [] as Array<string>,
	domain: 'meet.jit.si',
	getOptions: (admin = false) => getOptions(admin)
};

function getOptions(admin = false) {
	return {
		parentNode: null as Element | null,
		// parentNode: is_client && document.querySelector('#meet'),
		roomName: 'ThinkSolve122822',
		configOverwrite: {
			startWithAudioMuted: true,
			startWithVideoMuted: true,
			// startWithVideoMuted: admin ? true : false,
			disabledSounds: [
				'ASKED_TO_UNMUTE_SOUND',
				'E2EE_OFF_SOUND',
				'E2EE_ON_SOUND',
				'INCOMING_MSG_SOUND',
				'KNOCKING_PARTICIPANT_SOUND',
				'LIVE_STREAMING_OFF_SOUND',
				'LIVE_STREAMING_ON_SOUND',
				'NO_AUDIO_SIGNAL_SOUND',
				'NOISY_AUDIO_INPUT_SOUND',
				'OUTGOING_CALL_EXPIRED_SOUND',
				'OUTGOING_CALL_REJECTED_SOUND',
				'OUTGOING_CALL_RINGING_SOUND',
				'OUTGOING_CALL_START_SOUND',
				'PARTICIPANT_JOINED_SOUND',
				'PARTICIPANT_LEFT_SOUND',
				'RAISE_HAND_SOUND',
				'REACTION_SOUND',
				'RECORDING_OFF_SOUND',
				'RECORDING_ON_SOUND',
				'TALK_WHILE_MUTED_SOUND'
			],

			// TODO: do these actually do what I expect?
			hideConferenceTimer: !admin && true,
			hideConferenceSubject: !admin && true,
			hideParticipantsStats: !admin && true,
			// disablePolls: admin ? false : true,
			disablePolls: !admin && true,
			disableSelfView: !admin && true,
			// disableSelfViewSettings: true,
			deeplinking: { disabled: true }, // ADDED DEC 23,2022 as 'disableDeepLinking: true' stopped working in order to block 'add app/extension' in iframe on mobile
			disableRemoteMute: !admin && true,
			notifications: !admin && ['lobby.notificationTitle'],
			// TODO: still don't understand logic, but works; result: only admin can allow users in
			remoteVideoMenu: !admin && {
				disabled: true
				// disableKick: true,
				// disablePrivateChat: true,
				// disableGrantModerator: true,
			}

			// TODO: get request still grabs all this mp3 data ... id rather not fetch this instead of disabling
		},
		interfaceConfigOverwrite: {
			// DISABLE_JOIN_LEAVE_NOTIFICATIONS: true,
			DEFAULT_BACKGROUND: `#130e21`,
			SHOW_CHROME_EXTENSION_BANNER: false,
			VIDEO_QUALITY_LABEL_DISABLED: !admin && true,
			SETTINGS_SECTIONS: [
				'devices',
				admin && 'moderator',
				admin && 'language',
				admin && 'profile',
				admin && 'calendar',
				admin && 'sounds'
			],
			TOOLBAR_BUTTONS: [
				'desktop',
				'microphone',
				'camera',
				'fullscreen',
				'chat',
				'fodeviceselection',
				'etherpad',
				admin && 'noisesuppression',
				admin && 'settings',
				admin && 'mute-video-everyone',
				admin && 'mute-everyone',
				admin && 'security',
				admin && 'sharedvideo',
				admin && 'videoquality',
				admin && 'profile',
				admin && 'raisehand',
				admin && 'livestreaming',
				admin && 'recording',
				admin && 'closedcaptions',
				admin && 'filmstrip',
				admin && 'feedback',
				admin && 'stats',
				admin && 'shortcuts',
				admin && 'tileview'
				// "hangup",
			]
		}
	};
}

// NOTE: for some reason exporting 'api, par, domain' like below has issues with reassignment in the 'import destination', but wrapping everything in an 'jitsiObject' here and then destructuring and modifying in the import destination has no issues
// export let api: any;
// export let par: Array<string> | undefined;
// export const domain = 'meet.jit.si';
