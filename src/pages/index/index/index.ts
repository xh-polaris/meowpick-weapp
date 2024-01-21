import type {CourseVO} from "@/api/data-contracts";

const title = ref<CourseVO[] | undefined>([])

// uni.navigateTo({url: "/pages/user/info/index"})
const getData = () => {
    api.CourseController.query().then(res => {
        title.value = res.data.payload.rows
    })
}

export  {
    title,getData
}