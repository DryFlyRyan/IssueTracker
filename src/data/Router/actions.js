export const goToPage = (page, { ...options }) => ({
  type: page,
  payload: {
    ...options,
  },
});
