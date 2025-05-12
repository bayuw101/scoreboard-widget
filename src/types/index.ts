export type optionsType = {
    header?: "top" | "bottom" | "left" | "right" | false;
    arbiterLogo?: "mini" | "full" | boolean;
    primaryColor?: string;
    secondaryColor?: string;
    thirdColor?: string;
    backgroundColor?: string;
    hideSports?: boolean;
}

export type parametersType = {
    sportId?: number[] | number;
    genderId?: number[] | number;
    levelId?: number[] | number;
    schoolId?: number[] | number;
}