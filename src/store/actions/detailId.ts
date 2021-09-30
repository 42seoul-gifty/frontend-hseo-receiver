export const SET_ID = 'SET_ID' as const;

export const setId = (id: string) => ({
  type: SET_ID,
  payload: id,
});

export type IdAction = ReturnType<typeof setId>;
