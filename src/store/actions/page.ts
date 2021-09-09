export const SET_PAGE = 'SET_PAGE' as const;

export const setPageInfo = () => ({
  type: SET_PAGE,
});

export type PageInfoAction = ReturnType<typeof setPageInfo>;
