export const SET_LIKES = 'SET_LIKES' as const;
export const SET_DISLIKES = 'SET_DISLIKES' as const;

export const setPreference = (type: string, id: number) => ({
  type: type,
  payload: id,
});

export type LikesAction = ReturnType<typeof setPreference>;
