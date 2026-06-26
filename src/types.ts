import cities from './constants/cities';

export type CityVariant = keyof typeof cities;
export type CityValue = Readonly<{ name: CityVariant; title: string }>;

export type SkillValue = Readonly<{
    description: string;
    name: string;
    title: string;
}>;
