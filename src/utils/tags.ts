import { ref, onMounted } from 'vue';
import EasyCat from '/src/images/cat-emoji/cat_face.png';
import HardcoreCat from '/src/images/cat-emoji/hardcore-cat.png';
import TerribleCat from '/src/images/cat-emoji/weary_cat.png';
import NiceCat from '/src/images/cat-emoji/heart-eyes-cat.png';
import SeriousCat from '/src/images/cat-emoji/pouting_cat.png';
import BadCat from '/src/images/cat-emoji/weary_cat.png';
import HumorCat from '/src/images/cat-emoji/cat_with_tears_of_joy.png';
import BoringCat from '/src/images/cat-emoji/crying_cat.png';

export type Tags = {
    text: string;
    icon: string;
    isSelected: boolean;
};

export const TotalTags = ref<Tags[]>([]);
export function InitTags() {
    TotalTags.value = [
        { text: '容易', icon: EasyCat, isSelected: false },
        { text: '硬核', icon: HardcoreCat, isSelected: false },
        { text: '避雷', icon: TerribleCat, isSelected: false },
        { text: '推荐', icon: NiceCat, isSelected: false },
        { text: '严格', icon: SeriousCat, isSelected: false },
        { text: '快跑', icon: BadCat, isSelected: false },
        { text: '幽默', icon: HumorCat, isSelected: false },
        { text: '枯燥', icon: BoringCat, isSelected: false }
    ];
}

export function Emoji(text: string) {
    const TotalTag = ref<Tags[]>([]);
    const emojiUrl = ref('');
    TotalTag.value = [
        { text: '容易', icon: EasyCat, isSelected: false },
        { text: '硬核', icon: HardcoreCat, isSelected: false },
        { text: '避雷', icon: TerribleCat, isSelected: false },
        { text: '推荐', icon: NiceCat, isSelected: false },
        { text: '严格', icon: SeriousCat, isSelected: false },
        { text: '快跑', icon: BadCat, isSelected: false },
        { text: '幽默', icon: HumorCat, isSelected: false },
        { text: '枯燥', icon: BoringCat, isSelected: false }
    ];
    for (const tag of TotalTag.value) {
        if (tag.text === text) {
            emojiUrl.value = tag.icon;
        }
    }
    return emojiUrl.value;
}