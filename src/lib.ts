export const isLaunchFromVK = () => {
  const url = new URL(window.location.href);
  const vkPlatform = url.searchParams.get('vk_platform');
  return !!vkPlatform;
};
