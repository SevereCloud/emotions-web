export const isLaunchFromVK = () => {
  const url = new URL(window.location.href);
  const vkPlatform = url.searchParams.get('vk_platform');
  return !!vkPlatform;
};
export const getAppID = () => {
  const url = new URL(window.location.href);
  const vkAppID = url.searchParams.get('vk_app_id');
  return vkAppID ? parseInt(vkAppID) : 0;
};
export const getCord = coordinates => {
  const arr = coordinates.split(' ');
  return [parseFloat(arr[1]), parseFloat(arr[0])];
};
export const distance = (p1, p2) => {
  return Math.sqrt((p2[0] - p1[0]) ** 2 + (p2[1] - p1[1]) ** 2);
};