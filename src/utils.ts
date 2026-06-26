export function getImageCity(name: string) {
    return new URL('./assets/images/cities/' + name + '.webp', import.meta.url)
        .href;
}

export function getImageSkill(name: string) {
    return new URL('./assets/images/skills/' + name + '.webp', import.meta.url)
        .href;
}
