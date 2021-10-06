// clamp module
export interface ClampArgument {
  value: number;
  min?: number;
  max?: number;
}

export declare function clamp({ value, min, max }: ClampArgument): number;
export declare function isClamped({ value, min, max }: ClampArgument): boolean;

// range module
export interface RangeArgument {
  start?: number;
  step?: number;
  end?: number;
  length?: number;
}

export declare function range({
  start,
  end,
  step,
  length
}: RangeArgument): Array<number> | false;
