export type TDay = {
    date: Date ;
    color: string | undefined;
};

export type TWeek = {
    days: TDay[];
};