export const getImageUrl = (path) => {
    return new URL(`/assets/${path}`, import.meta.url).href;
};

/*
La fonction prend un chemin relatif d'une image (par exemple, "image.jpg") et renvoie une URL complète pointant vers cette image. 
Elle utilise l'URL du module actuel comme base et ajoute le chemin de l'image après le dossier "/assets/".
*/