declare module "ssci" {
  /* tslint:disable-next-line */


  interface IHoltWinter {
    (): void;
    data: (value: number[][]) => IHoltWinter;
    factor?: (factor: number) => IHoltWinter;
    /**
     *
     * @param level - весовой коэффициент, необходим для взвешнивания текущего показателя и предыдущих прогнозных
     * показателей, может принимать значения от 0 до 1, значение по умолчанию: 0.3
     */
    level: (level: number) => IHoltWinter;
    /**
     *
     * @param trend - фактор тренда, может принимать значения от 0 до 1, значение по умолчанию: 0.3
     */
    trend: (trend: number) => IHoltWinter;
    /**
     *
     * @param season - индекс сезонности, может принимать значения от 0 до 1, значение по умолачнию: 0.3
     */
    season: (season: number) => IHoltWinter;
    /**
     *
     * @param value - используется для установки начальных значений для первых «периодических» значений
     * сезонного компонента. Должен быть передан массив с тем же количеством значений, что и 'period'.
     */
    initialSeason?: (value: number) => IHoltWinter;
    period: (value: number) => IHoltWinter;
    x: (func: (arr: []) => number) => IHoltWinter;
    y: (func: (arr: []) => number) => IHoltWinter;
    /**
     * возвращает сумму квадратов остатков
     */
    sumSquares?: () => number;
    
    output?: () => number[][];
    forecast?: (forecastLength: number) => number[][];
  }

  interface Fore {
    expon(): void;
    holt(): void;
    holtWinter(): IHoltWinter;
    movingAverage(): void;
  }
  /* tslint:disable-next-line */
  interface Season {
    average(): void;
    difference(): void;
  }
  /* tslint:disable-next-line */
  interface TimeSeries {
    acf(): void;
    diff(): void;
    pacf(): void;
  }
  /* tslint:disable-next-line */
  interface Smooth {
    ahenderson(): void;
    henderson(): void;
    EWMA(): void;
    filter(): void;
    kernel(): void;
    kernel2(): void;
    quadraticBig(): void;
  }
  /* tslint:disable-next-line */
  export interface SSCI {
    fore: Fore;

    reg: object;

    season: Season;

    smooth: Smooth;

    ts: TimeSeries;
  }

  const SSCI: SSCI;
  export default SSCI;
}
