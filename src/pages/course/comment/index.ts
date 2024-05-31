import type { Ref } from 'vue';

export function useComment(id: Ref<string>) {
    const text = ref('');
    const tags = ref<string[]>([]);

    function commit() {
        console.log(id.value, {
            text: text.value,
            tags: tags.value
        });
        if (text.value) {
            http.CommentController.add({
                target: id.value,
                text: text.value,
                tags: tags.value
            }).then((res) => {
                uni.navigateBack();
                console.log('tag', tags.value);
                console.log('uid', res.data.payload.uid);
            });
        } else {
            uni.showToast({
                title: '未填写吐槽',
                duration: 2000,
                icon: 'none'
            });
        }
    }

    return {
        text,
        tags,
        commit
    };
}
