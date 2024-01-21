/// <reference types="./api/data-contracts" />

export {}
declare global {
    type JsonRet<T> = {
        state: {
            msg: string,
            code: number
        },
        payload: T
    }
    interface InitializeComponent {
        init: () => void
    }
}