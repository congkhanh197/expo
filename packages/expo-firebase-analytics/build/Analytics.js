import { UnavailabilityError } from '@unimodules/core';
import ExpoFirebaseAnalytics from './ExpoFirebaseAnalytics';
import parseConfig from './parseConfig';
/**
 * Get the bundled Google Services config file.
 * This is useful for debugging if your app was built properly.
 */
export function getBundledGoogleServicesConfig() {
    return ExpoFirebaseAnalytics.app || null;
}
/**
 * Similar to `firebase.initializeApp()` on web but works to start a native Firebase app while the app is running.
 * This can be used to test the native iOS Firebase app in the Expo client.
 * This method should not be used in production, instead the app should be bundled with the native Google Services files via the `app.json`.
 *
 * @param googleServices Platform specific Google Services file for starting a Firebase app during runtime
 */
export async function initializeAppDangerously(googleServices) {
    // @ts-ignore
    if (global.__DEV__ !== true) {
        console.warn('initializeAppDangerously should only be used in dev mode');
    }
    if (!ExpoFirebaseAnalytics.initializeAppDangerously) {
        throw new UnavailabilityError('expo-firebase-analytics', 'initializeAppDangerously');
    }
    return await ExpoFirebaseAnalytics.initializeAppDangerously(parseConfig(googleServices));
}
/**
 * Delete the default Firebase app instance. If no default app is running then nothing happens.
 */
export async function deleteDefaultApp() {
    if (!ExpoFirebaseAnalytics.deleteApp) {
        throw new UnavailabilityError('expo-firebase-analytics', 'deleteApp');
    }
    return await ExpoFirebaseAnalytics.deleteApp({});
}
/**
 * Logs an app event. The event can have up to 25 parameters. Events with the same name must have
 * the same parameters. Up to 500 event names are supported. Using predefined events and/or
 * parameters is recommended for optimal reporting.
 *
 * The following event names are reserved and cannot be used:
 * - `ad_activeview`
 * - `ad_click`
 * - `ad_exposure`
 * - `ad_impression`
 * - `ad_query`
 * - `adunit_exposure`
 * - `app_clear_data`
 * - `app_remove`
 * - `app_update`
 * - `error`
 * - `first_open`
 * - `in_app_purchase`
 * - `notification_dismiss`
 * - `notification_foreground`
 * - `notification_open`
 * - `notification_receive`
 * - `os_update`
 * - `screen_view`
 * - `session_start`
 * - `user_engagement`
 *
 * @param name The name of the event. Should contain 1 to 40 alphanumeric characters or
 *     underscores. The name must start with an alphabetic character. Some event names are
 *     reserved. The "firebase_",
 *     "google_", and "ga_" prefixes are reserved and should not be used. Note that event names are
 *     case-sensitive and that logging two events whose names differ only in case will result in
 *     two distinct events.
 * @param parameters The dictionary of event parameters. Passing `undefined` indicates that the event has
 *     no parameters. Parameter names can be up to 40 characters long and must start with an
 *     alphabetic character and contain only alphanumeric characters and underscores. Only `String`
 *     and `Number` (signed 64-bit integer and 64-bit floating-point number) parameter types are
 *     supported. `String` parameter values can be up to 100 characters long. The "firebase_",
 *     "google_", and "ga_" prefixes are reserved and should not be used for parameter names.
 */
export async function logEvent(name, properties) {
    if (!ExpoFirebaseAnalytics.logEvent) {
        throw new UnavailabilityError('expo-firebase-analytics', 'logEvent');
    }
    return await ExpoFirebaseAnalytics.logEvent(name, properties);
}
/**
 * Sets whether analytics collection is enabled for this app on this device. This setting is
 * persisted across app sessions. By default it is enabled.
 *
 * @param isEnabled A flag that enables or disables Analytics collection.
 */
export async function setAnalyticsCollectionEnabled(isEnabled) {
    if (!ExpoFirebaseAnalytics.setAnalyticsCollectionEnabled) {
        throw new UnavailabilityError('expo-firebase-analytics', 'setAnalyticsCollectionEnabled');
    }
    return await ExpoFirebaseAnalytics.setAnalyticsCollectionEnabled(isEnabled);
}
/**
 * Sets the current screen name, which specifies the current visual context in your app. This helps
 * identify the areas in your app where users spend their time and how they interact with your app.
 *
 * @param screenName The name of the current screen. Should contain 1 to 100 characters. Set to `undefined`
 *     to clear the current screen name.
 * @param screenClassOverride The name of the screen class. Should contain 1 to 100 characters. By
 *     default this is the class name of the current screen (UIViewController on iOS). Set to `undefined` to revert to the
 *     default class name.
 */
export async function setCurrentScreen(screenName, screenClassOverride) {
    if (!ExpoFirebaseAnalytics.setCurrentScreen) {
        throw new UnavailabilityError('expo-firebase-analytics', 'setCurrentScreen');
    }
    return await ExpoFirebaseAnalytics.setCurrentScreen(screenName, screenClassOverride);
}
/**
 * Sets the interval of inactivity in seconds that terminates the current session. The default
 * value is 1800000 milliseconds (30 minutes).
 *
 * @param sessionTimeoutInterval The custom time of inactivity in milliseconds before the current
 *     session terminates.
 */
export async function setSessionTimeoutDuration(sessionTimeoutInterval) {
    if (!ExpoFirebaseAnalytics.setSessionTimeoutDuration) {
        throw new UnavailabilityError('expo-firebase-analytics', 'setSessionTimeoutDuration');
    }
    return await ExpoFirebaseAnalytics.setSessionTimeoutDuration(sessionTimeoutInterval);
}
/**
 * Sets the user ID property. This feature must be used in accordance with
 * [Google's Privacy Policy](https://www.google.com/policies/privacy)
 *
 * @param userID The user ID to ascribe to the user of this app on this device, which must be
 *     non-empty and no more than 256 characters long. Setting userID to null removes the user ID.
 */
export async function setUserId(userId) {
    if (!ExpoFirebaseAnalytics.setUserId) {
        throw new UnavailabilityError('expo-firebase-analytics', 'setUserId');
    }
    return await ExpoFirebaseAnalytics.setUserId(userId);
}
/**
 * Sets a user property to a given value. Up to 25 user property names are supported. Once set,
 * user property values persist throughout the app life-cycle and across sessions.
 *
 * The following user property names are reserved and cannot be used:
 *
 * - `first_open_time`
 * - `last_deep_link_referrer`
 * - `user_id`
 *
 * @param name The name of the user property to set. Should contain 1 to 24 alphanumeric characters
 *     or underscores and must start with an alphabetic character. The "firebase_", "google_", and
 *     "ga_" prefixes are reserved and should not be used for user property names.
 * @param value The value of the user property. Values can be up to 36 characters long. Setting the
 *     value to null removes the user property.
 */
export async function setUserProperty(name, value) {
    if (!ExpoFirebaseAnalytics.setUserProperty) {
        throw new UnavailabilityError('expo-firebase-analytics', 'setUserProperty');
    }
    return await ExpoFirebaseAnalytics.setUserProperty(name, value);
}
/**
 * Clears all analytics data for this instance from the device and resets the app instance ID.
 */
export async function resetAnalyticsData() {
    if (!ExpoFirebaseAnalytics.resetAnalyticsData) {
        throw new UnavailabilityError('expo-firebase-analytics', 'resetAnalyticsData');
    }
    return await ExpoFirebaseAnalytics.resetAnalyticsData();
}
/**
 * Sets multiple user properties to the supplied values. This is a web-only method that's polyfilled on native to use `setUserProperty`.
 *
 * @param properties key/value set of user properties
 */
export async function setUserProperties(properties) {
    if (!ExpoFirebaseAnalytics.setUserProperties) {
        // Attempt to polyfill this command for native iOS and Android platforms.
        await Promise.all(Object.keys(properties).map(key => setUserProperty(key, properties[key])));
        return;
    }
    return await ExpoFirebaseAnalytics.setUserProperties(properties);
}
//# sourceMappingURL=Analytics.js.map