export function getImageCity(name: string) {
    return new URL('/images/cities/' + name + '.webp', import.meta.url).href;
}

export function getImageSkill(name: string) {
    return new URL('/images/skills/' + name + '.webp', import.meta.url).href;
}
