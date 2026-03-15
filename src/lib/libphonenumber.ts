import { formatIncompletePhoneNumber as _formatIncompletePhoneNumber } from "libphonenumber-js"

/**
 * Formats an incomplete phone number string according to universal metadata.
 *
 * Uses `libphonenumber-js`'s standard formatting which supports all countries including Pakistan.
 *
 * @param phone - The phone number string to format (may be incomplete).
 * @returns The formatted phone number string.
 *
 * @remarks
 * - This function is useful for formatting user input as they type a phone number.
 *
 * @see https://www.npmjs.com/package/libphonenumber-js
 */
export function formatIncompletePhoneNumber(phone: string) {
  return _formatIncompletePhoneNumber(phone)
}
