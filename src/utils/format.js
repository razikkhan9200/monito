/** Small helpers shared across the app. */

// Vietnamese locale uses a dot as thousands separator: 6900000 -> "6.900.000"
const numberFormat = new Intl.NumberFormat("vi-VN");

/** formatPrice(6900000) -> "6.900.000 VND" */
export const formatPrice = (value) => `${numberFormat.format(value)} VND`;

/**
 * px - build a sized Pexels image URL from a photo id.
 * Keeping only ids in the data files keeps them short and easy to swap.
 *   px(6224657)          -> square 600x600
 *   px(4444942, 760, 880) -> custom width / height
 */
export const px = (id, width = 600, height = 600) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=${width}&h=${height}`;
