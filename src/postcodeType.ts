export type DaumPostcodeData = {
  zonecode: number;
  address: string;
  addressEnglish: string;
  buildingName?: string;
  addressType: 'R' | 'J';
  userSelectedType: 'R' | 'J';
  noSelected: 'Y' | 'N';
  userLanguageType: 'K' | 'E';
  roadAddress: string;
};

export type DaumPostcodeSearchData = {
  q?: string;
  count?: boolean;
};

export type DaumPostcodeOption = {
  oncomplete?: (data: DaumPostcodeData) => void;
  onclose?: () => void;
  onresize?: () => void;
  onsearch?: (data: DaumPostcodeSearchData) => void;
  width?: number | string;
  height?: number | string;
  animation?: boolean;
  focusInput?: boolean;
  autoMapping?: boolean;
};

export type DaumPostcodeOpenOption = {
  left: number;
  top: number;
  popupName: string;
};

export type PostcodeOperator = {
  open: (options?: DaumPostcodeOpenOption) => void;
  embed: (wrap: Element, options: { q: string; autoClose: boolean }) => void;
};

export interface Daum {
  Postcode: new (options?: DaumPostcodeOption) => PostcodeOperator;
  postcode: {
    load: (fn: () => void) => void;
  };
}

declare global {
  interface Window {
    daum: Daum;
  }
}
