export type TDay = {
    date: Date | undefined;
    color: string | undefined;
};

export type TWeek = {
    days: TDay[];
};