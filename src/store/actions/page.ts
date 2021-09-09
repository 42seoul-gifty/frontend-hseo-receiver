export const SET_PAGE = 'SET_PAGE' as const;
export const SET_WHOLE_COUNT = 'SET_WHOLE_COUNT' as const;

export const setPageInfo = () => ({
  type: SET_PAGE,
});

export const setWholeCount = () => ({
  type: SET_WHOLE_COUNT,
});

export type PageInfoAction =
  | ReturnType<typeof setPageInfo>
  | ReturnType<typeof setWholeCount>;
